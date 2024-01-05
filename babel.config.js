export default function (api) {
    api.cache(false);

    const presets = [
    [
        "@babel/preset-env",
        {
            "modules": "auto",
            "targets": {
                "node": "current"
            }
        }
    ], 
    ["@babel/preset-react", 
        {
            "pragma": "dom",
            "pragmaFrag": "DomFrag",
            "throwIfNamespace": false,
            "runtime": "classic"
        }
    ]
    ];
    const plugins = [
        "@babel/plugin-transform-runtime"
    ];
    return {
        presets,
        plugins
    };
}
