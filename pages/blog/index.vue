<template>
	<article>
		<div class="lg:w-6/12">
			<header>
				<app-heading>{{ $t('nav_links.blog') }}</app-heading>
				<app-paragraph
					>Encuentra artículos interesantes sobre tecnología, desarrollo de
					software y diseño de UI ¡Cada Semana! ❤️</app-paragraph
				>
			</header>
		</div>

		<!-- <ArticlesList v-bind:articles="articles" /> -->
	</article>
</template>

<script>
export default {
	name: 'Blog',
	layout: 'app',
	components: {
		ArticlesList: () => import('@/components/blog/ArticlesList')
	},
	head() {
		return {
			title: this.$t('nav_links.blog'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Encuentra artículos interesantes sobre tecnología, desarrollo de software y diseño de UI ¡Cada Semana! ❤️.'
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: [
						'Blog de desarrollo web',
						'Blog de tecnología',
						'Blog de programación'
					]
				}
			]
		};
	},
	async asyncData({ $content, params }) {
		const articles = await $content('articles')
			.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('createdAt', 'asc')
			.limit(5)
			.skip(0)
			.fetch();

		return {
			articles
		};
	}
};
</script>
