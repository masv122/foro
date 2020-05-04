<template>
  <div id="app">
    <BarraSuperior />
    <b-container fluid class="contenido">
      <router-view class="mt-5" />
    </b-container>
  </div>
</template>

<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
// import BarraLateral from "@/components/BarraLateral.vue";
export default {
  name: "App",
  components: {
    BarraSuperior,
    // BarraLateral
  }
};
</script>

<style scoped>
  .contenido{
    margin-top: 5rem;
  }
</style>