import Vue from "vue";

export default {
  namespaced: true,
  state: {
    categorias: null,
    categoria: null,
  },
  getters: {
    categorias: (state) => {
      return state.categorias;
    },
    categoria: (state) => {
      return state.categoria;
    },
  },
  mutations: {
    loadCategorias(state, categorias) {
      state.categorias = categorias;
    },
    loadCategoria(state, categoria) {
      state.categoria = categoria;
    },
  },
  actions: {
    loadCategorias: async function({ commit }) {
      const categorias = await Vue.axios
        .get("/api/categorias")
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
      commit("loadCategorias", categorias);
    },
    loadCategoria: async function({ commit }, id) {
      const categoria = await Vue.axios
        .get(`/api/categorias/${id}`)
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
      commit("loadCategoria", categoria);
    },
  },
};
