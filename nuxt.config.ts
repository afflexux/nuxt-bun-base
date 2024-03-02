export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      Inter: true,
      //   'Plus+Jakarta+Sans': true,
    },
  },
})
