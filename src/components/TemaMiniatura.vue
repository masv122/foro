<template>
  <div>
    <b-card
      header-tag="header"
      class="shadow-sm"
    >
      <div class="text-dark">
        <b-link class="text-dark">
          <i class="fa fa-user-circle">
          </i>
        </b-link>
        {{ nombreCompleto }}
      </div>
      <template v-slot:header>
        <b-link
          class="text-dark"
          :to="{ name: 'Tema', params: {
            idCategoria: IDcategoria,
            idTema: ID_tema
            } 
          }"
        >
          <h5>{{ Titulo }}</h5>
        </b-link>
      </template>
      <b-card-text>
        <div v-html="contenido"></div>
      </b-card-text>
      <b-button
        variant="outline-primary"
        :to="{ name: 'Tema', params: {
            idCategoria: IDcategoria,
            idTema: ID_tema
            } 
          }"
      >
        Ir al tema <i
          class="fa fa-arrow-right"
          aria-hidden="true"
        ></i>
      </b-button>
      <template v-slot:footer>
        <h6 v-if="ultimoMensaje">Ultimo Mensaje: {{ ultimoMensaje.Fecha | moment("from") }}</h6>
        <h6 v-else>Sin comentarios</h6>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TemaMiniatura",
  props: {
    contenido: {
      type: String,
      default: ""
    },
    ID_tema: {
      type: String,
      default: ""
    },
    Titulo: {
      type: String,
      default: ""
    },
    IDcategoria: {
      type: String,
      default: ""
    },
    IDcreador: {
      type: String,
      default: ""
    },
    Fecha: {
      type: String,
      default: ""
    },
    Fecha_ultimo_mensaje: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      ultimoMensaje: null
    };
  },
  computed: {
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    }
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"]),
    ...mapActions("mensajes", [
      "loadComentarioCorrecto",
      "cantComentariosTemas",
      "loadUltimoMensajeTema"
    ])
  },
  async mounted() {
    const usuario = await this.updateUsuario(this.IDcreador);
    this.comentarioCorrecto = await this.loadComentarioCorrecto(this.ID_tema);
    this.ultimoMensaje = await this.loadUltimoMensajeTema(this.ID_tema);
    this.nombre = usuario.Nombre_usuario;
    this.apellido = usuario.Apellido_usuario;
  }
};
</script>

<style lang="scss" scoped>
.fa-user-circle {
  font-size: 2rem;
}
</style>