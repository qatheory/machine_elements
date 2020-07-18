module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    extends: [
        "@nuxtjs",
        "prettier",
        "prettier/vue",
        "plugin:prettier/recommended",
        "plugin:nuxt/recommended",
    ],
    plugins: ["prettier"],
    "prettier/prettier": [
        "error",
        {
            endOfLine: "auto",
        },
    ],
    // add your custom rules here
    rules: {},
}
