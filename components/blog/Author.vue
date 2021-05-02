<template>
	<section>
		<img :src="author.image" />
		<div>
			<p>{{ author.name }}</p>
			<p>{{ author.bio }}</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Author',
	props: {
		author: {
			type: Object,
			required: true,
		},
	},
};
</script>
