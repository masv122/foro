<template>
  <div>
    <b-form
      class="py-2 px-4 w-50 mx-auto registro text-center shadow rounded bg-white"
      @submit.prevent="onSubmit"
    >
      <i
        class="fa fa-user-plus text-primary"
        aria-hidden="true"
      ></i>
      <h4 class="display-4">Registro</h4>
      <h5 class="text-left">Usuario</h5>
      <b-form-group
        id="input-group-cedula"
        label-for="cedula"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            id="cedula"
            v-model="$v.cedula.$model"
            :state="$v.cedula.$dirty ? !$v.cedula.$invalid : null"
            @keyup="verificarDisponibilidad($event.target.id)"
            type="number"
            required
            aria-describedby="cedula-live-feedback"
            placeholder="Ingrese su Cedula"
            class="input border-primary"
            trim
          >
          </b-form-input>
          <b-form-invalid-feedback id="cedula-live-feedback">
            La cedula debe tener al menos 6 letras
          </b-form-invalid-feedback>
        </b-input-group>
        <b-badge
          pill
          :variant="estadoUsuario"
        >
          <div v-if="buscandoUsuario">
            <b-spinner
              small
              label="Small Spinner"
            ></b-spinner> Comprobando Disponibilidad
          </div>
          <div v-if="usuarioDisponible === true"><i
              class="fa fa-check-circle"
              aria-hidden="true"
            ></i> Disponible</div>
          <div v-if="usuarioDisponible === false"><i
              class="fa fa-times-circle"
              aria-hidden="true"
            ></i> No Disponible</div>
        </b-badge>
      </b-form-group>
      <b-form-group
        id="input-group-contraseña"
        label-for="contraseña"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            type="password"
            v-model="$v.contraseña.$model"
            :state="$v.contraseña.$dirty ? !$v.contraseña.$invalid : null"
            id="contraseña"
            required
            class="input border-primary"
            aria-describedby="contraseña-live-feedback"
            placeholder="Ingrese su contraseña"
          ></b-form-input>
          <b-form-invalid-feedback id="contraseña-live-feedback">
            Ingrese su contraseña
          </b-form-invalid-feedback>
        </b-input-group>
      </b-form-group>
      <b-form-group
        id="input-group-reContraseña"
        label-for="reContraseña"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            type="password"
            v-model="$v.reContraseña.$model"
            id="reContraseña"
            :state="$v.reContraseña.$dirty ? !$v.reContraseña.$invalid : null"
            required
            class="input border-primary"
            aria-describedby="reContraseña-live-feedback"
            placeholder="Repita su contraseña"
          ></b-form-input>
          <b-form-invalid-feedback id="reContraseña-live-feedback">
            Las contraseñas no coinciden
          </b-form-invalid-feedback>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Informacion personal</h5>
      <b-form-group
        id="input-group-nombre"
        label-for="nombre"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            id="nombre"
            v-model="$v.nombre.$model"
            :state="$v.nombre.$dirty ? !$v.nombre.$invalid : null"
            type="text"
            required
            placeholder="Ingrese su nombre"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group
        id="input-group-apellido"
        label-for="apellido"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            id="apellido"
            v-model="$v.apellido.$model"
            :state="$v.apellido.$dirty ? !$v.apellido.$invalid : null"
            type="text"
            required
            placeholder="Ingrese su apellido"
            class="input border-primary"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group
        id="input-group-correo"
        label-for="correo"
      >
        <b-input-group class="inputGroup">
          <b-form-input
            id="correo"
            v-model="$v.correo.$model"
            :state="$v.correo.$dirty ? !$v.correo.$invalid : null"
            @keyup="verificarDisponibilidad($event.target.id)"
            type="email"
            required
            aria-describedby="correo-live-feedback"
            placeholder="Ingrese su correo"
            class="input border-primary"
          >
          </b-form-input>
          <b-form-invalid-feedback id="correo-live-feedback">
            Debe escribir un correo valido
          </b-form-invalid-feedback>
        </b-input-group>
        <b-badge
          pill
          :variant="estadoCorreo"
        >
          <div v-if="buscandoCorreo">
            <b-spinner
              small
              label="Small Spinner"
            ></b-spinner> Comprobando Disponibilidad
          </div>
          <div v-if="correoDisponible === true"><i
              class="fa fa-check-circle"
              aria-hidden="true"
            ></i> Disponible</div>
          <div v-if="correoDisponible === false"><i
              class="fa fa-times-circle"
              aria-hidden="true"
            ></i> No Disponible</div>
        </b-badge>
      </b-form-group>
      <h5 class="text-left">Informacion de estudio</h5>
      <b-form-group
        id="input-group-carrera"
        label-for="carrera"
      >
        <b-form-select
          id="carrera"
          v-model="$v.carrera.$model"
          :options="carreras"
          :state="$v.carrera.$dirty ? !$v.carrera.$invalid : null"
          required
          class="inputGroup border-primary"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-semestre"
        label-for="semestre"
      >
        <b-form-select
          id="semestre"
          v-model="$v.semestre.$model"
          :state="$v.semestre.$dirty ? !$v.semestre.$invalid : null"
          :options="semestres"
          required
          class="inputGroup border-primary"
        ></b-form-select>
      </b-form-group>
      <b-form-row class="my-3">
        <b-button
          type="submit"
          ref="submit"
          class="mr-auto ml-1"
          variant="primary"
          block
          :disabled="$v.$invalid"
        >Registrarse</b-button>
      </b-form-row>
      <p
        class="text-danger"
        v-if="error"
      >{{ resultado }}</p>

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
              <b-button
                variant="outline-danger"
                class="mr-3"
                @click="onCancel"
              >
                Cancelar
              </b-button>
              <b-button
                variant="outline-success"
                @click="onOK"
              >¡Registrame!</b-button>
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
export default {
  name: "Registro",
  data() {
    return {
      status: "not_accepted",
      cedula: "",
      contraseña: "",
      reContraseña: "",
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
      interval: null,
      usuarioDisponible: null,
      correoDisponible: null
    };
  },
  components: {},
  computed: {
    ...mapGetters(["buscandoUsuario", "buscandoCorreo"]),
    isDisabled() {
      return this.contraseña == this.reContraseña;
    },
    estadoUsuario() {
      if (this.buscandoUsuario) return "info";
      if (this.usuarioDisponible) return "success";
      else return "danger";
    },
    estadoCorreo() {
      if (this.buscandoCorreo) return "info";
      if (this.correoDisponible) return "success";
      else return "danger";
    },
    getNuevoUsuario() {
      return {
        ID_usuario: this.$v.cedula.$model,
        Nombre_usuario: this.$v.nombre.$model,
        Apellido_usuario: this.$v.apellido.$model,
        Pass_usuario: this.$v.contraseña.$model,
        Nro_semestre: this.$v.semestre.$model,
        correo: this.$v.correo.$model
      };
    }
  },
  methods: {
    ...mapActions("usuarios", [
      "registro",
      "updateUsuario",
      "updateUsuarioCorreo"
    ]),
    registrar() {
      const resultado = this.registro(this.getNuevoUsuario);
      resultado.then(res => {
        if (res) {
          this.registroOK();
        } else {
          this.error = true;
        }
      });
    },
    async verificarDisponibilidad(event) {
      if (event == "cedula") {
        this.usuarioDisponible = null;
        if (!this.$v.cedula.$invalid) {
          this.usuarioDisponible =
            (await this.updateUsuario(this.cedula)) == null;
        }
      } else {
        this.correoDisponible = null;
        if (!this.$v.correo.$invalid) {
          this.correoDisponible =
            (await this.updateUsuarioCorreo(this.correo)) == null;
        }
      }
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
    },
    muestra() {
      console.log(this.$v);
    }
  },
  validations: {
    cedula: {
      required,
      minLength: minLength(7)
    },
    contraseña: {
      required
    },
    reContraseña: {
      required,
      igualAContraseña: sameAs("contraseña")
    },
    nombre: {
      required
    },
    apellido: {
      required
    },
    correo: {
      required,
      email
    },
    carrera: {
      required
    },
    semestre: {
      required
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
.input-group > .custom-select:not(:last-child),
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>