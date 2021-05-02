export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'static',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {},
	/*
	 ** Customize the link active class
	 */
	router: {
		trailingSlash: true,
		linkActiveClass: 'text-white'
	},
	/*
	 ** Global CSS
	 */
	tailwindcss: {
		cssPath: '~/assets/scss/styles.scss',
		configPath: 'tailwind.config.js',
		exposeConfig: false
	},
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: [
		{
			path: '~/components/commons',
			prefix: 'app'
		}
	],
	i18n: {
		defaultLocale: 'es',
		vueI18n: {
			fallbackLocale: 'en'
		},
		rootRedirect: {
			statusCode: 301,
			path: 'es/about-me/'
		},
		strategy: 'prefix',
		seo: false,
		lazy: true,
		langDir: 'lang/',
		locales: [
			{
				code: 'es',
				file: 'es-MX.js',
				iso: 'es-MX'
			},
			{
				code: 'en',
				file: 'en-US.js',
				iso: 'en-US'
			}
		]
	},
	/*
	 ** @nuxtjs/sitemap config
	 */
	sitemap: {
		hostname: 'https://carlosarroyoam.github.io',
		path: '/sitemap.xml',
		trailingSlash: true,
		i18n: true,
		defaults: {
			changefreq: 'weekly',
			priority: 1,
			lastmod: '2020-09-28'
		},
		sitemaps: [
			{
				path: '/sitemap-pages.xml'
			},
			{
				path: '/sitemap-projects.xml',
				routes: [],
				exclude: ['/**']
			},
			{
				path: '/sitemap-articles.xml',
				routes: async () => {
					const { $content } = require('@nuxt/content');

					const articles = await $content('articles')
						.sortBy('createdAt', 'asc')
						.only(['slug'])
						.fetch();

					return articles.map(
						(article) => 'es/blog/article/' + article.slug + '/'
					);
				},
				exclude: ['/**']
			}
		]
	},
	/*
	 ** @nuxtjs/google-analytics config
	 */
	googleAnalytics: {
		id: 'UA-179391186-1'
	},
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-analytics'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'nuxt-i18n',
		'nuxt-purgecss',
		// Doc: https://github.com/nuxt/content
		'@nuxt/content',
		'@nuxtjs/sitemap'
	],
	/*
	 ** Content module configuration
	 ** See https://content.nuxtjs.org/configuration
	 */
	content: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, { isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.devtool = 'source-map';
			}
		},
		extractCSS: true
	},
	generate: {
		fallback: '404.html'
	}
};
