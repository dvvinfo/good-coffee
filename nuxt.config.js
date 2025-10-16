export default {
  ssr: true,
  target: 'server',

  head: {
    titleTemplate: '%s - Добрый кофе',
    title: 'Добрый кофе',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' }
    ]
  },

  css: [
    '@/assets/styles/main.scss'
  ],

  plugins: [
    '@/plugins/api.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/styles/variables.scss'
    ]
  },

  vuetify: {
    customVariables: ['@/assets/styles/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FFD166',
          secondary: '#EEEEEE',
          background: '#FFFFFF',
          text: '#000000',
          caption: '#787878'
        },
        dark: {
          primary: '#FFD166',
          secondary: '#333333',
          background: '#1E1E1E',
          text: '#FFFFFF',
          caption: '#B0B0B0'
        }
      }
    },
    defaultAssets: {
      font: false,
      icons: 'mdi'
    }
  },

  build: {
  }
}
