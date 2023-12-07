module.exports = {
  root: true,
  plugins: ['react-refresh'],
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    //import
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    //react
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    //ts
    '@typescript-eslint/no-empty-interface': 'off',
  },
}
