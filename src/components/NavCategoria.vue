<template>
  <div>
    <b-nav class="mb-3 shadow-sm bg-white">
      <b-nav-item disabled class="pt-2"><i class="fas fa-comment-alt"></i></b-nav-item>
      <b-nav-item disabled class="pt-2">
        <b>Temas</b>
      </b-nav-item>
      <b-nav-item>
        <b-button
          variant="primary"
          v-if="usuario != null"
          :to="{ name: 'Crear Tema', params: { id: this.$route.params.id } }"
        >
          <i class="fas fa-plus    "></i> Crear Tema
        </b-button>
      </b-nav-item>
      <b-nav-item class="ml-auto">
        <b-nav-item-dropdown
          right
          
        >
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