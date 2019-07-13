import Vue from 'vue'
import Router from 'vue-router'
import type from '../page/type/type'
<<<<<<< HEAD
import City from '@/page/storeCity/chooseCity/city.vue'

=======
>>>>>>> a/master
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'City',
      component: City,
    },
=======
      name: 'type',
      component: type,
      
      // children:
      
    },
    
>>>>>>> a/master
  ]
})
