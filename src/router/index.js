import Vue from 'vue'
import Router from 'vue-router'
import type from '../page/type/type'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'type',
      component: type
    }
  ]
})
