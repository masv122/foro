<template>
  <div class="shadow-sm p-4">
    <h6 class="display-4">Crear Tema</h6>
    <b-form
      class="py-2 px-4 text-center"
      @submit.prevent="_enviarTema"
    >
      <h5 class="text-left">Titulo</h5>
      <b-form-group
        id="input-group-titulo"
        label-for="titulo"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            id="titulo"
            type="text"
            v-model="titulo"
            required
            placeholder="Escriba su titulo"
            class="input"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Contenido</h5>
      <b-form-group
        id="input-group-Contenido"
        label-for="Contenido"
      >
        <ckeditor
          :editor="editor"
          id="Contenido"
          v-model="contenido"
          :config="editorConfig"
        />
      </b-form-group>
      <h5 class="text-left">Tags</h5>
      <b-form-tags
        input-id="tags-pills"
        v-model="value"
        tag-variant="primary"
        tag-pills
        separator=" "
        placeholder="Escriba un tag y presione espacio"
        class="mb-2"
      ></b-form-tags>
      <b-form-row class="my-3">
        <b-button
          type="submit"
          class="ml-auto ml-1 shadow-sm"
          variant="primary"
        > <i
            class="fa fa-paper-plane"
            aria-hidden="true"
          ></i> Enviar Tema</b-button>
        <b-button
          class="ml-1 shadow-sm"
          variant="success"
          @click="vistaPrevia = !vistaPrevia"
        ><i class="fas fa-eye    "></i> Vista Previa</b-button>
        <b-button
          type="reset"
          class="mr-auto ml-1 shadow-sm"
          variant="danger"
        ><i
            class="fa fa-times-circle"
            aria-hidden="true"
          ></i> Cancelar</b-button>
      </b-form-row>
      <h5 v-if="error">{{ error_cont }}</h5>
    </b-form>
    <div v-if="vistaPrevia">
      <h6 class="display-4">Vista previa</h6>
      <b-card>
        <b-card-text v-html="contenido"></b-card-text>
      </b-card>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "CrearTema",
  data() {
    return {
      value: [],
      titulo: "",
      contenido: "",
      idCategoria: this.$route.params.id,
      error: false,
      error_cont: "No se pudo enviar el nuevo tema",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        language: "es"
      },
      vistaPrevia: false
    };
  },
  computed: {
    ...mapGetters("login", ["usuario"]),
    ...mapGetters("temas", ["temas"])
  },
  methods: {
    ...mapActions("temas", ["enviarTema", "updateTema"]),
    getTema() {
      return {
        Titulo: this.titulo,
        IDcategoria: this.idCategoria,
        contenido: this.contenido,
        IDcreador: this.usuario.ID_usuario
      };
    },
    _enviarTema: async function() {
      const resultado = await this.enviarTema(this.getTema());
      if (resultado.error) {
        this.error = true;
      } else {
        this.$router.push({
          name: "Tema",
          params: { idCategoria: this.idCategoria, idTema: resultado.id }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>