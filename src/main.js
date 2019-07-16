// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'

import storn from './vuex/index'
// import details from './page/details/index'
Vue.config.productionTip = false

//引入vant
import { Rate } from 'vant';
import 'vant/lib/index.css';
Vue.use(Rate);
//引入mint ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
//引入axios
// import axios from 'axios';

// Vue.prototype.axios=axios;

Vue.use(Mint);
//  百度地图

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {

  ak: 'mZPNSjVm8gnlm0OGS0GvELiIFeyG1gGv'
});
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引入axios
import axios from 'axios'
Vue.prototype.axios=axios;
// Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,storn,
  components: { App },
  template: '<App/>'
})
