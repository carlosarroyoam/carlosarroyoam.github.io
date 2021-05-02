<template>
	<div
		class="overflow-hidden rounded shadow hover:shadow-lg bg-surface-secondary"
	>
		<div class="flex flex-row items-center p-4 bg-primary">
			<img
				class="inline-block w-8 h-8"
				v-bind:src="require('~/assets/img/icons/' + development_area.icon)"
				v-bind:alt="development_area.icon_alt"
			/>
			<h4
				class="inline-block ml-4 text-base font-semibold tracking-wide text-gray-100 uppercase"
			>
				{{ development_area.title }}
			</h4>
		</div>

		<ul class="px-6 py-4">
			<li :key="technology" v-for="technology in development_area.technologies">
				{{ technology }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TechnologiesCard',
	props: {
		development_area: {
			type: Object,
			required: true
		}
	}
};
</script>
