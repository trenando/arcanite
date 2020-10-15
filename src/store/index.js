import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import submit from "./modules/submit";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    submit
  }
});
