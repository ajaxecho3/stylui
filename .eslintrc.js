module.exports = {
  plugins: ["@stylexjs"],

  rules: {
    "@stylexjs/valid-styles": ["error", { ...options }],
  },

  extends: ["plugin:storybook/recommended"]
};