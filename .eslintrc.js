module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript',
  ],
  rules: {
    'vue/valid-v-bind': 0,
    'vue/valid-v-for': 0,
    'vue/no-parsing-error': 0,
    'vue/no-unused-vars': 0,
    'vue/require-v-for-key': 0,
    'vue/require-valid-default-prop': 0,
    semi: [2, 'never'],
    'import/extensions': 0,
    'import/first': 0,
    'import/no-named-as-default-member': 0,
    'import/no-dynamic-require': 0,
    camelcase: 0,
    'no-mixed-operators': 0,
    'no-underscore-dangle': 0,
    radix: 0,
    'no-prototype-builtins': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'func-names': 0,
    'no-bitwise': 0,
    'no-useless-escape': 0,
    'global-require': 0,
    indent: 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-confusing-arrow': 0,
    'consistent-return': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'vue/script-indent': [
      'warn',
      2,
      {
        baseIndent: 1,
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // TODO:remove after :hammer: linter
    'no-return-assign': 0,
    'import/no-cycle': 0,
    'import/named': 0,
    'no-named-as-defaul': 0,
    'import/no-named-as-default': 0,
    //
    'vue/html-indent': [2, 4],
    // need for vue component
    'class-methods-use-this': 0,
    // error check files without extension
    'vue/attribute-hyphenation': [
      2,
      'never',
      {
        ignore: ['custom-prop'],
      },
    ],
    // formatting work bad
    'object-curly-newline': 0,
    // server key
    'no-named-as-default': 0,
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'never',
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    plugins: [
      'typescript',
    ],
  },
}
