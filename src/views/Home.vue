<template>
  <div>
    <div>
      <Jumbotron />
      <Categorias v-for="(categoria, index) in categorias" :key="index" />
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Categorias from "@/components/Categorias.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Categorias
  },
  data() {
    return {
      categorias: [{ titulo: "titulo" }]
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["logInStorage"])
  },
  created() {
    this.logInStorage();
  }
};
</script>
