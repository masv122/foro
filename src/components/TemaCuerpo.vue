<template>
    <div>
    <b-card border-variant="primary" footer-tag="footer">
      <div class="my-3">
        <a href="#"
          ><i class="fa fa-user-circle mx-2" aria-hidden="true"></i
        ></a>
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
          <i class="fa fa-tags" aria-hidden="true"></i>
      </template>
    </b-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>