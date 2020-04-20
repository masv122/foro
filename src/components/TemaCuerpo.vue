<template>
  <div>
    <b-card border-variant="primary" footer-tag="footer">
      <div class="my-3">
        <b-link>
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
        </b-link>
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
export default {};
</script>

<style lang="scss" scoped>
</style>