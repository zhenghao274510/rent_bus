import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {
    //确认订单fan
    //钱包
    num: '',
    //积分
    score: '',
    affirm_order: false,
    basic_service: false,
    enjoyable_service: false,
    //城市
    city: '',
    citys: '',
    direct: 'city',
    //city
    city1: '郑州',
    city2: '郑州',
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
    },
    addscore(state, val) {
      state.score = val;
    },
    //城市
    addcity(state, val) {
      state.direct = val;
    },
    //长租获取城市
    changecity(state, val) {
      if (state.direct == 'city1') {
        state.city1 = val;
      } else if (state.direct == 'city') {
        state.city = val;
      } else if (state.direct == 'city2') {
        state.city2 = val;
      } else {
        state.citys = val;
      }
    }
  },

  getters: {},
});
