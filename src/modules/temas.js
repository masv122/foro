import Vue from "vue";

export default {
  namespaced: true,
  state: {
    value: "my value",
    temas: [],
    tema: null,
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
      const temas = await Vue.axios
        .get(`/api/temas-categorias/${id}`)
        .then((res) => {
          if (res.data.error) {
            return null;
          } else {
            return res.data;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTemas", temas);
    },
    enviarTema: async function({ commit }, tema) {
      const resultado = await Vue.axios
        .post("/api/temas/nuevo", tema)
        .then((res) => {
          if (res.data.error) {
            return false;
          } else {
            return true;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("agregarTema", tema);
      return resultado;
    },
    updateTema: async function({ commit }, id) {
      const temas = await Vue.axios
        .get(`/api/temas/${id}`)
        .then((res) => {
          if (res.data.error) {
            return null;
          } else {
            return res.data;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTemas", temas);
    },
  },
};
