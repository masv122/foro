<template>
  <div>
    <b-card
      header-tag="header"
      footer-tag="footer"
      header-bg-variant="primary"
      footer-bg-variant="white"
      class="shadow-sm tema"
    >
      <template v-slot:header>
        <b-link
          :to="{
            name: 'Tema',
            params: { idCategoria: IDcategoria, idTema: ID_tema }
          }"
          class="text-white"
        >
          <h3>{{ Titulo }}</h3>
          <h6 class="float-right">Fecha: {{ Fecha | moment("dddd, MMMM Do YYYY") }}</h6>
        </b-link>
        <div class="text-white">
          <b-link class="text-white">
            <i class="fa fa-user-circle">
            </i>
          </b-link>
          {{ nombreCompleto }}
        </div>
      </template>
      <b-row>
        <b-col cols="8">
          <b-card-text>
            <div v-html="contenido"></div>
          </b-card-text>
        </b-col>
        <b-col
          cols="4"
          v-if="comentarioCorrecto"
        >
          <ComentarioMiniatura
            class="ml-auto"
            :contenido="comentarioCorrecto.Cuerpo_mensaje"
            :idUsuario="comentarioCorrecto.IDusuario_creador"
          />
        </b-col>
      </b-row>
      <template v-slot:footer>
        <h6>Ultimo Mensaje: {{ Fecha_ultimo_mensaje }}</h6>
        <h6>
          Comentarios: {{ Nro_respuestas }}
          <h6 class="float-right">ID Tema: {{ ID_tema }}</h6>
        </h6>
      </template>
    </b-card>
    <hr />
  </div>
</template>

<script>
import ComentarioMiniatura from "@/components/ComentarioMiniatura.vue";
import { mapActions } from "vuex";
export default {
  name: "Temas",
  props: {
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
    Nro_respuestas: {
      type: String,
      default: ""
    },
    Fecha_ultimo_mensaje: {
      type: String,
      default: ""
    },
    contenido: {
      type: String,
      default: ""
    }
  },
  components: {
    ComentarioMiniatura
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      comentarioCorrecto: null
    };
  },
  computed: {
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    }
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"]),
    ...mapActions("mensajes", ["loadComentarioCorrecto"])
  },
  async mounted() {
    const usuario = await this.updateUsuario(this.IDcreador);
    this.comentarioCorrecto = await this.loadComentarioCorrecto(this.ID_tema);
    this.nombre = usuario.Nombre_usuario;
    this.apellido = usuario.Apellido_usuario;
  }
};
</script>

<style scoped>
.tema {
  border: 1px #28a3ff solid;
}
</style>