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
        <b-link class="text-white"><h3>Tema</h3></b-link>
        <div class="text-white">
          <a :to="{ name: 'Tema' }"
            ><i class="text-white fa fa-user-circle mx-2" aria-hidden="true"></i
          ></a>
          Nombre
          <i class="fa fa-medal mx-1"></i>
          <i class="fa fa-medal mx-1"></i>
          <i class="fa fa-medal mx-1"></i>
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
    <hr/>
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
.tema{
    border: 1px #28a3ff solid;
}
</style>