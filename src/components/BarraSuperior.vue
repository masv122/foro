<template>
  <div>
    <b-navbar class="my-3" toggleable="lg" type="primary" variant="white">
      <b-navbar-brand :to="{ name: 'Home' }"
        ><i class="fa fa-home" aria-hidden="true"></i
      ></b-navbar-brand>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-group>
              <b-input-group class="inputGroup border-primary">
                <template v-slot:prepend>
                  <b-input-group-text class="bg-white slot border-primary"
                    ><i class="fa fa-search" aria-hidden="true"></i
                  ></b-input-group-text>
                </template>
                <b-form-input
                  id="input-1"
                  type="text"
                  required
                  placeholder="Buscar"
                  class="input border-primary"
                >
                </b-form-input>
              </b-input-group>
            </b-form-group>
          </b-nav-form>
          <b-navbar-nav v-if="!loginVisible" class="usuario">
            <b-nav-item href="#"
              ><i class="fa fa-user-circle"
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
            </b-nav-item>
            <b-nav-item
              ><i class="fa fa-bell" aria-hidden="true"
                ><sup><b-badge pill variant="light">0</b-badge></sup></i
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-nav-item-dropdown no-caret right v-if="!loginVisible">
            <template v-slot:button-content>
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Login' }">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-if="loginVisible">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <i v-if="expanded" class="fa fa-chevron-up" aria-hidden="true"></i>
          <i v-else class="fa fa-chevron-down    "></i>
        </template>
      </b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BarraSuperior",
  computed: {
    ...mapGetters("login", ["loginVisible"])
  }
};
</script>

<style  scoped>
.fa-medal {
  font-size: 1rem;
}
.fa-user-circle, .usuario .fa-user-circle,
.fa-cogs,
.fa-home,
.usuario .fa-bell {
  font-size: 2rem;
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