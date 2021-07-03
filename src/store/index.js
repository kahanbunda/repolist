import Vue from "vue";
import Vuex from "vuex";
import list from "@/store/modules/list";
import branch from "@/store/modules/branch";
import commit from "@/store/modules/commit";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    list,
    branch,
    commit,
  },
});
