<template>
  <div>
    <b-form class="py-2 px-4 w-50 mt-5 mx-auto text-center shadow-sm rounded">
      <i class="fa fa-user-circle text-primary" aria-hidden="true"></i>
      <h4 class="display-4">Ingresa</h4>
      <b-form-row class="my-3">
        <b-col cols="12">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-input-group class="inputGroup">
              <template v-slot:prepend>
                <b-input-group-text class="bg-white border-primary slot"
                  ><i class="fa fa-user" aria-hidden="true"></i
                ></b-input-group-text>
              </template>
              <b-form-input
                id="input-1"
                type="text"
                required
                placeholder="Ingrese su Usuario"
                class="input border-primary"
              >
              </b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row class="my-3">
        <b-col cols="12">
          <b-form-group id="input-group-2" label-for="input-2">
            <b-input-group class="inputGroup">
              <template v-slot:prepend>
                <b-input-group-text class="bg-white border-primary slot"
                  ><i class="fa fa-key" aria-hidden="true"></i
                ></b-input-group-text>
              </template>
              <b-form-input
                type="password"
                id="input-2"
                required
                class="input border-primary"
                placeholder="Ingrese su contraseña"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row class="my-3 d-block text-left">
        <b-form-checkbox value="accepted" switch unchecked-value="not_accepted">
          Recuerdame
        </b-form-checkbox>
        <b-link href="#">
          He perdido mi acceso
        </b-link>
      </b-form-row>
      <b-form-row class="my-3">
        <b-button
          type="submit"
          class="ml-auto mr-1"
          :to="{ name: 'Home' }"
          variant="success"
          >Ingresar</b-button
        >
        <b-button
          type="submit"
          class="mr-auto ml-1"
          :to="{ name: 'Registro' }"
          variant="primary"
          >Registrarse</b-button
        >
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      status: "not_accepted"
    };
  },
  components: {},
  methods: {
    ...mapMutations("login", ["setLoginVisible"])
  },
  created() {
    this.setLoginVisible(true);
  }
};
</script>

<style lang="scss" scoped>
.fa-user-circle {
  font-size: 5rem;
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