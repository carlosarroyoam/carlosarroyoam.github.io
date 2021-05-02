<template>
	<NuxtLink :to="localePath({ name: 'blog-article-slug', params: { slug: article.slug } })">
		<img class="w-full" :src="require('~/assets/img/projects/' + article.img)" />
		<div>
			<h2>{{ article.title }}</h2>
			<p>by {{ article.author.name }}</p>
			<p>{{ article.description }}</p>
		</div>
	</NuxtLink>
</template>


<script>
export default {
	name: 'ArticleCard',
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
};
</script>
