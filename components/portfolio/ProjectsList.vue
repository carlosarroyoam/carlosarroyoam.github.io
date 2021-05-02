<template>
	<section class="grid gap-6 mt-6 lg:grid-cols-3">
		<div v-for="project of projects" :key="project.slug">
			<ProjectCard v-bind:project="project" />
		</div>
	</section>
</template>

<script>
export default {
	name: 'ProjectsList',
	components: {
		ProjectCard: () => import('@/components/portfolio/ProjectCard')
	},
	props: {
		projects: {
			type: Object,
			required: true
		}
	}
};
</script>
