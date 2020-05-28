<template>
  <div>
    <b-nav class="mb-3 shadow-sm bg-white">
      <b-nav-item
        disabled
        class="pt-2"
      ><i class="fas fa-comment-alt"></i></b-nav-item>
      <b-nav-item
        disabled
        class="pt-2"
      >
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
      <div class="ml-auto d-flex">
        <b-nav-item class="pr-0">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <i class="fas fa-align-center    "></i> Ordenar por
            </template>
            <b-dropdown-item>Cronologicamente</b-dropdown-item>
            <b-dropdown-item>Relevancia</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-item>
        <b-nav-item class="pl-0">
          <b-form-select
            v-model="selected"
            :options="orden"
            class="mb-3"
          >
          </b-form-select>
        </b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavCategoria",
  data() {
    return {
      orden: ["Ascendente", "Descendente"],
      selected: "Ascendente"
    };
  },
  computed: {
    ...mapGetters("login", ["usuario"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>