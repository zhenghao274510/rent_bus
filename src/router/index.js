import Vue from 'vue'
import Router from 'vue-router'
// import type from '../page/type/type'
import details from '../page/details/index2'
import data from '../page/details/index'
import date from '../page/details/index3'
import datt from '../page/details/index4'
import datd from '../page/details/index5'


import type from '../page/type/type'
import City from '@/page/storeCity/chooseCity/city.vue'
import denglu from '../page/登录页切图/denglu'
import pass from '../page/登录页切图/pass.vue'
import shop_xiangqing from '../page/shop_xiangqing/shop_xanigqing'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'data',
      redirect: 'data'
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/date',
      name: 'date',
      component: date
    },
    {
      path: '/datt',
      name: 'datt',
      component: datt
    },{
      path:'/city',
      name: 'City',
      component: City,
    },{
      path:"/type",
      name: 'type',
      component: type,
    },
    {
      path:"/datd",
      name: 'datd',
      component: datd,
    },
    {
      path:'/shop_xiangqing',
      name: 'shop_xiangqing',
      component: shop_xiangqing,
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu,
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu,
    },
    {
      path: '/pass',
      name: 'pass',
      component: pass
    },
    {
      path: '/City',
      name: 'City',
      component: City,
    },
    {
      path: '/type',
      name: 'type',
      component: type
    },
  ]
})
