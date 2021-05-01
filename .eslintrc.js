module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    semi: ['error', 'never'],
  },
}
