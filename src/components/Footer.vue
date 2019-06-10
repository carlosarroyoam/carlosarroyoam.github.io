<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="text-center small">Copyright © 2019 Carlos Alberto Arroyo Martínez.</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1em 0;
  color: #707070;
}
</style>
