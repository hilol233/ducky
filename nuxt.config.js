export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dominus",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/dominus.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/VCalendar", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/utilities" },
    { path: "~/components/utilities/modals" },
    { path: "~/components/utilities/modals/modalOverModal" },
    { path: "~/components/home", prefix: "Home" },
    { path: "~/components/faq", prefix: "Faq" },
    { path: "~/components/settings", prefix: "Set" },
    { path: "~/components/terms-of-service", prefix: "Terms" },
    { path: "~/components/privacy-policy", prefix: "Privacy" },
    { path: "~/components/history", prefix: "History" },
    { path: "~/components/subscription", prefix: "Sub" },
    { path: "~/components/roblox-accounts", prefix: "RobAcc" },
    { path: "~/components/boosts", prefix: "Boosts" },
    { path: "~/components/dashboard", prefix: "Dash" }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",

  /*
   ** Server Middleware
   */
  serverMiddleware: {
    "/api": "~/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: "http://localhost:3000"
  },

  // nuxtjs toast config
  toast: {
    position: 'top-center',
    duration: 4000,
    keepOnHover: true,
    theme: 'bubble',
    register: [] // Register custom toasts
  }
};
