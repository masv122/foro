<template>
  <div>
    <h6 class="display-4">{{ tema.Titulo }}</h6>
    <div class="d-flex">
      <p>Enviado: <span>{{ tema.Fecha }}</span></p>
      <p class="ml-3">Respuestas: <span>{{ tema.Nro_respuestas }}</span></p>
      <p class="ml-3">Visitado: <span>Visitado</span></p>
      <p class="ml-3">Categoria: <span>{{ categoria.Titulo }}</span></p>
    </div>
    <TemaCuerpo :contenido="tema.contenido"/>
    <NavTema />
    <Respuesta />
  </div>
</template>

<script>
import TemaCuerpo from "@/components/TemaCuerpo.vue";
import NavTema from "@/components/NavTema.vue";
import Respuesta from "@/components/Respuesta.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tema",
  components: {
    TemaCuerpo,
    NavTema,
    Respuesta
  },
  computed: {
    ...mapGetters('temas', ['tema']),
    ...mapGetters('categorias', ['categoria'])
  },
  methods: {
    ...mapActions('temas', ['updateTema'])
  },
  created () {
    this.updateTema(this.$route.params.idTema);
  },
};
</script>

<style lang="scss" scoped>
</style>