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
        >
          <h3>{{ categoria.Titulo }}</h3>
        </b-link>
        <p>{{ categoria.Desc_categoria }}</p>
      </template>
      <b-container
        fluid
        class="my-1"
      >
        <b-card-group columns>
          <TemaMiniatura
            v-for="(tema, index) in temas"
            :key="index"
            :titulo="tema.Titulo"
            :contenido="tema.contenido"
            :idTema="tema.ID_tema"
            :idCategoria="tema.IDcategoria"
          />
        </b-card-group>
      </b-container>
      <template v-slot:footer>
        <h6>Temas: {{ nroTemas }}</h6>
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
import { mapActions } from "vuex";
export default {
  name: "Categoria",
  props: {
    categoria: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      temas: [],
      nroTemas: "",
    };
  },
  async created() {
    this.temas = await this.previewTemasCategoria(this.categoria.ID_categoria);
    this.nroTemas = await this.countTemasCategoria(this.categoria.ID_categoria);
  },
  methods: {
    ...mapActions("temas", ["previewTemasCategoria", "countTemasCategoria"])
  },
  components: {
    TemaMiniatura
  }
};
</script>

<style lang="scss" scoped>
</style>