import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      name: ''
  },
  mutations: {
      changeName (state, newName) {
          state.name = newName;
      }
  },
  actions: {
  },
})
