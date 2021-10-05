import Vue from "vue";
import App from "./App.vue";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.snow.css";

Vue.use(VueQuillEditor);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
