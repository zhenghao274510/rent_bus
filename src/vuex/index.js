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
    money:'',
    //传的积分
    c_money:'',
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
    //文本
    text:'',
    homedata: {
      show: false,
      to: '郑州动物园自助点',
      from: '郑州动物园自助点',
      dir: '',
      index: 0,
      spto: 2,
      spfrom: 2,
      lon: false,
      //  决定 显示门店 还是 选择门店
      toshop:false,
      myarr: ['/home/china', '/home/share', '/home/try', '/home/allearth', '/home/long']

    },
      //  保存全局数据
      alldata:{
        starTime:{},
        endTime:{},
        dayX:2,
        carinfo:{},
        affirm_orderss:'芝麻信用免押金',
        affsum:0
     },
    //  分享列表 显示
    showshare:false,

  },
  mutations: {
    share_show(state,val){
      state.showshare=val;
   },
    //  大数据传递
    tostartime(state,val){
        state.alldata.starTime=val;
    },
    toendtime(state,val){
      state.alldata.endTime=val;
  },
  Xday(state,val){
     state.alldata.dayX=val;
  },
  choosecar(state,val){
    state.alldata.carinfo=val;
  },
  affchos(state,value){
    state.alldata.affirm_orderss=value;
  },
  sum(state,val){
    state.alldata.affsum=val;
  },
    // 跳转页面定向
    changeor(state,val){
       state.homedata.toshop=val;
    },
    //  跳回数据
    changeback(state, val) {
      state.back -= val;
    },
    // 主页 数据
    changehomelong(state, val) {
      state.homedata.lon = val;
    },
    changedir(state, val) {
      state.homedata.dir = val;
    },
    changeto(state, val) {
      state.homedata.to = val;
    },
    changefrom(state, val) {
      state.homedata.from = val;
    },
    changecome(state, val) {
      if (state.homedata.dir == 'to') {
        state.homedata.to = val;
      } else if (state.homedata.dir == 'from') {
        state.homedata.from = val;
      }
    },
    changeindex(state, val) {
      state.homedata.index = val;
    },
    changehome(state, val) {
      state.homedata.show = val;
    },
    changespan(state, val) {
      if (state.homedata.dir == 'to') {
        state.homedata.spto = val;
      } else if (state.homedata.dir == 'from') {
        state.homedata.spfrom = val;
      }
    },
    changhomespanto(state, val){
      state.homedata.spto = val;
    },
    changhomespanfrom(state, val){
      state.homedata.spfrom = val;
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
    //支付钱
    addMoney(state,val){
      state.money = val;
    },
    //积分
    addScore(state,val){
      state.c_money = val;
    },
    //城市
    addcity(state, val) {
      state.direct = val;
    },
    addscore(state, val) {
      state.score = val;
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
    },
    //文本
    addtext(state,val){
      state.text = val;
    }
  },
  getters: {},
});
