<template>
  <div>
    <h6 class="display-4">{{ tema.Titulo }}</h6>
    <div class="d-flex">
      <p>Enviado: <span>{{ tema.Fecha | moment("dddd, MMMM Do YYYY") }}</span></p>
      <p class="ml-3">Respuestas: <span>{{ mensajes.length }}</span></p>
      <p class="ml-3">Visitado: <span>Visitado</span></p>
      <p class="ml-3">Categoria: <span>{{ categoria.Titulo }}</span></p>
    </div>
    <TemaCuerpo :contenido="tema.contenido" />
    <NavTema />
    <Respuesta
      v-for="(mensaje, index) in mensajes"
      :key="index"
      :fecha="mensaje.Fecha"
      :comentario="mensaje.Cuerpo_mensaje"
      :correcta="mensaje.correcta"
      :IDusuario_creador ="mensaje.IDusuario_creador "
    />
    <b-form
      class="my-3 bg-white rounded shadow-sm p-3"
      @submit.prevent="sendMensaje()"
      v-if="mensajeActivo"
    >
      <h4 class="ml-5 text-center">Mensaje</h4>
      <ckeditor
        :editor="editor"
        id="Contenido"
        v-model="cuerpo_mensaje"
        :config="editorConfig"
      />
      <b-form-row class="mt-3">
        <b-button
          type="submit"
          class="ml-auto ml-1 shadow-sm"
          variant="primary"
        > <i
            class="fa fa-paper-plane"
            aria-hidden="true"
          ></i> Enviar Mensaje</b-button>
        <b-button
          type="reset"
          class="mr-auto ml-1 shadow-sm"
          @click="updateMensajeActivo()"
          variant="danger"
        ><i
            class="fa fa-times-circle"
            aria-hidden="true"
          ></i> Cancelar</b-button>
      </b-form-row>
      <h5 v-if="error">{{ error_cont }}</h5>
    </b-form>
  </div>
</template>

<script>
import TemaCuerpo from "@/components/TemaCuerpo.vue";
import NavTema from "@/components/NavTema.vue";
import Respuesta from "@/components/Respuesta.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "Tema",
  components: {
    TemaCuerpo,
    NavTema,
    Respuesta
  },
  data() {
    return {
      tema: {},
      editor: ClassicEditor,
      cuerpo_mensaje: "",
      editorConfig: {
        language: "es"
      },
      error: false,
      error_cont: "No se pudo enviar el mensaje",
    };
  },
  computed: {
    ...mapGetters("categorias", ["categoria"]),
    ...mapGetters("mensajes", ["mensajeActivo", "mensajes"]),
    mensaje() {
      return {
        IDtema: this.tema.ID_tema,
        IDusuario_creador: this.tema.IDcreador,
        Cuerpo_mensaje: this.cuerpo_mensaje
      };
    }
  },
  methods: {
    ...mapActions("temas", ["updateTema"]),
    ...mapMutations("mensajes", ["updateMensajeActivo", "updateMensajes"]),
    ...mapActions("mensajes", ["updateMensaje", "updateMensajes"]),
    sendMensaje: async function() {
      this.error = await this.updateMensaje(this.mensaje);
    }
  },
  async created() {
    this.tema = await this.updateTema(this.$route.params.idTema);
    await this.updateMensajes(this.$route.params.idTema);
  },
  beforeDestroy() {
    this.updateMensajes([]);
  }
};
</script>

<style lang="scss" scoped>
</style>