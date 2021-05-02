<template>
	<nuxt-link
		:to="localePath({ name: href })"
		tag="a"
		class="text-sm font-medium tracking-wider text-center uppercase"
		v-bind:class="{
			['text-primary']: type === 'primary'
		}"
	>
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Link',
	props: {
		type: {
			type: String,
			default: 'primary'
		},
		href: {
			type: String,
			required: true
		}
	}
};
</script>
