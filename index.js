module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    TMON: true,
  },
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
};
