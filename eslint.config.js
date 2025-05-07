import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import node from 'eslint-plugin-node';

export default [
  js.configs.recommended,
  node.configs['flat/recommended'],
  {
    ignores: ['node_modules', 'build', 'dist'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unknown': 'error',
      'import/extensions': 'off',
      'linebreak-style': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
      'no-underscore-dangle': 'off',
      'import/prefer-default-export': 'off',
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
]; 