import Vue from "vue";
import Vuex from "vuex";

// Modules
import moduleBooks from './modules/module-books'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    moduleBooks
  },
});
