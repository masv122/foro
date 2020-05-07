import Vue from "vue";

export default {
  namespaced: true,
  state: {
    categorias: null,
    categoria: {
      Desc_categoria: "",
      ID_categoria: "",
      Nro_mensajes: "",
      Nro_temas: "",
      Titulo: "",
    },
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
      commit("setCargando", null, { root: true });
      const categorias = await Vue.axios
        .get("/api/categorias")
        .then((res) => {
          commit("setCargando", null, { root: true });
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
      commit("setCargando", null, { root: true });
      const categoria = await Vue.axios
        .get(`/api/categorias/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
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
