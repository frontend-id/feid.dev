module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      typescript: {},
    },
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['off'],

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': ['off'],
  },
};
