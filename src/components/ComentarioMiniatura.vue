<template>
  <div>
       <b-card title="Mejor Comentario" border-variant="success">
      <div>
        <a href="#"><i class="fa fa-user-circle mx-2" aria-hidden="true"></i></a>
        <i class="fa fa-medal mx-1"></i>
        <i class="fa fa-medal mx-1"></i>
        <i class="fa fa-medal mx-1"></i>
      </div>
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
        neque laboriosam quod iure eum debitis, assumenda quis sapiente!
        Blanditiis perferendis aliquam quod voluptatibus reprehenderit molestias
        unde ut quia distinctio!
      </b-card-text>
      <template v-slot:footer>
        Ultimo comentario: Lorem ipsum dolor...
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
    name: 'ComentarioMiniatura'
};
</script>

<style lang="scss" scoped>
</style>