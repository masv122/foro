<template>
  <div>
    <h6 class="display-4">Titulo del tema</h6>
    <div class="d-flex">
      <p>Enviado: <span>fecha</span></p>
      <p class="ml-3">Respuestas: <span>Respuestas</span></p>
      <p class="ml-3">Visitado: <span>Visitado</span></p>
      <p class="ml-3">Categoria: <span>Categoria</span></p>
    </div>
    <TemaCuerpo />
    <NavTema />
    <Respuesta />
  </div>
</template>

<script>
import TemaCuerpo from "@/components/TemaCuerpo.vue";
import NavTema from "@/components/NavTema.vue";
import Respuesta from "@/components/Respuesta.vue";
export default {
  name: "Tema",
  components: {
    TemaCuerpo,
    NavTema,
    Respuesta
  }
};
</script>

<style lang="scss" scoped>
</style>