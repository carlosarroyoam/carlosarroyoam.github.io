<template>
	<article>
		<div class="lg:w-6/12">
			<header>
				<app-heading>{{ $t('nav_links.contact_me') }}</app-heading>
				<app-paragraph class="max-w-3xl"
					>Si tienes alguna pregunta, una oportunidad de trabajo o simplemente
					deseas saludarme, no dudes en ponerte en contacto conmigo. A
					continuación están mi correo electrónico, curriculum vitae y mis
					páginas sociales.</app-paragraph
				>
				<a
					href="mailto:carlosarroyoam@gmail.com"
					rel="noreferrer"
					class="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium tracking-wider text-white uppercase rounded bg-primary"
				>
					Enviar un email
					<svg class="w-5 h-5 ml-4 fill-current" viewBox="0 0 512 512">
						<path
							d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
						/>
					</svg>
				</a>
			</header>
		</div>

		<!-- <TheSocialContainer class="mt-16" /> -->
	</article>
</template>

<script>
export default {
	name: 'ContactMe',
	layout: 'app',
	components: {
		TheSocialContainer: () =>
			import('@/components/contact-me/TheSocialContainer')
	},
	head() {
		return {
			title: this.$t('nav_links.contact_me'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'¿Tienes algún proyecto en el que podamos trabajar juntos? No dudes en ponerte en contacto conmigo. ¡Hagamos realidad tu increíble proyecto!.'
				}
			]
		};
	}
};
</script>
