import { Vue } from "Vue";

export default {
  state: {
    categorias: null,
  },
  getters: {
      categorias: state => state.categorias;
  },
  mutations: {
    loadCategorias(state, categorias) {
      state.categorias = categorias;
    },
  },
  actions: {
      loadCategorias: async function({commit}){
          const categorias = Vue.axios
          .get('/api/categorias')
          .then(res =>{
            if(res.data.error){
                return null;
            } else{
                return res.data;
            }
          })
          .catch((e) => {
            return e;
          });
          commit('loadCategorias', categorias);
      }
  },
};
