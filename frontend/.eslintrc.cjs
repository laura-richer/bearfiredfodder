const path = require('node:path');

module.exports = {
  env: {
    browser: true,
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:github/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
    },
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 8,
    extends: 'airbnb-base',
    requireConfigFile: false,
    sourceType: 'module',
    extraFileExtensions: ['.astro'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/', path.resolve(__dirname, 'src')],
          ['~', path.resolve(__dirname, '/')],
        ],
        extensions: ['.astro'],
      },
    },
  },
  plugins: ['github', 'sonarjs'],
  rules: {
    'i18n-text/no-en': 0,
    'eslint-comments/no-use': ['warn', { allow: ['eslint-disable-next-line'] }],
    'filenames/match-regex': 0,
    'github/array-foreach': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-mutable-exports': ['warn'],
    'import/no-namespace': 0,
    'max-classes-per-file': ['warn', 1],
    'max-lines': ['warn', 700],
    'max-nested-callbacks': ['warn', 4],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          params: false,
          props: false,
          args: false,
          src: false,
          req: false,
          res: false,
        },
      },
    ],
  },
};
