import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "../public/css/all.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from "moment";
import "moment/locale/es";
import VueMoment from "vue-moment";
import CKEditor from "@ckeditor/ckeditor5-vue";
Vue.use(CKEditor);
Vue.use(VueMoment, {
  moment,
});
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://localhost/APIRestPortalUnefa/public";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
