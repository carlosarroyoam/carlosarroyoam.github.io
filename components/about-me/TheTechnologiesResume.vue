<template>
	<section>
		<app-heading class="mx-auto text-center">Technical Skills</app-heading>

		<div class="grid gap-6 mt-8 lg:mx-auto lg:w-7/12 lg:grid-cols-3">
			<TechnologiesCard
				v-bind:key="development_area.title"
				v-for="development_area in technical_skills"
				:development_area="development_area"
			/>
		</div>
	</section>
</template>

<script>
import technichalSkillsJson from '~/data/technical_skills.json';

export default {
	name: 'TheTechnologiesResume',
	components: {
		TechnologiesCard: () => import('@/components/about-me/TechnologiesCard')
	},
	data() {
		return {
			technical_skills: technichalSkillsJson.technical_skills
		};
	}
};
</script>
