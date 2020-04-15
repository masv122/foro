<template>
  <div>
    <div>
      <b-jumbotron bg-variant="info" text-variant="white">
        <template v-slot:header>Categoria</template>
        <template v-slot:lead>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </b-jumbotron>
      <Temas />
      <Temas />
      <Paginacion />
    </div>
  </div>
</template>

<script>
import Temas from "@/components/Temas.vue";
import Paginacion from "@/components/Paginacion.vue";
export default {
  name: "Categoria",
  components: {
    Temas,
    Paginacion
  }
};
</script>

<style  scoped>
</style>