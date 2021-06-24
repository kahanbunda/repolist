import Vue from "vue";
import VueRouter from "vue-router";
import RepoList from "@/views/RepoList";
import RepoShow from "@/views/RepoShow";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "repo-list",
    component: RepoList,
  },
  {
    path: "/repo/:repo",
    name: "repo-show",
    component: RepoShow,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
