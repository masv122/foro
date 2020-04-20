<template>
  <div>
    <b-card
      header-tag="header"
      footer-tag="footer"
      header-bg-variant="primary"
      footer-bg-variant="white"
      class="shadow tema"
    >
      <template v-slot:header>
        <b-link :to="{ name: 'Tema' }" class="text-white"><h3>Tema</h3></b-link>
        <div class="text-white">
          <b-link class="text-white">
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
          Nombre
        </div>
      </template>
      <b-row>
        <b-col cols="8">
          <b-card-text>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aut
              saepe dicta perspiciatis delectus. Tempora vitae, sapiente earum
              cupiditate ducimus dolorem perferendis fugiat itaque nisi,
              molestiae porro hic corporis recusandae?
            </p>
          </b-card-text>
        </b-col>
        <b-col cols="4">
          <ComentarioMiniatura class="ml-auto" />
        </b-col>
      </b-row>
      <template v-slot:footer>
        <i class="fa fa-tags" aria-hidden="true"></i>
      </template>
    </b-card>
    <hr />
  </div>
</template>

<script>
import ComentarioMiniatura from "@/components/ComentarioMiniatura.vue";
export default {
  name: "Temas",
  components: {
    ComentarioMiniatura
  }
};
</script>

<style scoped>
.tema {
  border: 1px #28a3ff solid;
}
</style>