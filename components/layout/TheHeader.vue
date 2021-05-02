<template>
	<div>
		<header
			class="fixed inset-x-0 top-0 z-20 text-gray-400 shadow bg-surface-header"
		>
			<div
				class="container flex flex-col py-2 lg:justify-between lg:items-center lg:py-4 lg:flex-row"
			>
				<div class="flex flex-row items-center justify-between">
					<nuxt-link
						:to="localePath({ name: 'about-me' })"
						tag="a"
						class="font-medium tracking-wide text-white uppercase font-display md:text-xl"
						>Carlos Alberto Arroyo Martínez</nuxt-link
					>

					<button
						class="text-white lg:hidden"
						type="button"
						aria-label="Toggle navigation bar"
						v-on:click="toggleNavbar()"
					>
						<svg
							class="w-8 fill-current md:w-10"
							v-bind:class="isOpen ? 'hidden' : 'block'"
							viewBox="0 0 24 24"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
						</svg>
						<svg
							class="w-8 fill-current md:w-10"
							v-bind:class="isOpen ? 'block' : 'hidden'"
							viewBox="0 0 24 24"
						>
							<path
								d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
							/>
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</button>
				</div>

				<nav
					class="lg:block"
					id="mainNavbar"
					v-bind:class="isOpen ? 'block' : 'hidden'"
				>
					<ul
						class="flex flex-col py-4 space-y-4 lg:py-0 lg:flex-row lg:space-x-6 lg:space-y-0 "
					>
						<!-- About me -->
						<app-navlink href="about-me">
							{{ $t('nav_links.about_me') }}
						</app-navlink>

						<!-- Portfolio -->
						<app-navlink href="portfolio">
							{{ $t('nav_links.portfolio') }}
						</app-navlink>

						<!-- Contact me -->
						<app-navlink href="contact-me">
							{{ $t('nav_links.contact_me') }}
						</app-navlink>

						<!-- Blog -->
						<app-navlink href="blog">
							{{ $t('nav_links.blog') }}
						</app-navlink>
					</ul>
				</nav>
			</div>
		</header>

		<div
			class="fixed inset-0 z-10 w-screen h-screen"
			v-bind:class="isOpen ? 'block' : 'hidden'"
			v-on:click="closeNavbar()"
		></div>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
	data: function() {
		return {
			isOpen: false
		};
	},
	methods: {
		toggleNavbar: function() {
			this.isOpen = !this.isOpen;
		},
		closeNavbar: function() {
			this.isOpen = false;
		}
	},
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
		}
	},
	watch: {
		$route() {
			this.closeNavbar();
		}
	},
	async fetch() {
		this.isOpen = false;
	}
};
</script>
