<template>
	<nuxt-link
		:to="localePath({ name: href })"
		tag="a"
		class="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wider text-white uppercase rounded bg-primary"
	>
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Button',
	props: ['href', 'type', 'isLink', 'disabled']
};
</script>
