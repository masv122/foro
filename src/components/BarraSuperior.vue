<template>
  <div>
    <b-navbar class="my-3" toggleable="lg" type="primary" variant="white">
      <b-navbar-brand :to="{name: 'Home'}"><i class="fa fa-home" aria-hidden="true"></i></b-navbar-brand>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group left="Username">
              <template v-slot:prepend>
                <b-input-group-text
                  ><i class="fa fa-search" aria-hidden="true"></i
                ></b-input-group-text>
              </template>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-input-group-button slot="right">
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Buscar</b-button
                >
              </b-input-group-button>
            </b-input-group>
          </b-nav-form>
          <b-navbar-nav class="usuario">
            <b-nav-item href="#"
              ><i class="fa fa-user-circle" aria-hidden="true"></i
            ></b-nav-item>
            <b-nav-item href="#" disabled
              ><i class="fa fa-medal"></i
            ></b-nav-item>
            <b-nav-item href="#" disabled
              ><i class="fa fa-medal"></i
            ></b-nav-item>
            <b-nav-item href="#" disabled
              ><i class="fa fa-medal"></i
            ></b-nav-item>
            <b-nav-item
              ><i class="fa fa-bell" aria-hidden="true"
                ><sup><b-badge pill variant="light">0</b-badge></sup></i
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-nav-item-dropdown no-caret right>
            <template v-slot:button-content>
              <i class="fa fa-cogs" aria-hidden="true"></i>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
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
export default {
  name: "BarraSuperior"
};
</script>

<style  scoped>
.usuario .fa,
.fa-cogs, .fa-home {
  font-size: 1.5rem;
}
</style>