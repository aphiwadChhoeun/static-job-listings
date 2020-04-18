import "./global.scss"
import Vue from "vue";

import HelloWorld from "./components/HelloWorld"

const app = new Vue({
  components: {
    HelloWorld
  }
}).$mount('#app');