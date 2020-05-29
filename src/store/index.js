import Vue from "vue";
import Vuex from "vuex";
import login from "@/modules/login";
import usuarios from "@/modules/usuarios";
import categorias from "@/modules/categorias";
import temas from "@/modules/temas";
import mensajes from "@/modules/mensajes";
import votos from "@/modules/votos";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cargando: false,
    buscandoUsuario: false,
    buscandoCorreo: false,
  },
  mutations: {
    setCargando(state) {
      state.cargando = !state.cargando;
    },
    setBuscandoUsuario(state) {
      state.buscandoUsuario = !state.buscandoUsuario;
    },
    setBuscandoCorreo(state) {
      state.buscandoCorreo = !state.buscandoCorreo;
    },
  },
  actions: {},
  getters: {
    cargando: (state) => state.cargando,
    buscandoUsuario: (state) => state.buscandoUsuario,
    buscandoCorreo: (state) => state.buscandoCorreo,
  },
  modules: {
    login,
    usuarios,
    categorias,
    temas,
    mensajes,
    votos,
  },
});
