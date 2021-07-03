import axios from "axios";

export default {
  actions: {
    async fetchRepos(ctx) {
      const res = await axios.get("https://api.github.com/users/Inza/repos");
      const repositories = await res.data;
      ctx.commit("updateRepos", repositories);
    },
  },
  mutations: {
    updateRepos(state, repositories) {
      state.repositories = repositories;
    },
  },
  state: {
    repositories: [],
  },
  getters: {
    allRepos(state) {
      return state.repositories;
    },
  },
};
