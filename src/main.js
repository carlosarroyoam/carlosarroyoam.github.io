import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    en: {
      navlinks: {
        aboutme: 'About me',
        portfolio: 'Portfolio',
        contactme: 'Contact me',
      },
      message: {
        hello: 'Hello world'
      }
    },
    es: {
      navlinks: {
        aboutme: 'Acerca de mi',
        portfolio: 'Portafolio',
        contactme: 'Contacto',
      },
      message: {
        hello: 'Hola mundo'
      }
    }
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
