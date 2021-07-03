import axios from "axios";

export default {
  actions: {
    async fetchCommits(ctx, repo) {
      const res = await axios.get(
        `https://api.github.com/repos/Inza/${repo}/commits`
      );
      const commits = await res.data.slice(0, 10).map(({ commit }) => commit);
      ctx.commit("updateCommits", commits);
    },
  },
  mutations: {
    updateCommits(state, commits) {
      state.commits = commits;
    },
  },
  state: {
    commits: [],
  },
  getters: {
    allCommits(state) {
      return state.commits;
    },
  },
};
