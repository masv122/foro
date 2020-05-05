<template>
  <div>
    <b-form
      class="py-2 px-4 w-50 mx-auto registro text-center shadow rounded"
      @submit.prevent="onSubmit"
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
          ref="submit"
          :disabled="!isDisabled"
          class="mr-auto ml-1"
          variant="primary"
          block
          >Registrarse</b-button
        >
      </b-form-row>
      <p class="text-danger" v-if="error">{{ resultado }}</p>

      <b-overlay
        :show="busy"
        no-wrap
        @shown="onShown"
        @hidden="onHidden"
        class="position-fixed"
      >
        <template v-slot:overlay>
          <div
            v-if="processing"
            class="text-center p-4 bg-primary text-light rounded"
          >
            <h4 class="mb-3">Usuario Creado Satisfactoriamente</h4>
            <h6 class="mb-3">Sera redireccionado a la pantalla de inicio</h6>
          </div>
          <div
            v-else
            ref="dialog"
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="form-confirm-label"
            class="text-center p-3"
          >
            <p><strong id="form-confirm-label">Confirmar Registro</strong></p>
            <div class="d-flex">
              <b-button variant="outline-danger" class="mr-3" @click="onCancel">
                Cancelar
              </b-button>
              <b-button variant="outline-success" @click="onOK"
                >¡Registrame!</b-button
              >
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
      error: false,
      busy: false,
      processing: false,
      counter: 1,
      interval: null
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
      return this.contraseña == this.reContraseña;
    }
  },
  methods: {
    ...mapActions("usuarios", ["registro"]),
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
          this.registroOK();
        } else {
          this.error = true;
        }
      });
    },
    clearInterval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    onShown() {
      this.$refs.dialog.focus();
    },
    onHidden() {
      this.$refs.submit.focus();
    },
    onSubmit() {
      this.processing = false;
      this.busy = true;
    },
    onCancel() {
      this.busy = false;
    },
    onOK() {
      this.registrar();
    },
    registroOK() {
      this.counter = 1;
      this.processing = true;
      // Simulate an async request
      this.clearInterval();
      this.interval = setInterval(() => {
        if (this.counter < 20) {
          this.counter = this.counter + 1;
        } else {
          this.clearInterval();
          this.$nextTick(() => {
            this.busy = this.processing = false;
          });
          this.$router.push("/");
        }
      }, 150);
    }
  },
  beforeDestroy() {
    this.clearInterval();
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