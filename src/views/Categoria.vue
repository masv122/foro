<template>
  <div>
    <div>
      <b-jumbotron bg-variant="info" text-variant="white" class="mb-3 shadow-sm">
        <template v-slot:header>{{ categoria.Titulo }}</template>
        <template v-slot:lead>
          {{ categoria.Desc_categoria }}
        </template>
        <hr class="my-4" />
        <h6>Temas: {{ nroTemas }}</h6>
        <h6>
          Comentarios: {{ categoria.Nro_mensajes }}
          <h6 class="float-right">
            ID Categoria: {{ categoria.ID_categoria }}
          </h6>
        </h6>
      </b-jumbotron>
      <NavCategoria />
      <Temas
        v-for="(tema, index) in temas"
        :ID_tema="tema.ID_tema"
        :Titulo="tema.Titulo"
        :IDcategoria="tema.IDcategoria"
        :IDcreador="tema.IDcreador"
        :Fecha="tema.Fecha"
        :Nro_respuestas="tema.Nro_respuestas"
        :Fecha_ultimo_mensaje="tema.Fecha_ultimo_mensaje"
        :contenido="tema.contenido"
        :key="index"
      />
      <Paginacion />
    </div>
  </div>
</template>

<script>
import Temas from "@/components/Temas.vue";
import Paginacion from "@/components/Paginacion.vue";
import NavCategoria from "@/components/NavCategoria.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categoria",
  components: {
    Temas,
    Paginacion,
    NavCategoria
  },
  data() {
    return {
      nroTemas: ""
    }
  },
  computed: {
    ...mapGetters("temas", ["temas"]),
    ...mapGetters("categorias", ["categoria"])
  },
  methods: {
    ...mapActions("temas", ["updateTemas"]),
    ...mapActions("categorias", ["loadCategoria"]),
    ...mapActions("temas", ["countTemasCategoria"])

  },
  async created() {
    await this.updateTemas(this.$route.params.id);
    await this.loadCategoria(this.$route.params.id);
    this.nroTemas = await this.countTemasCategoria(this.categoria.ID_categoria);

  }
};
</script>

<style  scoped>
</style>