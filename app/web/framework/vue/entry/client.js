import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';
// 引入项目内部路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from '../router';
// 引入Vant UI库
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';
Vue.use(Vant);
export default function (options) {
  Vue.prototype.$http = require('axios');
  // 绑定路由
  options.router = router;
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
