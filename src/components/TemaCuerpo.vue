<template>
  <div>
    <b-card
      footer-tag="footer"
      class="shadow-sm"
    >
      <div class="my-3">
        <b-link class="text-dark">
          <i class="fa fa-user-circle">
          </i>
        </b-link>
        {{ nombreCompleto }}
      </div>
      <b-card-text>
        <div v-html="contenido"></div>
      </b-card-text>
      <template v-slot:footer>
        <i
          class="fa fa-tags"
          aria-hidden="true"
        ></i>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TemaCuerpo",
  props: {
    contenido: {
      type: String,
      default: ""
    },
    IDcreador: {
      type: String,
      default: ""
    },
    nombre: {
      type: String,
      default: ""
    },
        apellido: {
      type: String,
      default: ""
    }
  },
  computed: {
    nombreCompleto() {
      return this.apellido + ", " + this.nombre;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>