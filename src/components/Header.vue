<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark">
      <router-link
        to="/aboutme"
        tag="a"
        class="navbar-brand mb-0 h1"
      >Carlos Alberto Arroyo Martínez</router-link>

      <button
        class="navbar-toggler"
        id="navbarToggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainNavbar"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ml-md-auto" id="navbar-nav">
          <!-- About me -->
          <router-link to="/aboutme" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">{{ $t("navlinks.aboutme") }}</a>
          </router-link>
          <!-- Portfolio -->
          <router-link to="/portfolio" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">{{ $t("navlinks.portfolio") }}</a>
          </router-link>
          <!-- Contact me -->
          <router-link to="/contactme" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">{{ $t("navlinks.contactme") }}</a>
          </router-link>
        </ul>
        
        <!-- <a class="dropdown-item" href="locale" v-on:click.prevent="setLocale('en')">EN</a>
        <a class="dropdown-item" href="locale" v-on:click.prevent="setLocale('es')">ES</a> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #37474f;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.nav-item-button {
  margin: auto 0 auto 0.7em;
  padding: 0 0.6em;
  min-height: 1.9em;
  border-radius: 15px;
  text-align: center;
}

.nav-item-button--text {
  padding-top: 1px;
  min-width: 100%;
  color: #fff;
  vertical-align: middle;
}

.nav-item-button__blue {
  background-color: #3b86ff;
}

.nav-item-button--icon {
  color: #fff;
  margin-left: 0.3em;
  padding-top: 3px;
  font-size: 1.6em;
  vertical-align: middle;
}
</style>
