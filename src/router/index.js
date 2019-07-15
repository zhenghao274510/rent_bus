import Vue from 'vue'
import Router from 'vue-router'
// import type from '../page/type/type.vue'
import City from '../page/storeCity/chooseCity/city.vue'
import Moeny from '../page/moneybag/bag.vue'
import Lost from '../page/moneybag/lost.vue'
import Invest from '../page/moneybag/invest.vue'
import Pay from '../page/moneybag/payMoney.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'City',
      component: City,
    },
    {
      path: '/money',
      name: 'Moeny',
      component: Moeny,
    },
     {
      path: '/invest',
      name: 'Invest',
      component: Invest,
    },
    {
      path: '/lost',
      name: 'Lost',
      component: Lost,
    },
    {
      path: '/pay',
      name: 'Pay',
      component:Pay,
    },
  ]
})
