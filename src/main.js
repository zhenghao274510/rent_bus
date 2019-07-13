// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
Vue.config.productionTip = false
//引入mint ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
//引入axios
import axios from 'axios'
Vue.prototype.axios=axios;
// Vue.use(axios)
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
