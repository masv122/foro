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
        {{ contenido }}
      </b-card-text>
      <template v-slot:footer>
        <i class="fa fa-tags" aria-hidden="true"></i>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TemaCuerpo',
  props: {
    contenido: {
      type: String,
      default: ''
    },
  },
};
</script>

<style lang="scss" scoped>
</style>