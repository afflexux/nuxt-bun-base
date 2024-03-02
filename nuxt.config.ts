export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      Inter: true,
      //   'Plus+Jakarta+Sans': true,
    },
  },
})
