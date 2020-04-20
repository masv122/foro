<template>
  <div>
       <b-card title="Mejor Comentario" border-variant="success">
      <div>
        <a href="#">
          <i class="fa fa-user-circle"
                ><sup>
                  <i class="fa fa-medal"
                    ><sup><b-badge pill variant="light">0</b-badge></sup></i
                  >
                  <i class="fa fa-medal"
                    ><sup><b-badge pill variant="light">0</b-badge></sup></i
                  >
                  <i class="fa fa-medal"
                    ><sup><b-badge pill variant="light">0</b-badge></sup></i
                  >
                </sup>
              </i>
        </a>
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