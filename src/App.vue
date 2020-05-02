<template>
  <div id="app">
    <!-- <b-col class="ColBarraLateral bg-primary shadow" cols="1">
          <BarraLateral class="BarraLateral"/>
        </b-col> -->
    <BarraSuperior />
    <b-container fluid class="contenido">
      <router-view />
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