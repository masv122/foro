<template>
  <div>
    <div>
      <b-jumbotron
        bg-variant="white"
        text-variant="dark"
        class="mb-3 shadow-sm py-3"
      >
        <template v-slot:header><i
            class="fa fa-code"
            aria-hidden="true"
          ></i> {{ categoria.Titulo }}</template>
        <template v-slot:lead>
          {{ categoria.Desc_categoria }}
        </template>
        <hr class="my-4" />
        <h6>Temas: {{ nroTemas }}</h6>
        <h6>
          Comentarios: {{ Nro_mensajes }}
          <h6 class="float-right">
            ID Categoria: {{ categoria.ID_categoria }}
          </h6>
        </h6>
      </b-jumbotron>
      <NavCategoria />
      <Tema
        v-for="(tema, index) in temas"
        :ID_tema="tema.ID_tema"
        :Titulo="tema.Titulo"
        :IDcategoria="tema.IDcategoria"
        :IDcreador="tema.IDcreador"
        :Fecha="tema.Fecha"
        :Fecha_ultimo_mensaje="tema.Fecha_ultimo_mensaje"
        :contenido="tema.contenido"
        :key="index"
      />
      <Paginacion />
    </div>
  </div>
</template>

<script>
import Tema from "@/components/Tema.vue";
import Paginacion from "@/components/Paginacion.vue";
import NavCategoria from "@/components/NavCategoria.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categoria",
  components: {
    Tema,
    Paginacion,
    NavCategoria
  },
  data() {
    return {
      nroTemas: "",
      Nro_mensajes: 0
    };
  },
  computed: {
    ...mapGetters("temas", ["temas"]),
    ...mapGetters("categorias", ["categoria"])
  },
  methods: {
    ...mapActions("temas", ["updateTemas"]),
    ...mapActions("categorias", ["loadCategoria"]),
    ...mapActions("mensajes", ["cantComentariosCategorias"]),
    ...mapActions("temas", ["countTemasCategoria"])
  },
  async created() {
    await this.updateTemas(this.$route.params.id);
    await this.loadCategoria(this.$route.params.id);
    this.Nro_mensajes = await this.cantComentariosCategorias(
      this.categoria.ID_categoria
    );
    this.nroTemas = await this.countTemasCategoria(this.categoria.ID_categoria);
  }
};
</script>

<style  scoped>
</style>