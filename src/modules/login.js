import Vue from "vue";
export default {
  namespaced: true,
  state: {
    usuario: null,
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    logIn: async function({ commit }, datos) {
      commit("setCargando", null, { root: true});
      const resultado = await Vue.axios
        .post("/api/usuarios/login", datos.usuario)
        .then((res) => {
          if (res.data.error) {
            commit("setUsuario", null);
            commit("setCargando", null, { root: true});
            return false;
          } else {
            if (datos.recuerdame) {
              localStorage.setItem("usuario", JSON.stringify(res.data));
            } else {
              localStorage.setItem("usuario", JSON.stringify(null));
            }
            commit("setUsuario", res.data);
            commit("setCargando", null, { root: true});
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
    logInStorage: async function({ commit }) {
      let datos = JSON.parse(localStorage.getItem("usuario"));
      if (datos != null) {
        commit("setUsuario", datos);
      }
    },
    logOut: async function({commit}) {
      localStorage.setItem("usuario", JSON.stringify(null));
      commit("setUsuario", null);
    }
  },
  getters: {
    usuario: (state) => {
      return state.usuario;
    },
  },
};
