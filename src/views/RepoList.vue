<template>
  <div>
    <h1>Repositories</h1>
    <RepoCard v-for="repo in allRepos" :key="repo.name" :repository="repo" />
  </div>
</template>

<script>
import RepoCard from "@/components/RepoCard";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    RepoCard,
  },
  computed: mapGetters(["allRepos"]),
  methods: mapActions(["fetchRepos"]),
  async mounted() {
    await this.fetchRepos();
  },
};
</script>
