module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
    'stylelint-selector-bem-pattern',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'no-descending-specificity': null,
    indentation: 2,
    'order/order': ['custom-properties', 'declarations'],
    'unit-allowed-list': [
      ['px', 'fr', 'rem', 'em', '%', 's', 'deg', 'vh', 'vw'],
      { severity: 'warning' },
    ],
    'prettier/prettier': [true, { severity: 'warning' }],
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
      { severity: 'warning' },
    ],
    'at-rule-no-unknown': null,
    'function-url-quotes': null,
    'function-no-unknown': null,
    'no-invalid-position-at-import-rule': [true, { ignoreAtRules: ['use'] }],
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/dollar-variable-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'value-keyword-case': null,
  },
};
