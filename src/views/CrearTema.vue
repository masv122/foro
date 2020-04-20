<template>
  <div class="shadow-sm p-4">
    <h6 class="display-4">Crear Tema</h6>
    <b-form class="py-2 px-4 text-center">
      <h5 class="text-left">Titulo</h5>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="inputGroup">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Ingrese su Cedula"
            class="input"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
      <h5 class="text-left">Contenido</h5>
      <b-form-group id="input-group-Contenido" label-for="Contenido">
        <b-form-textarea
          id="Contenido"
          v-model="sinopsis"
          placeholder="Ingrese Contenido..."
          rows="3"
          required
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <h5 class="text-left">Tags</h5>
      <b-form-tags
        input-id="tags-pills"
        v-model="value"
        tag-variant="primary"
        tag-pills
        separator=" "
        placeholder="Escriba un tag y presione espacio"
        class="mb-2"
      ></b-form-tags>
      <b-form-row class="my-3">
        <b-button
          type="submit"
          class="ml-auto ml-1"
          variant="primary"
          >Enviar Tema</b-button
        ><b-button
          type="reset"
          class="mr-auto ml-1"
          variant="danger"
          >Cancelar</b-button
        >
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "CrearTema",
  data() {
    return {
      value: []
    };
  }
};
</script>

<style lang="scss" scoped>
</style>