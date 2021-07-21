export default {
  // Testing in production - comment out to try without critters integration
  modules: [process.env.CRITTERS && '@nuxtjs/critters'].filter(Boolean),

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.ts',
  },
}
