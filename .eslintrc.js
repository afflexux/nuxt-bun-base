module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    // 'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/no-template-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
  },
}
