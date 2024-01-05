import { join, resolve, dirname } from "path";
import { fileURLToPath } from 'node:url';
import TerserWebpackPlugin from "terser-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default function (_env, argv) {
    const isProduction = argv.mode === "production";
    const __dirname = dirname(fileURLToPath(import.meta.url));

    return {
        devtool: "cheap-module-source-map",
        entry: {
            index: join(__dirname, "src", "index.js"),
        },
        mode: "production",
        experiments: {
            outputModule: true,
          },
        output: {
            asyncChunks: false,
            charset: true,
            libraryTarget: 'module',
            globalObject: 'this',
            path: resolve(__dirname, "dist"),
            filename: "[name].bundle.js",
            chunkFilename: "[name].chunk.js",
        },
        module: {
            rules: [
                {
                    test: /\.?js$/i,
                    // test: /\.(mjs|cjs|js)$/,
                    // test: /\.m?js(\?.*)?$/i,
                    // test: /\.?js?$/, // test: /\.?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: false,
                            cacheCompression: false,
                            envName: "production"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader"
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "[name].[ext]"
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            // new MiniCssExtractPlugin({
            //     filename: "[name].css"
            // }),
            new CopyPlugin({
                patterns: [
                    { from: "src\\assets\\sample.png", to: "assets" },
                ],
            }),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    // test: /\.?js$/i,
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    parallel: false,
                    terserOptions: {
                        compress: true,
                        keep_fnames: true,
                        mangle: true,
                        module: false,
                        nameCache: false,
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                    }
                }),
            ],
            splitChunks: {
                chunks: "all",
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                        }
                    },
                    commons: {
                        name: 'common',
                        chunks: 'initial',
                        minChunks: 2,
                        priority: -10
                    }
                }
            },
            runtimeChunk: "single"
        },
        devServer: {
            compress: true,
            historyApiFallback: true,
            open: true,
            overlay: true
        }
    };
};


