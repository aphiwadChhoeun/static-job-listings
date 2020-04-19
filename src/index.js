import "./global.scss";
import Vue from "vue";

import JobListing from "./components/JobListing";

const app = new Vue({
  components: {
    JobListing,
  },
}).$mount("#app");
