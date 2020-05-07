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
        <b-link
          :to="{
            name: 'Tema',
            params: { idCategoria: IDcategoria, idTema: ID_tema }
          }"
          class="text-white"
          ><h3>{{ Titulo }}</h3>
          <h6 class="float-right">Fecha: {{ Fecha }}</h6></b-link
        >
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
          {{ IDcreador }}
        </div>
      </template>
      <b-row>
        <b-col cols="8">
          <b-card-text>
            <p>
              {{ contenido }}
            </p>
          </b-card-text>
        </b-col>
        <b-col cols="4">
          <ComentarioMiniatura class="ml-auto" />
        </b-col>
      </b-row>
      <template v-slot:footer>
        <h6>Ultimo Mensaje: {{ Fecha_ultimo_mensaje }}</h6>
        <h6>
          Comentarios: {{ Nro_respuestas }}
          <h6 class="float-right">ID Tema: {{ ID_tema }}</h6>
        </h6>
      </template>
    </b-card>
    <hr />
  </div>
</template>

<script>
import ComentarioMiniatura from "@/components/ComentarioMiniatura.vue";
export default {
  name: "Temas",
  props: {
    ID_tema: {
      type: String,
      default: ""
    },
    Titulo: {
      type: String,
      default: ""
    },
    IDcategoria: {
      type: String,
      default: ""
    },
    IDcreador: {
      type: String,
      default: ""
    },
    Fecha: {
      type: Date,
      default: null
    },
    Nro_respuestas: {
      type: String,
      default: ""
    },
    Fecha_ultimo_mensaje: {
      type: Date,
      default: null
    },
    contenido: {
      type: String,
      default: ""
    }
  },
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