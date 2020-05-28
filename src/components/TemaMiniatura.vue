<template>
  <div>
    <b-card
      header-tag="header"
      class="shadow-sm"
    >
      <div>
        <a :to="{ name: 'Tema' }">
          <i class="fa fa-user-circle mx-2">
          </i>
        </a>
      </div>
      <template v-slot:header>
        <b-link
          class="text-dark"
          :to="{ name: 'Tema', params: {
            idCategoria: idCategoria,
            idTema: idTema
            } 
          }"
        >
          <h3>{{ titulo }}</h3>
        </b-link>
      </template>
      <b-card-text>
        <div v-html="contenido"></div>
      </b-card-text>
      <b-button
        variant="outline-primary"
        :to="{ name: 'Tema', params: {
            idCategoria: idCategoria,
            idTema: idTema
            } 
          }"
      >
        Ir al tema <i
          class="fa fa-arrow-right"
          aria-hidden="true"
        ></i>
      </b-button>
      <template v-slot:footer>
        Ultimo comentario: Lorem ipsum dolor...
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TemaMiniatura",
  props: {
    titulo: {
      type: String,
      default: ""
    },
    contenido: {
      type: String,
      default: ""
    },
    idTema: {
      type: String,
      default: ""
    },
    idCategoria: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.fa-user-circle {
  font-size: 2rem;
}
</style>