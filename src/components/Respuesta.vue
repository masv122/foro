<template>
  <div>
    <b-card
      class="shadow-sm"
      footer-tag="footer"
    >
      <b-row>
        <b-col cols="1">
          <b-list-group class="text-center">
            <b-list-group-item href="">
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
            <b-list-group-item>
              <i
                :class="['fa', 'fa-check', correcta == 0 ? '' : 'text-success' ]"
                aria-hidden="true"
              ></i>
            </b-list-group-item>
            <b-list-group-item>
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
import { mapActions } from "vuex";

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
    IDusuario_creador : {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      apellido: "",
      nombre: "",
    }
  },
    computed: {
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    }
  },
  methods: {
    ...mapActions("usuarios", ["updateUsuario"])
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