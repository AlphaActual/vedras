import i18n from './config/i18n'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vedras',
    htmlAttrs: {
      lang: 'hr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:title", content: "Vedras | Unatoč privremenoj stanci cijele event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove pandemije i učiniti da se svi što prije vratimo normalnom životu."},
      { property: "og:description", content: "Vedras | Unatoč privremenoj stanci cijele event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove pandemije i učiniti da se svi što prije vratimo normalnom životu."}
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com"},
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
    ],
    script : [
      {
        src: "https://kit.fontawesome.com/e7ff830aab.js", crossorigin : 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue','@/plugins/convertDates.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    /* other modules */
    [
     '@nuxtjs/i18n',
     {
       vueI18nLoader: true,
       defaultLocale: 'hr',
        locales: [
         {
            code: 'en',
            name: 'English'
         },
         {
            code: 'hr',
            name: 'Hrvatski'
         }
       ],
      //  i18n importano na vrhu dokumenta
       vueI18n: i18n
     }
    ]
   ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    base: '/'
  }
}
