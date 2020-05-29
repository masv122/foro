<template>
  <div>
    <b-navbar
      class="shadow-sm fixed-top"
      type="primary"
      variant="light"
    >
      <b-container fluid>
        <b-navbar-nav class="mr-auto nav-left">
          <b-nav-item
            :to="{ name: 'Home' }"
            class="mr-2"
          >
            <i class="fas fa-home fa-2x  "></i>
          </b-nav-item>
          <div
            class="d-blocks text-center mr-3"
            v-if="usuario != null"
          >
            <h6 class="mb-0">Bienvenido</h6>
            <label class="mb-0">
              {{ usuario.Nombre_usuario }} {{ usuario.Apellido_usuario }}
            </label>
          </div>
        </b-navbar-nav>
        <!-- <b-navbar-nav class="mx-auto nav-center">
          <b-nav-item><i
              class="fa fa-fire"
              aria-hidden="true"
            ></i></b-nav-item>
          <b-nav-item><i
              class="fa fa-star"
              aria-hidden="true"
            ></i></b-nav-item>
        </b-navbar-nav> -->
        <b-navbar-nav class="ml-auto nav-right">
          <b-nav-form>
            <b-form-group>
              <b-input-group class="inputGroup border-primary">
                <template v-slot:prepend>
                  <b-input-group-text class="bg-white slot text-primary border-primary"><i
                      class="fa fa-search"
                      aria-hidden="true"
                    ></i></b-input-group-text>
                </template>
                <b-form-input
                  id="input-1"
                  type="search"
                  required
                  placeholder="Buscar"
                  class="input border-primary"
                >
                </b-form-input>
              </b-input-group>
            </b-form-group>
          </b-nav-form>
          <b-nav-item
            href="#"
            v-if="usuario != null"
          ><i class="fa fa-user-circle"></i>
          </b-nav-item>
          <b-nav-item v-if="usuario != null"><i
              class="fa fa-bell"
              aria-hidden="true"
            ></i><sup>
              <b-badge
                pill
                variant="light"
              >0</b-badge>
            </sup></b-nav-item>
          <b-nav-item v-if="usuario != null"><i
              class="fa fa-envelope-open"
              aria-hidden="true"
            ></i><sup>
              <b-badge
                pill
                variant="light"
              >0</b-badge>
            </sup></b-nav-item>
          <b-nav-item-dropdown
            no-caret
            right
            v-if="usuario != null"
          >
            <template v-slot:button-content>
              <i
                class="fa fa-caret-down"
                aria-hidden="true"
              ></i>
            </template>
            <b-dropdown-item href="#"><i
                class="fa fa-cogs"
                aria-hidden="true"
              ></i>
              Ajustes</b-dropdown-item>
            <b-dropdown-item><i
                class="fa fa-heart"
                aria-hidden="true"
              ></i>
              Favoritos</b-dropdown-item>
            <b-dropdown-item><i
                class="fa fa-question-circle"
                aria-hidden="true"
              ></i>
              Ayuda</b-dropdown-item>
            <b-dropdown-item
              :to="{ name: 'Login' }"
              @click="logOut"
            ><i
                class="fa fa-sign-out-alt"
                aria-hidden="true"
              ></i>
              Salir</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            no-caret
            right
            v-if="usuario == null"
          >
            <template v-slot:button-content>
              <i class="fa fa-user-circle"> </i>
            </template>
            <b-dropdown-item :to="{ name: 'Login' }"> Ingresa</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Registro' }">
              Registrate</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item> </b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <i
              v-if="expanded"
              class="fa fa-chevron-up"
              aria-hidden="true"
            ></i>
            <i
              v-else
              class="fa fa-chevron-down"
            ></i>
          </template>
        </b-navbar-toggle>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BarraSuperior",
  computed: {
    ...mapGetters("login", ["usuario"])
  },
  methods: {
    ...mapActions("login", ["logOut"])
  }
};
</script>

<style  scoped>
.nav-center i {
  font-size: 2rem;
  margin: 0 2rem;
}
.nav-right i {
  font-size: 1.5rem;
}
.inputGroup {
  color: #495057;
  background-color: #fff;
  border-radius: 20px;
  outline: 0;
}
.input {
  border-radius: 20px;
  border-left: unset;
}
.slot {
  border-right: unset;
  border-radius: 20px;
}
.input:focus {
  border-color: unset;
  outline: 0;
  box-shadow: unset;
}
</style>