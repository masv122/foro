<template>
  <div>
    <b-card border-variant="info" footer-tag="footer">
      <b-row>
        <b-col cols="1">
          <b-list-group class="text-center">
            <b-list-group-item href="">
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
              <small><b-badge pill variant="secondary">0</b-badge></small>
            </b-list-group-item>
            <b-list-group-item>
              <i class="fa fa-check" aria-hidden="true"></i>
            </b-list-group-item>
            <b-list-group-item>
              <small><b-badge pill variant="secondary">0</b-badge></small>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="11">
          <div class="my-3">
            <a href="#"
              ><i class="fa fa-user-circle mx-2" aria-hidden="true"></i
            ></a>
            <i class="fa fa-medal mx-1"></i>
            <i class="fa fa-medal mx-1"></i>
            <i class="fa fa-medal mx-1"></i>
          </div>
          <b-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            magni neque laboriosam quod iure eum debitis, assumenda quis
            sapiente! Blanditiis perferendis aliquam quod voluptatibus
            reprehenderit molestias unde ut quia distinctio!
          </b-card-text>
        </b-col>
      </b-row>
      <template v-slot:footer class="d-flex">
        <div class="d-flex">
          <p>Enviada: <span>hace...</span></p>
          <p class="ml-2">Editada: <span>hace..</span></p>
        </div>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Respuesta"
};
</script>

<style lang="scss" scoped>
</style>