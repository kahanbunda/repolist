<template>
  <div>
    <h1>Repositories</h1>
    <RepoCard v-for="repo in repositories" :key="repo.name" repository="repo" />
  </div>
</template>

<script>
import RepoCard from "@/components/RepoCard.vue";
import RepoService from "@/services/RepoService.js";

export default {
  components: {
    RepoCard,
  },
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    RepoService.getRepos()
      .then((response) => {
        this.repositories = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
