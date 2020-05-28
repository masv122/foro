<template>
  <div>
    <b-card
      title="Mejor Comentario"
      border-variant="success"
      class="shadow-sm"
    >
      <div>
        <b-link>
          <i class="fa fa-user-circle">
          </i>
        </b-link>
        {{ nombreCompleto }}
      </div>
      <b-card-text v-html="contenido">
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ComentarioMiniatura",
  props: {
    contenido: {
      type: String,
      default: ""
    },
    idUsuario: {
      type: String,
      default: ""
    }
  },
  computed: {
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    }
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      comentarioCorrecto: null
    };
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"]),
    ...mapActions("mensajes", ["loadComentarioCorrecto"])
  },
  async mounted() {
    const usuario = await this.updateUsuario(this.idUsuario);
    this.nombre = usuario.Nombre_usuario;
    this.apellido = usuario.Apellido_usuario;
  }
};
</script>

<style lang="scss" scoped>
</style>