<template>
  <div class="barra">
    <b-navbar-nav class="nav_lateral" align="center">
      <b-nav-item>
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a><i class="fa fa-fire" aria-hidden="true"></i></a>
          </div></div
      ></b-nav-item>
      <b-nav-item
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a><i class="fa fa-star" aria-hidden="true"></i></a>
          </div></div
      ></b-nav-item>
      <b-nav-item v-if="!loginVisible"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""
              ><i class="fa fa-envelope-open" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item v-if="!loginVisible"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""><i class="fa fa-list" aria-hidden="true"></i></a>
          </div></div
      ></b-nav-item>
      <b-nav-item v-if="!loginVisible">
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""><i class="fa fa-heart" aria-hidden="true"></i></a>
          </div></div
      ></b-nav-item>
      <b-nav-item>
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""
              ><i class="fa fa-question-circle" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BarraLateral",
  computed: {
    ...mapGetters("login", ["loginVisible"])
  }
};
</script>

<style lang="scss" scoped>
.barra {
  position: fixed;
  padding-left: 1.5rem;
}
.nav_lateral {
  text-align: center;
}

.contenedor_items {
  padding: 1rem 0;
}
.contenedor_items a,
.nav_bar_contenido_y_filtro a {
  text-decoration: none;
  color: #fff;
}

.contenedor_items a:hover {
  color: #111;
}

.icono-items {
  font-size: 2rem;
}

.nav_lateral {
  font-size: 0.74rem;
}
</style>