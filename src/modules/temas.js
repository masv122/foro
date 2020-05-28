import Vue from "vue";

export default {
  namespaced: true,
  state: {
    value: "my value",
    temas: [],
    tema: {
      Fecha: "",
      Fecha_ultimo_mensaje: "",
      ID_tema: "",
      IDcategoria: "",
      IDcreador: "",
      Nro_respuestas: "",
      Titulo: "",
      contenido: "",
    },
  },
  getters: {
    value: (state) => {
      return state.value;
    },
    temas: (state) => {
      return state.temas;
    },
    tema: (state) => {
      return state.tema;
    },
  },
  mutations: {
    updateTemas(state, temas) {
      state.temas = temas;
    },
    agregarTema(state, tema) {
      state.temas.push(tema);
    },
    updateTema(state, tema) {
      state.tema = tema;
    },
  },
  actions: {
    updateTemas: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const temas = await Vue.axios
        .get(`/api/temas-categorias/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.temas;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTemas", temas);
    },
    enviarTema: async function({ commit }, tema) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/api/temas/nuevo", tema)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return res.data.error;
          } else {
            return res.data.id;
          }
        })
        .catch((e) => {
          return e;
        });
      return resultado;
    },
    updateTema: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const tema = await Vue.axios
        .get(`/api/temas/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.tema;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTema", tema);
      return tema;
    },
    previewTemasCategoria: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const temas = await Vue.axios
        .get(`/api/temas-categorias-limitadas/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return [];
          } else {
            return res.data.temas;
          }
        })
        .catch((e) => {
          return e;
        });
      return temas;
    },
    countTemasCategoria: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .get(`/api/temas-cantidad/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return [];
          } else {
            return res.data.cant;
          }
        })
        .catch((e) => {
          return e;
        });
      return resultado;
    },
  },
};
