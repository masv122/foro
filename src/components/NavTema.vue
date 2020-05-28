<template>
  <div>
    <b-nav class="my-3 shadow-sm bg-white">
      <b-nav-item
        disabled
        class="pt-2"
      ><i
          class="fa fa-comments"
          aria-hidden="true"
        ></i></b-nav-item>
      <b-nav-item
        disabled
        class="pt-2"
      >
        <h5>Comentarios</h5>
      </b-nav-item>
      <b-nav-item v-if="!mensajeActivo">
        <b-button
          variant="primary"
          @click="updateMensajeActivo()"
        >
          <i class="fa fa-comment-medical"></i>
          Responder al Tema
        </b-button>
      </b-nav-item>
      <b-nav-item class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <i class="fas fa-align-center    "></i> Ordenar por
          </template>
          <b-dropdown-item>Cronologicamente</b-dropdown-item>
          <b-dropdown-item>Relevancia</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NavTema",
  computed: {
    ...mapGetters("mensajes", ["mensajeActivo"])
  },
  methods: {
    ...mapMutations("mensajes", ["updateMensajeActivo"])
  }
};
</script>

<style lang="scss" scoped>
</style>