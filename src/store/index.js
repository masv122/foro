import Vue from 'vue'
import Vuex from 'vuex'
import login from "@/modules/login";
import usuarios from "@/modules/usuarios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    login,
    usuarios
  }
})
