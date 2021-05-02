<template>
	<article>
		<header>
			<h1 class="uppercase lg:text-center">Project title</h1>
		</header>

		{{ id }}
	</article>
</template>

<script>
export default {
	name: 'Project',
	layout: 'app',
	data() {
		return {};
	},
	head() {
		return {
			title: 'Change project name',
		};
	},
	created() {
		this.id = this.$route.params.id;
	},
};
</script>
