<template>
  <div>
    <div>
      <Jumbotron />
      <Categoria
        v-for="(categoria, index) in categorias"
        :categoria="categoria"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Categoria from "@/components/Categoria.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Categoria
  },
  computed: {
    ...mapGetters("categorias", ["categorias"])
  },
  methods: {
    ...mapActions("categorias", ["loadCategorias"])
  },
  created() {
    this.loadCategorias();
  }
};
</script>
