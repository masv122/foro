<template>
  <div>
    <b-form
      class="py-2 px-4 w-50 login mx-auto text-center shadow-sm rounded bg-white"
      @submit.prevent=""
    >
      <i class="fa fa-user-circle text-primary" aria-hidden="true"></i>
      <h4 class="display-4">Ingresa</h4>
      <b-form-row class="my-3">
        <b-col cols="12">
          <b-form-group id="input-group-usuario" label-for="usuario">
            <b-input-group class="inputGroup">
              <template v-slot:prepend>
                <b-input-group-text class="bg-white border-primary slot"
                  ><i class="fa fa-user" aria-hidden="true"></i
                ></b-input-group-text>
              </template>
              <b-form-input
                id="usuario"
                type="text"
                required
                v-model="ID_usuario"
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
          <b-form-group id="input-group-contraseña" label-for="contraseña">
            <b-input-group class="inputGroup">
              <template v-slot:prepend>
                <b-input-group-text class="bg-white border-primary slot"
                  ><i class="fa fa-key" aria-hidden="true"></i
                ></b-input-group-text>
              </template>
              <b-form-input
                type="password"
                v-model="PASS_usuario"
                id="contraseña"
                required
                class="input border-primary"
                placeholder="Ingrese su contraseña"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
          <p class="text-danger" v-if="error">{{ resultado }}</p>
        </b-col>
      </b-form-row>
      <b-form-row class="my-3 d-block text-left">
        <b-form-checkbox v-model="recuerdame" switch>
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
          variant="success"
          @click="loginProceso()"
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
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      recuerdame: false,
      ID_usuario: "",
      PASS_usuario: "",
      resultado: "Cedula o contraseña incorrecta",
      error: false
    };
  },
  components: {},
  methods: {
    ...mapActions("login", ["logIn"]),
    loginProceso() {
      const resultado = this.logIn({
        usuario: this.getDatos(),
        recuerdame: this.recuerdame
      });
      resultado.then(res => {
        if (res) {
          this.$router.push("/");
        } else {
          this.error = true;
        }
      });
    },
    getDatos() {
      return {
        ID_usuario: this.ID_usuario,
        PASS_usuario: this.PASS_usuario
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 10rem;
}
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