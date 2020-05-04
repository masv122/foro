import Vue from "vue";
export default {
  namespaced: true,
  state: {
    loginVisible: false,
    usuario: null,
  },
  mutations: {
    setLoginVisible(state, estado) {
      state.loginVisible = estado;
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    logIn: async function({ commit }, datos) {
      const resultado = await Vue.axios
        .post("/api/usuarios/login", datos)
        .then((res) => {
          if(res.data.error){
            commit("setUsuario", null);
            return false;
          } else {
            commit("setUsuario", res.data);
            return true;
          }
        })
        .catch((e) => {
          commit("setUsuario", null);
          return {
            error: e,
          };
        });
      return resultado;
    },
  },
  getters: {
    loginVisible: (state) => {
      return state.loginVisible;
    },
    log: (state) => {
      return state.log;
    },
  },
};
