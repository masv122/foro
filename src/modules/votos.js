import Vue from "vue";
export default {
  namespaced: true,
  state: {
    value: "my value",
  },
  getters: {
    value: (state) => {
      return state.value;
    },
  },
  mutations: {
    updateValue(state, payload) {
      state.value = payload;
    },
  },
  actions: {
    updateVoto: async function({ commit, dispatch }, params) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/api/votos", params.voto)
        .then((res) => {
          commit("setCargando", null, { root: true });
          return res.data.error;
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      dispatch("mensajes/loadMensajesTema", params.IDtema, { root: true });
      return resultado;
    },
    loadVoto: async function({ commit }, params) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .get(`/api/voto/${params.id_usuario}/${params.id_comentario}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.voto;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return resultado;
    },
    loadVotosConteo: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .get(`/api/voto-conteo/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.count;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return resultado;
    },
    modifyVoto: async function({ commit, dispatch }, params) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .put("/api/voto", params.voto)
        .then((res) => {
          commit("setCargando", null, { root: true });
          return res.data.error;
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      dispatch("mensajes/loadMensajesTema", params.IDtema, { root: true });
      return resultado;
    },
  },
};
