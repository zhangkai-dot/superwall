import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "components/common/toast/index.js";
import Fastclick from "fastclick";
import Lazyload from "vue-lazyload";
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
//安装toast插件
Vue.use(Toast);
//解决移动端300ms延迟
Fastclick.attach(document.body);
//使用图片懒加载插件
Vue.use(Lazyload);
