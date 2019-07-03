const webpack = require('webpack')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Material-NuxtJS/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js', type: 'text/javascript', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', type: 'text/javascript', body: true },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', type: 'text/javascript', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css', lang: 'css' },
    { src: '~/node_modules/animate.css/animate.min.css', lang: 'css' },
    { src: '~/node_modules/jquery.scrollbar/jquery.scrollbar.css', lang: 'css' },
    { src: '~/assets/css/app.min.css', lang: 'css' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/assets/js/bootstrap.min.js', ssr: false },
    // { src: '~plugins/bootstrap.js', ssr: false },
    // { src: '~plugins/popper.js', ssr: false },
    { src: '~plugins/jquery-scroll-bar.js', ssr: false },
    { src: '~plugins/jquery-scroll-lock.js', ssr: false },
    { src: '~/assets/js/app.min.js', ssr: false },
    { src: '~/plugins/vueScrollBehavior.js', ssr: false },
    { src: '~/plugins/google-maps' },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  ...routerBase,
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
            ({loader}) => loader === 'vue-loader')
        const { options: {loaders} } = vueLoader || { options: {} }
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  },
  router: {
    linkActiveClas: 'navigation__sub--active navigation__sub--toggled',
    linkExactActiveClass: 'navigation__active'
  }
}

function changeLoaderOptions (loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets'],
          // data: '@import "_imports";'
        })
      }
    }
  }
}
