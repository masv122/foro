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
              @click="votar(0)"
            >
              <i
                class="fa fa-chevron-up"
                aria-hidden="true"
              ></i>
              <small>
                <b-badge
                  pill
                  variant="secondary"
                >0</b-badge>
              </small>
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
            >
              <small>
                <b-badge
                  pill
                  variant="secondary"
                >0</b-badge>
              </small>
              <i
                class="fa fa-chevron-down"
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
      tipo: null
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
    }
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"]),
    ...mapActions("mensajes", ["updateCorrecta", "loadMensajesTema"]),
    ...mapActions("votos", ["updateVoto"]),
    async setCorrecta() {
      const resultado = await this.updateCorrecta(this.params);
      if (!resultado) await this.loadMensajesTema(this.$route.params.idTema);
    },
    async votar(voto) {
      this.tipo = voto;
      await this.updateVoto(this.getVoto);
    }
  },
  async mounted() {
    const usuario = await this.updateUsuario(this.IDusuario_creador);
    this.nombre = usuario.Nombre_usuario;
    this.apellido = usuario.Apellido_usuario;
  }
};
</script>

<style lang="scss" scoped>
</style>