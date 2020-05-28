<template>
  <div>
    <b-card footer-tag="footer" class="shadow-sm">
      <div class="my-3">
        <b-link>
          <i class="fa fa-user-circle">
          </i>
        </b-link>
      </div>
      <b-card-text>
        <div v-html="contenido"></div>
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