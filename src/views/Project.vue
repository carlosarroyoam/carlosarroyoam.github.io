<template>
  <div class="container-fluid section-content">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
        <h3>Proyecto</h3>
        {{ id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      msg: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
