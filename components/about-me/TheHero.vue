<template>
	<section class="relative flex flex-col">
		<small class="text-xs tracking-widest uppercase">presentación</small>
		<app-display>Desarrollador de Software</app-display>
		<app-paragraph>
			Apasionado por la tecnologia. Cuento con sólidos
			conocimientos en diversas tecnologias web, móviles y de bases de datos.
			Constantemente estoy formándome, estoy abierto a aprender nuevos lenguajes
			y adquirir más conocimientos.
		</app-paragraph>

		<div class="flex items-center mt-6">
			<app-button href="portfolio">Ver mi portafolio</app-button>

			<app-link href="resume" class="ml-6" type="secondary"
				>Descargar CV</app-link
			>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheHero'
};
</script>
