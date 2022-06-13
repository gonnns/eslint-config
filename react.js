module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
  },
};
