import Vue from "vue";

export default {
  namespaced: true,
  state: {
    mensajeActivo: false,
    mensajes: [],
  },
  getters: {
    mensajeActivo: (state) => state.mensajeActivo,
    mensajes: (state) => state.mensajes,
  },
  mutations: {
    updateMensajeActivo(state) {
      state.mensajeActivo = !state.mensajeActivo;
    },
    updateMensajes(state, mensajes) {
      state.mensajes = mensajes;
    },
  },
  actions: {
    updateMensaje: async function({ commit, dispatch }, mensaje) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/api/mensajes/nuevo", mensaje)
        .then((res) => {
          commit("updateMensajeActivo", null);
          commit("setCargando", null, { root: true });
          return res.data.error;
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      dispatch("loadMensajesTema", mensaje.IDtema);
      return resultado;
    },
    loadMensajesTema: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const mensajes = await Vue.axios
        .get(`/api/mensajes-tema/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return [];
          } else {
            return res.data.mensajes;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      commit("updateMensajes", mensajes);
    },
    loadComentarioCorrecto: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const mensaje = await Vue.axios
        .get(`/api/mejor-respuesta/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.mensaje;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return mensaje;
    },
    cantComentariosCategorias: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .get(`/api/comentarios-categoria-cantidad/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return 0;
          } else {
            return res.data.cant;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return resultado;
    },
    cantComentariosTemas: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .get(`/api/comentarios-tema-cantidad/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return 0;
          } else {
            return res.data.cant;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return resultado;
    },
    loadUltimoMensajeTema: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const mensaje = await Vue.axios
        .get(`/api/ultimo-mensaje-tema/${id}`)
        .then((res) => {
          commit("setCargando", null, { root: true });
          if (res.data.error) {
            return null;
          } else {
            return res.data.mensaje;
          }
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return mensaje;
    },
    updateCorrecta: async function({ commit }, params) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .put(`/api/mensajes/modificar-correcto`, params)
        .then((res) => {
          commit("setCargando", null, { root: true });
          return res.data.error;
        })
        .catch((e) => {
          commit("setCargando", null, { root: true });
          alert(e);
        });
      return resultado;
    },
  },
};
