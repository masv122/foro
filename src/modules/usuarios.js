import Vue from "vue";
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    registro: async function({ commit }, usuario) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/api/usuarios/nuevo", usuario)
        .then((res) => {
          if (res.data.error == true) {
            commit("login/setUsuario", null, { root: true });
            commit("setCargando", null, { root: true });
            return false;
          } else {
            commit("login/setUsuario", usuario, { root: true });
            commit("setCargando", null, { root: true });
            return true;
          }
        })
        .catch((e) => {
          return {
            error: e,
          };
        });
      return resultado;
    },
    updateUsuario: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const usuario = await Vue.axios
      .get(`/api/usuarios/${id}`)
      .then((res) => {
        if (res.data.error) {
          commit("setCargando", null, { root: true });
            return {};
          } else {
            commit("setCargando", null, { root: true });
            return res.data.usuario;
          }
        })
        .catch((e) => {
          return e;
        });
      return usuario;
    },
  },
};
