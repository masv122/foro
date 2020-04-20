<template>
  <div>
    <b-nav class="my-1">
      <b-nav-item disabled
        ><i class="fa fa-comments" aria-hidden="true"></i
      ></b-nav-item>
      <b-nav-item disabled><h5>Comentarios</h5></b-nav-item>
      <b-button variant="primary" href="">
        <i class="fa fa-comment-medical"></i>
        Enviar Comentario
      </b-button>
      <b-button-group class="ml-auto">
        <b-button>Cronologicamente</b-button>
        <b-button>Relevancia</b-button>
      </b-button-group>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavTema"
};
</script>

<style lang="scss" scoped>
</style>