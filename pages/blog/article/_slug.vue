<template>
	<article>
		<header>
			<h1 class="uppercase lg:text-center">{{ article.title }}</h1>
			<p class="md:text-center">{{ article.description }}</p>
		</header>

		<img :src="article.img" :alt="article.alt" />
		<p>{{ formatDate(article.updatedAt) }}</p>

		<nuxt-content :document="article" />

		<Author :author="article.author" />
	</article>
</template>

<script>
export default {
	name: 'Article',
	layout: 'app',
	components: {
		Author: () => import('@/components/blog/Author')
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return new Date(date).toLocaleDateString('es-mx', options);
		}
	},
	head() {
		return {
			title: this.article.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.article.description
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
		const article = await $content('articles', params.slug).fetch();

		return {
			article
		};
	}
};
</script>
