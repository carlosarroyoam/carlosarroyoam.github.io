<template>
  <div class="container-fluid section-content">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-6 mx-auto">
        <h3 class="text-center text-uppercase">{{ $t("navlinks.portfolio") }}</h3>
        <p class="text-center">
          <strong>Whoops! Todavía me encuentro construyendo esta sección.</strong><br>
          Pronto estará lista :) Si quieres ver algo de mi trabajo puedes ir a mi perfil en
          <a
            class="text-center font-weight-bold text-decoration-none"
            target="_blank"
            href="https://github.com/carlosarroyoam/"
          >GitHub</a> ahí encontraras mucho código.
          <!-- Estos son algunos de los proyectos en los que eh trabajado, Si
          quieres ver más de mi trabajo puedes ir a mi perfil en
          <a
            class="text-center font-weight-bold text-decoration-none"
            target="_blank"
            href="https://github.com/carlosarroyoam/"
          >GitHub</a>
          ahí encontraras mucho código. -->
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 mt-3 mx-auto">
        <div class="projects">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";

export default {
  name: "Portfolio",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Project
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

@media only screen and (max-width: 768px) {
  .projects {
    flex-direction: column;
  }
}
</style>
