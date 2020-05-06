<template>
  <div class="mt-5">
    <b-card
      header-tag="header"
      footer-tag="footer"
      header-bg-variant="primary"
      footer-bg-variant="white"
      border-variant="primary"
      class="shadow"
    >
      <template v-slot:header>
        <b-link
          class="text-white"
          :to="{ name: 'Categoria', params: { id: categoria.ID_categoria } }"
          ><h3>{{ categoria.Titulo }}</h3></b-link
        >
        <p>{{ categoria.Desc_categoria }}</p>
      </template>
      <b-container fluid class="my-1">
        <b-card-group columns>
          <TemaMiniatura />
          <TemaMiniatura />
          <TemaMiniatura />
        </b-card-group>
      </b-container>
      <template v-slot:footer>
        <h6>Temas: {{ categoria.Nro_temas }}</h6>
        <h6>
          Comentarios: {{ categoria.Nro_mensajes }}
          <h6 class="float-right">
            ID Categoria: {{ categoria.ID_categoria }}
          </h6>
        </h6>
      </template>
    </b-card>
    <hr />
  </div>
</template>

<script>
import TemaMiniatura from "@/components/TemaMiniatura.vue";
export default {
  name: "Categoria",
  props: {
    categoria: {
      type: Object,
      default: null
    }
  },
  components: {
    TemaMiniatura
  }
};
</script>

<style lang="scss" scoped>
</style>