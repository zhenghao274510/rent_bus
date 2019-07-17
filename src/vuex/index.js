import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {
    //确认订单fan
    //钱包
    num: '',
    affirm_order: false,
    basic_service: false,
    enjoyable_service: false,
    homedata: {
      show: false
    }

  },
  mutations: {
    changehome(state, val) {
      state.homedata.show = val;
    },
    //确认订单fan
    affirm_orders(state, value) {
      state.affirm_order = value;
    },
    basic_service(state) {
      state.basic_service = !state.basic_service
    },
    enjoyable_service(state) {
      state.enjoyable_service = !state.enjoyable_service
    },
    //钱包
    add(state, val) {
      state.num = val;
    },
    add2(state, val1) {
      state.num = val1;
    }
  },
 getters: {},
});
