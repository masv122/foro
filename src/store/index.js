import Vue from 'vue'
import Vuex from 'vuex'
import login from "@/modules/login";
import usuarios from "@/modules/usuarios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cargando: false
  },
  mutations: {
    setCargando(state){
      state.cargando = !state.cargando;
    }
  },
  actions: {
  },
  getters: {
    cargando: state => state.cargando
  },
  modules: {
    login,
    usuarios
  }
})
