import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRepos() {
    return apiClient.get("/users/Inza/repos");
  },
  getBranches(repo) {
    return apiClient.get(`/repos/Inza/${repo}/branches`);
  },
  getCommits(repo) {
    return apiClient.get(`/repos/Inza/${repo}/commits`);
  },
};
