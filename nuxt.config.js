export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sheanch-home-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/frontend/css/style.css',
    '~/assets/frontend/sass/main.scss',
    'slick-carousel/slick/slick.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    //proxy: true,
    baseURL: process.env.APP_ROOT_API
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/me', method: 'post' }
        }
      }
    }
  },

  bootstrapVue: {
      icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: ['auth']
  },
  reactStrictMode: true,
  env: {
    APP_ROOT_API: process.env.APP_ROOT_API
  }

}
