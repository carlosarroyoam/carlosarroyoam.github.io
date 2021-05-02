<template>
	<div
		class="flex flex-col min-h-screen pt-16 antialiased text-gray-700 font-body bg-background md:pt-24 theme-light"
	>
		<TheHeader />
		<TheMain>
			<nuxt />
		</TheMain>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader';
import TheFooter from '~/components/layout/TheFooter';
import TheMain from '~/components/layout/TheMain';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
		TheMain
	},
	head() {
		const i18nSeo = this.$nuxtI18nSeo();

		return {
			title: process.env.npm_package_name || '',
			htmlAttrs: {
				...i18nSeo.htmlAttrs
			},
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'carlosarroyoam, Carlos Arroyo, Carlos Alberto Arroyo Martínez, Blog Programacion Queretaro, Desarrollo Web Querétaro, Diseño Web Querétaro, Desarrollo Web Querétaro, Paginas web Querétaro, Ingeniero en Informatica Querétaro, Tutoriales programacion'
				},
				{
					name: 'author',
					content: 'Carlos Alberto Arroyo Martínez'
				},
				{
					name: 'copyright',
					content: 'Carlos Alberto Arroyo Martínez'
				},
				{
					name: 'robots',
					content: 'all'
				},
				{
					name: 'theme-color',
					content: '#384247'
				},
				{
					name: 'X-UA-Compatible',
					content: 'ie=edge'
				},
				...i18nSeo.meta
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			],
			script: [],
			...i18nSeo.link
		};
	}
};
</script>
