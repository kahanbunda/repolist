import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon";
import moment from "moment";

Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
