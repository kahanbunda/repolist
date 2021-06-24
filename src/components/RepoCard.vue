<template>
  <router-link
    class="repo-link"
    :to="{ name: 'repo-show', params: { repo: repository.name } }"
  >
    <div class="repo-card -shadow">
      <span class="eyebrow"
        >Repository <strong>{{ repository.name }}</strong> based on
        {{ repository.language }}</span
      >
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    repository: Object,
  },
};
</script>

<style scoped>
.repo-card {
  margin-bottom: 24px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s linear;
}

.repo-card:hover {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  transform: scale(1.01);
}

.event-card > .title {
  margin: 0;
}

.repo-link {
  font-weight: 100;
  color: black;
  text-decoration: none;
}
</style>
