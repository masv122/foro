<template>
  <div id="app">
    <BarraSuperior />
    <b-container fluid class="contenido">
      <b-overlay :show="cargando" rounded="sm">
        <router-view class="mt-5" :aria-hidden="cargando ? 'true' : null" />
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
import { mapGetters } from "vuex";
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
};
</script>

<style scoped>
.contenido {
  margin-top: 5rem;
}
</style>