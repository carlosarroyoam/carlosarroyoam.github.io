<template>
	<component
		v-bind:is="tag"
		class="max-w-4xl font-normal text-gray-900 uppercase font-display"
		v-bind:class="{
			['text-4xl']: tag === 'h1',
			['text-2xl']: tag === 'h2',
			['text-xl']: tag === 'h3',
			['text-base']: tag === 'h4'
		}"
	>
		<slot></slot>
	</component>
</template>

<script>
export default {
	name: 'Heading',
	props: {
		tag: {
			type: String,
			default: 'h1',
			validator: function(value) {
				return ['h1', 'h2', 'h3', 'h4'].indexOf(value) !== -1;
			}
		}
	}
};
</script>
