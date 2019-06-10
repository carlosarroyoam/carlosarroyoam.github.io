import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, Vue }) => {
    Vue.use(VueI18n)

    app.i18n = new VueI18n({
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
}