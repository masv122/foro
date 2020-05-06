<template>
  <div>
    <b-nav class="my-1">
      <b-nav-item disabled><i class="fas fa-comment-alt"></i></b-nav-item>
      <b-nav-item disabled><h5>Temas</h5></b-nav-item>
      <b-button
        variant="primary"
        v-if="usuario != null"
        :to="{ name: 'Crear Tema', params: { id: this.$route.params.id } }"
      >
        <i class="fas fa-plus    "></i> Crear Tema
      </b-button>
      <b-button-group class="ml-auto">
        <b-button>Cronologicamente</b-button>
        <b-button>Relevancia</b-button>
      </b-button-group>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavCategoria",
  computed: {
    ...mapGetters("login", ["usuario"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>