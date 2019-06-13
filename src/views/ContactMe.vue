<template>
  <div class="container-fluid section-content">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-6 mx-auto">
        <h3 class="text-center text-uppercase">Conecta conmigo</h3>
        <p class="text-center">
          Si tienes alguna pregunta, o simplemente deseas saludarme, no dudes en ponerte en
          contacto conmigo. A continuación están mi curriculum, mis páginas sociales y mi correo
          electrónico:
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6 text-center mt-4 mx-auto">
        <a class="text-decoration-none" href="mailto:carlosarroyoam@gmail.com">
          <button type="button" class="btn btn-primary">
            Enviar un email
            <i class="far fa-envelope ml-1"></i>
          </button>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-6 mt-5 mx-auto">
        <div class="social-links">
          <div id="contact-card-1" class="contact-card">
            <router-link tag="a" to="/contactme/resume" class="text-center text-decoration-none">
              <div class="d-block">
                <i class="fas fa-file-alt d-block mx-auto" style="font-size: 5em;"></i>
              </div>
              <span class="d-block mt-3">Mi curriculum vitae</span>
            </router-link>
          </div>

          <div id="contact-card-2" class="contact-card">
            <a
              class="text-center text-decoration-none"
              target="_blank"
              href="https://www.linkedin.com/in/carlosarroyoam/"
            >
              <div class="d-block">
                <i class="fab fa-linkedin" style="font-size: 5em;"></i>
              </div>
              <span class="d-block mt-3">
                Mi perfil en
                <strong>LinkedIn</strong>
              </span>
            </a>
          </div>

          <div id="contact-card-3" class="contact-card">
            <a
              class="text-center text-decoration-none"
              target="_blank"
              href="https://github.com/carlosarroyoam/"
            >
              <div class="d-block">
                <i class="fab fa-github-square" style="font-size: 5em;"></i>
              </div>
              <span class="d-block mt-3">
                Mi perfil en
                <strong>GitHub</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-links {
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "contact-card-1 contact-card-2 contact-card-3";
}

#contact-card-1 {
  grid-area: contact-card-1;
}

#contact-card-2 {
  grid-area: contact-card-2;
}

#contact-card-3 {
  grid-area: contact-card-3;
}

.contact-card {
  padding: 1em;
  color: var(--color-secondary);
  border-radius: 0.25em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.contact-card a div {
  color: var(--color-secondary);
}

.contact-card a span {
  color: var(--color-dark-tint);
}

/* 
##Device = Most of the Smartphones Mobiles (Portrait)
*/
@media only screen and (max-width: 768px) {
  .social-links {
    padding: 0 6em;
    grid-gap: 2em;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "contact-card-1" "contact-card-2" "contact-card-3";
  }
}
</style>
