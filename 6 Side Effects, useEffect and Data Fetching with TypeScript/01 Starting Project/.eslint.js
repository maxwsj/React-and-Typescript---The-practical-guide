// .eslintrc.js
module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
      project: './tsconfig.json',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   plugins: ['react', '@typescript-eslint', 'react-hooks'],
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
   ],
   rules: {
      // You can customize rules here
      'react/react-in-jsx-scope': 'off', // Not needed with Vite and new JSX transform
      '@typescript-eslint/no-unused-vars': [
         'warn',
         { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react-hooks/exhaustive-deps': 'warn',
   },
};
