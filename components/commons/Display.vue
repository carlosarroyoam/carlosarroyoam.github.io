<template>
	<component
		v-bind:is="tag"
		class="max-w-4xl text-3xl font-normal leading-tight text-gray-900 uppercase sm:text-4xl lg:text-5xl font-display"
	>
		<slot></slot>
	</component>
</template>

<script>
export default {
	name: 'Display',
	props: {
		tag: {
			type: String,
			default: 'h1',
			validator: function(value) {
				return ['h1', 'h2'].indexOf(value) !== -1;
			}
		}
	}
};
</script>
