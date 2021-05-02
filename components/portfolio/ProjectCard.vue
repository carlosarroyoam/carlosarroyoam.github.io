<template>
	<nuxt-link class="overflow-hidden rounded bg-background-secondary" tag="div" :to="localePath({ name: 'portfolio-project-id', params: { id: project.id } })">
		<img class="project__image" v-bind:src="require('~/assets/img/projects/' + project.img)" alt="Project image" />

		<div class="proyect__description">
			<h6 class="technologies-title font-weight-bold">Metals of Art de Mexico.</h6>
			<span class="technology__badge">PHP</span>
			<span class="technology__badge">HTML5</span>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'ProjectCard',
};
</script>
