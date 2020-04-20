export default {
  namespaced: true,
  state: {
    loginVisible: false
  },
  mutations: {
    setLoginVisible(state, estado){
        state.loginVisible = estado;
    }
  },
  actions: {
 
  },
  getters: {
    loginVisible: state =>{
       return state.loginVisible;
    }
  },
};
