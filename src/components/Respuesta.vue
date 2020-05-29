<template>
  <div>
    <b-card
      class="shadow-sm"
      footer-tag="footer"
      :border-variant="correcta == 0 ? '' : 'success'"
    >
      <b-row>
        <b-col cols="1">
          <b-list-group class="text-center">
            <b-list-group-item
              href="#"
              class="bg-primary"
              @click="votar(0)"
              :disabled="isLiked"
            >
              <i
                class="fa fa-chevron-up text-white"
                aria-hidden="true"
              ></i>
              <b-badge variant="light">{{ votos.likes }}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              :disabled="!isDisabled"
              href="#"
              @click="setCorrecta()"
              :class="[correcta == 0 ? '' : 'bg-success' ]"
            >
              <i
                :class="['fa', 'fa-check', correcta == 0 ? '' : 'text-white' ]"
                aria-hidden="true"
              ></i>
            </b-list-group-item>
            <b-list-group-item
              href="#"
              @click="votar(1)"
              :disabled="isDisliked"
              class="bg-danger"
            >
              <b-badge variant="light">{{ votos.dislikes }}</b-badge>
              <i
                class="fa fa-chevron-down text-white"
                aria-hidden="true"
              ></i>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="11">
          <div class="my-3">
            <b-link>
              <i class="fa fa-user-circle">
              </i>
            </b-link>
            {{ nombreCompleto }}
          </div>
          <b-card-text v-html="comentario">
          </b-card-text>
        </b-col>
      </b-row>
      <template
        v-slot:footer
        class="d-flex"
      >
        <div class="d-flex">
          <p>Enviada: <span>{{ fecha | moment("from") }}</span></p>
          <!-- <p class="ml-2">Editada: <span>hace..</span></p> -->
        </div>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Respuesta",
  props: {
    comentario: {
      type: String,
      default: ""
    },
    fecha: {
      tye: String,
      default: ""
    },
    correcta: {
      type: String,
      default: ""
    },
    IDusuario_creador: {
      type: String,
      default: ""
    },
    ID_mensaje: {
      type: String,
      default: ""
    },
    idTemaCreador: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      apellido: "",
      nombre: "",
      params: {
        idMensaje: this.ID_mensaje,
        idTema: this.$route.params.idTema
      },
      tipo: null,
      votos: {
        likes: 0,
        dislikes: 0
      },
      votoUsuario: null
    };
  },
  computed: {
    ...mapGetters("login", ["usuario"]),
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    },
    isDisabled() {
      return this.usuario.ID_usuario == this.idTemaCreador;
    },
    getVoto() {
      return {
        voto: {
          id_usuario: this.usuario.ID_usuario,
          id_comentario: this.ID_mensaje,
          tipo: this.tipo
        },
        IDtema: this.$route.params.idTema
      };
    },
    paramsVotoUsuario() {
      return {
        id_usuario: this.usuario.ID_usuario,
        id_comentario: this.ID_mensaje
      };
    },
    isLiked() {
      if (this.votoUsuario == null) return false;
      else if (this.votoUsuario.tipo == 0) return true;
      else return false;
    },
    isDisliked() {
      if (this.votoUsuario == null) return false;
      else if (this.votoUsuario.tipo == 1) return true;
      else return false;
    }
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"]),
    ...mapActions("mensajes", ["updateCorrecta", "loadMensajesTema"]),
    ...mapActions("votos", [
      "updateVoto",
      "loadVotosConteo",
      "loadVoto",
      "modifyVoto"
    ]),
    async setCorrecta() {
      const resultado = await this.updateCorrecta(this.params);
      if (!resultado) await this.loadMensajesTema(this.$route.params.idTema);
    },
    async votar(voto) {
      this.tipo = voto;
      if (this.votoUsuario == null) await this.updateVoto(this.getVoto);
      else await this.modifyVoto(this.getVoto);
      this.votoUsuario = await this.loadVoto(this.paramsVotoUsuario);
      await this.loadVotos();
    },
    async loadVotos() {
      const votos = await this.loadVotosConteo(this.ID_mensaje);
      if (votos.length > 1) {
        this.votos.likes = parseInt(votos[0].count);
        this.votos.dislikes = parseInt(votos[1].count);
      }
    }
  },
  async mounted() {
    const usuario = await this.updateUsuario(this.IDusuario_creador);
    this.votoUsuario = await this.loadVoto(this.paramsVotoUsuario);
    await this.loadVotos();
    this.nombre = usuario.Nombre_usuario;
    this.apellido = usuario.Apellido_usuario;
  }
};
</script>

<style lang="scss" scoped>
</style>