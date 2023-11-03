import { createStore } from 'vuex'

export default createStore({
  state: {
    isgetterrouter:false
  },
  getters: {
  },
  mutations: {
    changegetterrouter(state,value){
      state.isgetterrouter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
