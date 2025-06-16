module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },

  parserOptions: {
    parser: "@babel/eslint-parser"
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
