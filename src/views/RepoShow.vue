<template>
  <div>
    <h2>Branches:</h2>
    <ul class="list-group">
      <li v-for="branchName in branch" :key="branchName.name" class="list-item">
        <b>{{ branchName }}</b>
      </li>
    </ul>

    <h2>Commits:</h2>
    <ul class="list-group">
      <li v-for="(commit, index) in commits" :key="index" class="list-item">
        <b>{{ commit.author.name }}:</b>
        <p>{{ commit.message }}</p>
        <time>Date: {{ commit.author.date | formatDate }} </time>
      </li>
    </ul>
  </div>
</template>
<script>
import RepoService from "@/services/RepoService.js";

export default {
  props: ["repo"],
  data() {
    return {
      branch: {},
      commits: {},
    };
  },
  created() {
    RepoService.getBranches(this.repo).then((response) => {
      this.branch = response.data.map(({ name }) => name);
    });
    RepoService.getCommits(this.repo)
      .then((response) => {
        this.commits = response.data.slice(0, 10).map(({ commit }) => commit);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
<style scoped>
.location {
  margin-bottom: 0;
}

.location > .icon {
  margin-left: 10px;
}

.event-header > .title {
  margin: 0;
}

.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
