module.exports = {
    "extends": [
        "tslint:recommended"
    ],

    // https://palantir.github.io/tslint/rules/
    rules: {
        "variable-name": {
            "options": [
                "allow-leading-underscore"
            ]
        },
        "member-ordering": [true, { "order": "statics-first" }],
        "member-access": [true, "no-public"],
        "array-type": [true, "generic"],
        "space-before-function-paren": [true, {
            "anonymous": "always",
            "asyncArrow": "always",
            "constructor": "never",
            "method": "never",
            "named": "never",
        }],
        "no-var-requires": false,
        "no-console": false,
        "trailing-comma": false,
        "quotemark": [true, "single"]
    }
};
