<template>
  <div>
    <b-form
      class="py-2 px-4 w-50 mx-auto registro text-center shadow rounded"
      @submit.prevent=""
    >
      <i class="fa fa-user-plus text-primary" aria-hidden="true"></i>
      <h4 class="display-4">Registro</h4>
      <h5 class="text-left">Usuario</h5>
      <b-form-group id="input-group-cedula" label-for="cedula">
        <b-input-group class="inputGroup">
          <b-form-input
            id="cedula"
            v-model="cedula"
            type="text"
            required
            placeholder="Ingrese su Cedula"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-contraseña" label-for="contraseña">
        <b-input-group class="inputGroup">
          <b-form-input
            type="password"
            v-model="contraseña"
            id="contraseña"
            required
            class="input border-primary"
            placeholder="Ingrese su contraseña"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-reContraseña" label-for="reContraseña">
        <b-input-group class="inputGroup">
          <template v-slot:append v-if="reContraseña != ''">
            <b-input-group-text class="bg-white border-primary slot"
              ><i :class="['fa', validacion]" aria-hidden="true"></i
            ></b-input-group-text>
          </template>
          <b-form-input
            type="password"
            v-model="reContraseña"
            id="reContraseña"
            required
            class="input border-primary"
            placeholder="Repita su contraseña"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Informacion personal</h5>
      <b-form-group id="input-group-nombre" label-for="nombre">
        <b-input-group class="inputGroup">
          <b-form-input
            id="nombre"
            v-model="nombre"
            type="text"
            required
            placeholder="Ingrese su nombre"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-apellido" label-for="apellido">
        <b-input-group class="inputGroup">
          <b-form-input
            id="apellido"
            v-model="apellido"
            type="text"
            required
            placeholder="Ingrese su apellido"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-correo" label-for="correo">
        <b-input-group class="inputGroup">
          <b-form-input
            id="correo"
            v-model="correo"
            type="text"
            required
            placeholder="Ingrese su correo"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Informacion de estudio</h5>
      <b-form-group id="input-group-carrera" label-for="carrera">
        <b-form-select
          id="carrera"
          v-model="carrera"
          :options="carreras"
          required
          class="inputGroup border-primary"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-semestre" label-for="semestre">
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
          @disabled="isDisabled"
          @click="registrar"
          class="mr-auto ml-1"
          variant="primary"
          block
          >Registrarse</b-button
        >
      </b-form-row>
      <p class="text-danger" v-if="error">{{ resultado }}</p>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      status: "not_accepted",
      cedula: "",
      contraseña: "",
      reContraseña: "",
      reContraseñaIncorrecta: ["fa-times", "text-danger"],
      reContraseñaCorrecta: ["fa-check", "text-success"],
      nombre: "",
      apellido: "",
      correo: "",
      carrera: null,
      semestre: null,
      carreras: [
        { value: null, text: "Por favor selecciona una carrera" },
        { value: "ing-sis", text: "Ingenieria de Sistemas" }
      ],
      semestres: [
        { value: null, text: "Por favor selecciona un semestre" },
        { value: "1", text: "Primero" },
        { value: "2", text: "Segundo" },
        { value: "3", text: "Tercero" },
        { value: "4", text: "Cuarto" },
        { value: "5", text: "Quinto" },
        { value: "6", text: "Sexto" },
        { value: "7", text: "Septimo" },
        { value: "8", text: "Octavo" },
        { value: "pas", text: "Pasantia" },
        { value: "pos", text: "Post-Grado" }
      ],
      error: false
    };
  },
  components: {},
  computed: {
    validacion() {
      return this.contraseña != this.reContraseña
        ? this.reContraseñaIncorrecta
        : this.reContraseñaCorrecta;
    },
    isDisabled() {
      return this.contraseña != this.reContraseña;
    }
  },
  methods: {
    ...mapActions("usuarios", ["registro"]),
    ...mapMutations("login", ["setLoginVisible"]),
    getNuevoUsuario() {
      return {
        ID_usuario: this.cedula,
        Nombre_usuario: this.nombre,
        Apellido_usuario: this.apellido,
        Pass_usuario: this.contraseña,
        Nro_semestre: this.semestre,
        correo: this.correo
      };
    },
    registrar() {
      const resultado = this.registro(this.getNuevoUsuario());
      resultado.then(res => {
        if (res) {
          this.$router.push("/");
        } else {
          this.error = true;
        }
      });
    }
  },
  created() {
    this.setLoginVisible(true);
  }
};
</script>

<style lang="scss" scoped>
.registro {
  margin: 8rem 0;
}
.fa-user-plus {
  font-size: 5rem;
}
.inputGroup {
  color: #495057;
  background-color: #fff;
  border-radius: 19px;
  outline: 0;
}
.slot {
  border-left: unset;
  border-radius: 20px;
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