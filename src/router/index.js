import Vue from 'vue'
import Router from 'vue-router'
import type from '../page/type/type'
import City from '@/page/storeCity/chooseCity/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'City',
      component: City,
    },
  ]
})
