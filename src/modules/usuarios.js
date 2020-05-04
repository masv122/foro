import Vue from "vue";
import { mapMutations } from "vuex";
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    ...mapMutations("login", ["setUsuario"]),
  },
  actions: {
    registro: async function({ commit }, usuario) {
      const resultado = Vue.axios
        .post("/api/usuarios/nuevo", usuario)
        .then((res) => {
          if(res.data.error){
            commit("setUsuario", null);
            return false;
          } else {
            commit("setUsuario", usuario);
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
