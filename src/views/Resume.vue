<template>
  <div class="container-fluid section-content">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
        <h3 class="text-left text-uppercase d-inline">Curriculum</h3>

        <a class="float-right" target="_blank" href="./static/cv-webversion-es.pdf">
          <button type="button" class="btn btn-primary">
            Descargar PDF
            <i class="fas fa-file-pdf ml-1"></i>
          </button>
        </a>
      </div>

      <div class="col-sm-12 col-md-10 col-lg-8 mt-3 mx-auto">
        <img class="img-fluid" src="~@/assets/img/cv-webversion-es.jpg" alt="Resume">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
