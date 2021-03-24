import Vue from "vue";
import "./bootstrap";
import router from "./routes";

Vue.component("menu-list", require("./components/Example.vue").default);

new Vue({
  el: "#app",

  router,
});
