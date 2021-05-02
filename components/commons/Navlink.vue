<template>
	<nuxt-link :to="localePath({ name: href })" tag="li" class="inline-block">
		<a
			class="text-sm font-medium tracking-wide uppercase font-display hover:text-white"
		>
			<slot></slot>
		</a>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Navlink',
	props: ['href']
};
</script>
