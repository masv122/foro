<template>
  <div id="app">
    <BarraSuperior />
    <b-container class="contenido">
      <b-overlay :show="cargando" rounded="sm">
        <router-view class="mt-5" :aria-hidden="cargando ? 'true' : null" />
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
import { mapGetters, mapActions } from "vuex";
// import BarraLateral from "@/components/BarraLateral.vue";
export default {
  name: "App",
  components: {
    BarraSuperior
    // BarraLateral
  },
  computed: {
    ...mapGetters(['cargando'])
  },
   methods: {
    ...mapActions("login", ["logInStorage"]),
    ...mapActions("categorias", ["loadCategorias"])
  },
  created() {
    this.logInStorage();
    this.loadCategorias();
  }
};
</script>

<style>
.contenido {
  margin-top: 5rem;
}
body{
  background-color: #eee;
}
</style>