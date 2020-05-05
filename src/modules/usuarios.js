import Vue from "vue";
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    registro: async function({ commit }, usuario) {
      commit("setCargando", null, { root: true });
      const resultado = Vue.axios
        .post("/api/usuarios/nuevo", usuario)
        .then((res) => {
          if (res.data.error == true) {
            commit("login/setUsuario", null, { root: true });
            commit("setCargando", null, { root: true });
            return false;
          } else {
            console.log("entra");
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
  },
};
