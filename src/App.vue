<template>
  <div id="app">
    <div id="nav"></div>
    <b-container fluid id="pagina">
      <b-row>
        <b-col class="ColBarraLateral bg-primary shadow" cols="1">
          <BarraLateral class="BarraLateral"/>
        </b-col>
        <b-col class="contenido pb-5" cols="11">
          <BarraSuperior />
          <b-container fluid>
            <router-view />
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
import BarraLateral from "@/components/BarraLateral.vue";
export default {
  name: "App",
  components: {
    BarraSuperior,
    BarraLateral
  }
};
</script>

<style scoped>
  .ColBarraLateral{
    padding-top: 5%;
    padding-bottom: 10%;
  }
 
</style>