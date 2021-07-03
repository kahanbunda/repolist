<template>
  <div>
    <h2>Branches:</h2>
    <ul class="list-group">
      <li v-for="branchName in allBranches" :key="branchName" class="list-item">
        <b>{{ branchName }}</b>
      </li>
    </ul>

    <h2>Commits:</h2>
    <ul class="list-group">
      <li v-for="commit in allCommits" :key="commit.id" class="list-item">
        <b>{{ commit.author.name }}:</b>
        <p>{{ commit.message }}</p>
        <time>Date: {{ commit.author.date | formatDate }} </time>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["repo"],
  computed: mapGetters(["allBranches", "allCommits"]),
  methods: mapActions(["fetchBranches", "fetchCommits"]),
  async mounted() {
    await this.fetchBranches(this.repo);
    await this.fetchCommits(this.repo);
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
