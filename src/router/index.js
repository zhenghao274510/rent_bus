import Vue from 'vue'
import Router from 'vue-router'
// import type from '../page/type/type'
import details from '../page/details/index2'
import data from '../page/details/index'
import date from '../page/details/index3'
import datt from '../page/details/index4'



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
    }
  ]
})
