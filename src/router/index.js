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
    }
  ]
})
