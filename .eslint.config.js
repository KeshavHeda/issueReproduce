export default {
    "eslintConfig": {
        "extends": [
            "eslint:recommended",
            "plugin:import/errors",
            "plugin:import/warnings"
        ],
        "parser": "@babel/eslint-parser",
        "parserOptions": {
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "rules": {
            "no-debugger": "error",
            "no-console": "error",
            "no-unused-vars": "error",
            "react/prop-types": "error"
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        },
        "root": true
    }
};