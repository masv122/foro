<template>
  <div>
    <div>
      <Jumbotron />
      <Categorias v-for="(categoria, index) in categorias" :categoria="categoria" :key="index" />
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Categorias from "@/components/Categorias.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Categorias
  },
  computed: {
    ...mapGetters("categorias", ["categorias"])
  },
  methods: {
    ...mapActions("login", ["logInStorage"]),
    ...mapActions("categorias", ["loadCategorias"])
  },
  created() {
    this.logInStorage();
    this.loadCategorias();
  }
};
</script>
