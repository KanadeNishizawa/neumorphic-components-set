module.exports = {
  extends: ['prettier', 'plugin:vue/vue3-recommended'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true
      }
    ]
  },
  plugins: ['prettier']
};
