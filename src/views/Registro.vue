<template>
  <div>
    <b-form class="py-2 px-4 w-50 mt-5 mx-auto text-center shadow-sm rounded">
      <i class="fa fa-user-plus text-primary" aria-hidden="true"></i>
      <h4 class="display-4">Registro</h4>
      <h5 class="text-left">Usuario</h5>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="inputGroup">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Ingrese su Cedula"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-input-group class="inputGroup">
          <b-form-input
            type="password"
            id="input-2"
            required
            class="input border-primary"
            placeholder="Ingrese su contraseña"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-input-group class="inputGroup">
          <b-form-input
            type="password"
            id="input-2"
            required
            class="input border-primary"
            placeholder="Repita su contraseña"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Informacion personal</h5>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="inputGroup">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Ingrese su nombre"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="inputGroup">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Ingrese su apellido"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>      
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="inputGroup">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Ingrese su correo"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Informacion de estudio</h5>
      <b-form-group id="input-group-idioma" label-for="carrera">
        <b-form-select
          id="carrera"
          v-model="carrera"
          :options="carreras"
          required
          class="inputGroup border-primary"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-idioma" label-for="semestre">
        <b-form-select
          id="semestre"
          v-model="semestre"
          :options="semestres"
          required
          class="inputGroup border-primary"
        ></b-form-select>
      </b-form-group>
      <b-form-row class="my-3">
        <b-button
          type="submit"
          class="mr-auto ml-1"
          :to="{ name: 'Home' }"
          variant="primary"
          block
          >Registrarse</b-button
        >
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      status: "not_accepted",
      carrera: null,
      semestre: null,
      carreras: [
        { value: null, text: "Por favor selecciona una carrera" },
        { value: "ing-sis", text: "Ingenieria de Sistemas" }
      ],
      semestres: [
        { value: null, text: "Por favor selecciona una carrera" },
        { value: "i", text: "Primero" },
        { value: "ii", text: "Segundo" },
        { value: "iii", text: "Tercero" },
        { value: "iv", text: "Cuarto" },
        { value: "v", text: "Quinto" },
        { value: "vi", text: "Sexto" },
        { value: "vii", text: "Septimo" },
        { value: "viii", text: "Octavo" },
        { value: "pas", text: "Pasantia" },
        { value: "pos", text: "Post-Grado" },
      ]
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
.fa-user-plus {
  font-size: 5rem;
}
.inputGroup {
  color: #495057;
  background-color: #fff;
  border-radius: 19px;
  outline: 0;
}
.input {
  border-radius: 19px;
}
.input:focus {
  border-color: unset;
  outline: 0;
  box-shadow: unset;
}
</style>