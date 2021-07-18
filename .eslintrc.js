module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prettier/prettier": [
        "warn",
        {
          "tabWidth": 4,
          "singleQuote": true,
          "endOfLine": "auto"
        }
      ],
      "vue/require-default-prop": 0,
      "vue/require-prop-types": 0
  },
};
