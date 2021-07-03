import axios from "axios";

export default {
  actions: {
    async fetchBranches(ctx, repo) {
      const res = await axios.get(
        `https://api.github.com/repos/Inza/${repo}/branches`
      );
      const branches = await res.data.map(({ name }) => name);
      ctx.commit("updateBranches", branches);
    },
  },
  mutations: {
    updateBranches(state, branches) {
      state.branches = branches;
    },
  },
  state: {
    branches: [],
  },
  getters: {
    allBranches(state) {
      return state.branches;
    },
  },
};
