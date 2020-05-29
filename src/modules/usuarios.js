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
      commit("setBuscandoUsuario", null, { root: true });
      const usuario = await Vue.axios
      .get(`/api/usuarios/${id}`)
      .then((res) => {
        commit("setBuscandoUsuario", null, { root: true });
        if (res.data.error) {
            return null;
          } else {
            return res.data.usuario;
          }
        })
        .catch((e) => {
          commit("setBuscandoUsuario", null, { root: true });
          return e;
        });
      return usuario;
    },
    updateUsuarioCorreo: async function({ commit }, correo) {
      commit("setBuscandoCorreo", null, { root: true });
      const usuario = await Vue.axios
      .get(`/api/usuarios-correo/${correo}`)
      .then((res) => {
        commit("setBuscandoCorreo", null, { root: true });
        if (res.data.error) {
            return null;
          } else {
            return res.data.usuario;
          }
        })
        .catch((e) => {
          commit("setBuscandoCorreo", null, { root: true });
          return e;
        });
      return usuario;
    },
  },
};
