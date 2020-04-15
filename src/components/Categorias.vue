<template>
  <div class="mt-5">
    <b-card
      header-tag="header"
      footer-tag="footer"
      header-bg-variant="primary"
      footer-bg-variant="white"
      border-variant="primary"
      class="shadow"
    >
      <template v-slot:header>
        <b-link class="text-white" :to="{name: 'Categoria'}"><h3>Categoria</h3></b-link>
      </template>
      <b-container fluid class="my-1">
        <b-card-group columns>
          <TemaMiniatura/>
          <TemaMiniatura/>
          <TemaMiniatura/>
        </b-card-group>
      </b-container>
      <template v-slot:footer>
        <h6>Temas: 00</h6>
        <h6>Comentarios: 00</h6>
      </template>
    </b-card>
    <hr />
  </div>
</template>

<script>
import TemaMiniatura from "@/components/TemaMiniatura.vue";
export default {
  name: "Categoria",
  components: {
    TemaMiniatura
  }
};
</script>

<style lang="scss" scoped>
</style>