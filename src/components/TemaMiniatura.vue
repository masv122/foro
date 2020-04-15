<template>
  <div>
    <b-card header-tag="header" class="tema">
      <div>
        <a :to="{ name: 'Tema' }"
          ><i class="fa fa-user-circle mx-2" aria-hidden="true"></i
        ></a>
        <i class="fa fa-medal mx-1"></i>
        <i class="fa fa-medal mx-1"></i>
        <i class="fa fa-medal mx-1"></i>
      </div>
      <template v-slot:header>
        <b-link class="text-dark" :to="{ name: 'Tema' }"><h3>Tema</h3></b-link>
      </template>
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
        neque laboriosam quod iure eum debitis, assumenda quis sapiente!
        Blanditiis perferendis aliquam quod voluptatibus reprehenderit molestias
        unde ut quia distinctio!
      </b-card-text>
      <b-button variant="primary" href="">
        Ir al tema <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </b-button>
      <template v-slot:footer>
        Ultimo comentario: Lorem ipsum dolor...
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TemaMiniatura"
};
</script>

<style lang="scss" scoped>
a {
  font-size: 2rem;
}
.tema {
  border: 1px #28a3ff solid;
}
</style>