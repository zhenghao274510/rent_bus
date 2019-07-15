import Vue from 'vue'
import Router from 'vue-router'
import Home from './../page/home/home'
//  home  级路由
import China from './../page/home/child/china'
import Try from './../page/home/child/try'
import Allearth from './../page/home/child/allearth'
import Share from './../page/home/child/share'
import Long from './../page/home/child/long'
import Guide from './../page/guide/guide'
import Star from './../page/guide/star'
import Choseshop from './../page/choseshop/choseshop'
//  长租子路由
import Year from './../page/home/child/longzu/annual_rental'
import Chang from './../page/home/child/longzu/business_car'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'star',
      component: Star
    },
    {
      path: '/guide',
      name:'guide',
      component: Guide
    },
    {
      path: '/home',
      name:'home',
      component:Home,
      children:[
        {path:'/',name:'',redirect:'china'},
        {path:'china',name:'china',component:China},
        {path:'allearth',name: 'allearth',component:Allearth},
        {path:'share',name:'share',component:Share},
        {path:'try',name:'try',component:Try},
        {path:'long',name: 'long',component:Long,
          children:[
            {path:'/',name:'',redirect:'annual_rental'},
            {path:'annual_rental',name:'',component:Year},
            {path:'business_car',name:'',component:Chang},
          ]
      }
      ]
    },
    {
      path: '/choseshop',
      name:'Choseshop',
      component: Choseshop
    }

  ]




})
