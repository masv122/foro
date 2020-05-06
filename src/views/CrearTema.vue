<template>
  <div class="shadow-sm p-4">
    <h6 class="display-4">Crear Tema</h6>
    <b-form class="py-2 px-4 text-center" @submit.prevent="_enviarTema">
      <h5 class="text-left">Titulo</h5>
      <b-form-group id="input-group-titulo" label-for="titulo">
        <b-input-group class="inputGroup">
          <b-form-input
            id="titulo"
            type="text"
            v-model="titulo"
            required
            placeholder="Ingrese su Cedula"
            class="input"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Contenido</h5>
      <b-form-group id="input-group-Contenido" label-for="Contenido">
        <b-form-textarea
          id="Contenido"
          v-model="contenido"
          placeholder="Ingrese Contenido..."
          rows="3"
          required
          max-rows="6"
        ></b-form-textarea>
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
          class="ml-auto ml-1"
          variant="primary"
          >Enviar Tema</b-button
        ><b-button
          type="reset"
          class="mr-auto ml-1"
          variant="danger"
          >Cancelar</b-button
        >
      </b-form-row>
      <h5 v-if="error">{{ error_cont }}</h5>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CrearTema",
  data() {
    return {
      value: [],
      titulo: '',
      contenido: '',
      idCategoria: this.$route.params.id,
      error: false,
      error_cont: 'No se pudo enviar el nuevo tema',
    };
  },
  computed: {
    ...mapGetters('login', ['usuario']),
    ...mapGetters('temas', ['temas']),
  },
  methods: {
    ...mapActions('temas', ['enviarTema']),
    getTema () {
      return{
        ID_tema: this.idCategoria + '-' + this.temas.length,
        Titulo: this.titulo,
        IDcategoria: this.idCategoria,
        contenido: this.contenido,
        IDcreador: this.usuario.ID_usuario
      }
    },
    _enviarTema: async function(){
      const resultado = await this.enviarTema(this.getTema())
      if(resultado){
        this.error = true;
      } else {
        this.$router.push(`/categorias/${this.idCategoria}/temas/${this.getTema().ID_tema}`);
      }
    },
  // countTemas: async function(id) {
  //   const resultado = await this.axios
  //     .get(`/api/temas-cantidad/${id}`)
  //     .then((res) => {
  //       if (res.data.error) {
  //         return null;
  //       } else {
  //         return res.data;
  //       }
  //     })
  //     .catch((e) => {
  //       return e;
  //     });
  //   return resultado;
  // },
  },
};
</script>

<style lang="scss" scoped>
</style>