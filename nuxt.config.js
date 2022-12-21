require('dotenv').config()
import localizationConfig from "./locales/config";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    routes: [
      ...localizationConfig.locales.map(locale => 
          locale.code==localizationConfig.defaultLocale
            ? "/"
            : `/${locale.code}`
        )
    ]
  },

  env:{
    MAINTENANCE: process.env.MAINTENANCE,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/assets/images/meta/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/style/css/fonts.css',
    '~/static/assets/style/css/global.css',
    '~/static/assets/style/scss/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/extendApp.js',
    '~/plugins/authTokenToUser.js',
    '~/plugins/persistedState.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      useWebmanifestExtension: true,
    }
  },

  i18n: localizationConfig,

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  yandexMetrika: {
    id: process.env.YANDEX_METRICA_ID,
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  },

  router: {
    middleware: 'middleware',
    base: '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
