<template>
	<article class="flex flex-col items-center">
		<header>
			<app-heading class="lg:text-center">
				{{ $t('errors.not_found_title') }}
			</app-heading>

			<img
				class="w-64 mx-auto my-5 d-block"
				src="~@/assets/img/404.svg"
				alt="Page not found image, a ghost being abducted."
			/>

			<app-paragraph class="lg:text-center">
				{{ $t('errors.not_found_message') }}
			</app-paragraph>
		</header>

		<app-button class="mt-6" href="aboutme">
			{{ $t('nav_links.go_home') }}
		</app-button>
	</article>
</template>

<script>
export default {
	layout: 'app',
	props: ['error'],
	head() {
		return {
			title: this.$t('errors.error')
		};
	}
};
</script>
