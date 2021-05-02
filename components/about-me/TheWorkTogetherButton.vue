<template>
	<section class="flex flex-col px-20 py-4 overflow-hidden text-center uppercase rounded bg-surface-header lg:flex-row lg:justify-between lg:items-center">
		<p class="text-xl text-gray-100">
			Construyamos juntos un
			<span class="text-primary">proyecto increíble</span>
		</p>

		<app-button href="contact-me" class="mt-4 lg:mt-0">
			{{ $t('nav_links.contact_me') }}
		</app-button>
	</section>
</template>

<script>
export default {
	name: 'TheWorkTogetherButton',
};
</script>
