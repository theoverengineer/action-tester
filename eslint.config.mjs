import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import security from 'eslint-plugin-security';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      jest,
      security,
    },

    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },

      parser: tsParser,
      ecmaVersion: 2017,
      sourceType: 'module',

      parserOptions: {
        project: ['tsconfig.json'],
      },
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },

    rules: {
      'max-len': [
        'error',
        {
          code: 128,
        },
      ],

      'import/extensions': 'off',
      'node/no-missing-import': 'off',
      'react/jsx-filename-extension': 'off',
      'node/file-extension-in-import': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
      'node/exports-style': ['error', 'module.exports'],
      'node/prefer-global/buffer': ['error', 'always'],
      'node/prefer-global/console': ['error', 'always'],
      'node/prefer-global/process': ['error', 'always'],
      'node/prefer-global/url-search-params': ['error', 'always'],
      'node/prefer-global/url': ['error', 'always'],
      'node/prefer-promises/dns': 'error',
      'node/prefer-promises/fs': 'error',
    },
  },
];
