<template>
  <div class="container-fluid section-content">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
        <div class="card-aboutme">
          <div class="aboutme-picture">
            <img
              class="aboutme-picture__img rounded-circle"
              src="~@/assets/img/profile.jpg"
              alt="profile-picture"
            >
          </div>

          <div class="card-aboutme__content">
            <h3 class="text-uppercase font-weight-bold">WEB & MOBILE DEVELOPER</h3>
            <p class="mb-0 text-left">
              Hola, mi nombre es Carlos, soy un Ingeniero en Informática, egresado del
              <a
                class="font-weight-bold text-decoration-none text-white"
                href="http://www.itsur.edu.mx"
                target="__blank"
              >ITSUR</a>.
              Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con conocimientos en diversas tecnologías web y móviles, bases de datos relacionales y alguno que otro Framework. Tengo 24 años y actualmente radico en la cuidad de Apaseo el Alto, Guanajuato.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 mt-5 mx-auto">
        <h4 class="text-uppercase text-center">TECNOLOGIAS CON LAS QUE HE TRABAJADO</h4>
        <p
          class="text-center"
        >A lo largo de mi carrera he desarrollado aplicaciones web y móviles con las siguientes tecnologías. Además, constantemente estoy formándome, y siempre estoy abierto a aprender nuevos lenguajes y adquirir más conocimientos.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 mt-4 mx-auto">
        <div class="technologies">
          <div id="tech-card-1" class="technologies-card">
            <i class="technologies-icon fas fa-server"></i>
            <h5 class="technologies-title font-weight-bold">Back-end</h5>
            <ul class="technologies-list">
              <li>Java</li>
              <li>PHP</li>
              <li>Larevel</li>
              <li>Lumen/Laravel</li>
              <li>SQL Databases</li>
              <li>Web Services</li>
              <li>Web Sockets</li>
            </ul>
          </div>

          <div id="tech-card-2" class="technologies-card">
            <i class="technologies-icon fas fa-laptop-code"></i>
            <h5 class="technologies-title font-weight-bold">Front-end</h5>
            <ul class="technologies-list">
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Angular</li>
              <li>Vue.js</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div id="tech-card-3" class="technologies-card">
            <i class="technologies-icon fas fa-mobile"></i>
            <h5 class="technologies-title font-weight-bold">Mobile</h5>
            <ul class="technologies-list">
              <li>Android Nativo</li>
              <li>Progressive Web Applications</li>
              <li>Xamarin</li>
              <li>SQLite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-aboutme {
  max-width: 100%;
  padding: 1.2em 4em;
  background-color: var(--color-secondary);
  border-radius: 0.25rem;
  color: var(--color-secondary-contrast);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "picture content content content content"
    "picture content content content content";
}

.aboutme-picture {
  margin: auto auto;
  grid-area: picture;
}

.aboutme-picture__img {
  width: 130px;
  height: 130px;
}

.card-aboutme__content {
  margin: auto 0;
  grid-area: content;
}

.technologies {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "tech-card-1 tech-card-2 tech-card-3";
}

#tech-card-1 {
  grid-area: tech-card-1;
}

#tech-card-2 {
  grid-area: tech-card-2;
}

#tech-card-3 {
  grid-area: tech-card-3;
}

.technologies-card {
  padding: 1em;
  color: var(--color-dark-tint);
  background-color: var(--color-dark-contrast);
  border-radius: 0.25em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: block;
  text-align: center;
}

.technologies-icon {
  margin-bottom: 0.3em;
  font-size: 3.5em;
  color: var(--color-secondary);
  grid-area: icon;
  display: block;
}

.technologies-list {
  margin: 0;
  list-style: none;
  display: block;
}

/* 
##Device = Most of the Smartphones Mobiles (Portrait)
*/
@media only screen and (max-width: 768px) {
  .card-aboutme {
    padding: 1em 2em;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "picture" "content";
  }

  .aboutme-picture__img {
    width: 150px;
    height: 150px;
  }

  .technologies {
    padding: 0 3em;
    grid-gap: 1.5em;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "tech-card-1" "tech-card-2" "tech-card-3";
  }
}
</style>
