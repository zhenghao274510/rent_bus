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
import Searchshop from './../page/choseshop/Searchshop'
//  长租子路由
import Year from './../page/home/child/longzu/annual_rental'
import Chang from './../page/home/child/longzu/business_car'




//我的钱包
import Moeny from '../page/moneybag/bag.vue'
import Lost from '../page/moneybag/lost.vue'
import Invest from '../page/moneybag/invest.vue'
import Pay from '../page/moneybag/payMoney.vue'

import Success from './../page/success/success.vue'
import Payment from './../page/payment/payment.vue'
import Customer from './../page/customer-service/customer.vue'
import Evaluate from './../page/evaluate/evaluate.vue'

import Minedata from './../page/minedata/minedata.vue'
import Identity from './../page/identity/identity.vue'
import Evaluatedetails from './../page/evaluatedetails/evaluatedetails.vue'
import pingjiaduo from './../page/evaluatedetails/pingjiaduo.vue'

import Domestic from './../component/customer-second/domestic.vue'
import Timesharing from './../component/customer-second/timesharing.vue'
import Testdrive from './../component/customer-second/testdrive.vue'
import Globalrent from './../component/customer-second/globalrent.vue'
// import type from '../page/type/type'
import details from '../page/details/index2'
import data from '../page/details/index'
import date from '../page/details/index3'
import datt from '../page/details/index4'
import datd from '../page/details/index5'
import erji from '../page/details/erji/erji.vue'
import erji1 from '../page/details/erji/erji1'
import erji2 from '../page/details/erji/erji2'



import type from '../page/type/type'
import City from '@/page/storeCity/chooseCity/city.vue'
import denglu from '../page/登录页切图/denglu'
import pass from '../page/登录页切图/pass.vue'
import shop_xiangqing from '../page/shop_xiangqing/shop_xanigqing'




//确认订单
import Affirm from './../page/orders/affirm_order'
import AffirmBut from './../page/orders/affirm_order_butt'
import Basicservice from './../page/orders/basic_service'
import Enjoyable from './../page/orders/enjoyable_service'
//导航页下的设置
import Branch from './../page/Main_branch/branch_head'
import Nothings from './../page/Main_branch/nothings'
//设置
import Setting from './../page/Main_branch/setting'
// 发票管理
import Invoice from './../page/Main_branch/invoice_management'
import Billing from './../page/Main_branch/billing_history'
import Commoninfo from './../page/Main_branch/common_information'
// 发票管理下的
import Makeinvoice from './../page/Main_branch/make_invoice'
// 发票管理下的二级路由
import Timeshare from './../page/Main_branch/makeInvi/time_share'
import Domesticrent from './../page/Main_branch/makeInvi/domestic_rent'
//常用发票设置
import Invoicemess from './../page/Main_branch/invoice_set/invoice_mess'
import Shippingaddress from '../page/Main_branch/invoice_set/shipping_address'
import Emils from './../page/Main_branch/invoice_set/emils'
//违章
import Illegal from './../page/regulations/Illegal_processing'
import Ruledescription from './../page/regulations/rule_description'
// 二级路由
import Pending from './../page/regulations/two_regua/pending'
import Discretions from './../page/regulations/two_regua/discretion'
import Otherprocessing from './../page/regulations/two_regua/other_processing'
//顺风车
import Ridesharing from './../page/rideSharing/ride_sharing'
//超值套餐
import Meal from './../page/home/borther/meal'
//送车
import Car from './../page/car/car'
//导航 路线
import Gation from './../page/home/banner/gation.vue'
import Line from './../page/home/banner/line.vue'
import Stop from './../page/home/banner/stop.vue'
import Store from './../page/home/banner/store.vue'
import Station from './../page/home/banner/station.vue'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/minedata',
      name: 'Minedata',
      component: Minedata
    },
    {
      path: '/identity',
      name: 'Identity',
      component: Identity
    },
    {
      path: '/pingjiaduo',
      name: 'pingjiaduo',
      component: pingjiaduo
    },
    {
      path: '/evaluatedetails',
      name: 'Evaluatedetails',
      component: Evaluatedetails
    },
    {
      //导航
      path :'/gation',
      name :'Gation',
      component:Gation,
      children:[
        {
          path :'/',
          name :'Line',
          redirect:"line",
        },
        {
          path :'line',
          name :'Line',
          component:Line,
        },
        {
          path :'stop',
          name :'Stop',
          component:Stop,
        },
        {
          path :'store',
          name :'Store',
          component:Store,
        },
        {
          path :'station',
          name :'Station',
          component:Station,
        }
      ]
    },
    {
      //我的钱包
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
      //支付
      path: '/pay',
      name: 'Pay',
      component: Pay,
    },
    //超值套餐
    {
      path: '/meal',
      name: 'Meal',
      component: Meal,
    },
    //启动页
    {
      path: '/',
      name: 'star',
      component: Star
    },
    //引导页
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/home',
      name: '',
      component: Home,
      children:[
      { path: 'china', name: 'china', component: China },
      { path: 'allearth', name: 'allearth', component: Allearth },
      { path: 'share', name: 'share', component: Share },
      { path: 'try', name: 'try', component: Try },
      {
        path: 'long', name: 'long', component: Long,
        children: [
          { path: '/', name: '', redirect: 'annual_rental' },
          { path: 'annual_rental', name: '', component: Year },
          { path: 'business_car', name: '', component: Chang },
        ]
      }
    ]
  },
  {
    path: '/searchshop',
    name: 'searchshop',
    component: Searchshop
  },

  {
    path: '/choseshop',
    name: 'Choseshop',
    component: Choseshop
  },
  

    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
      children: [{
          path: '/',
          name: 'Domestic',
          redirect: 'Domestic'
        },
        {
          path: 'domestic',
          name: 'Domestic',
          component: Domestic
        },
        {
          path: 'timesharing',
          name: 'Timesharing',
          component: Timesharing
        },
        {
          path: 'testdrive',
          name: 'Testdrive',
          component: Testdrive
        },
        {
          path: 'globalrent',
          name: 'Globalrent',
          component: Globalrent
        },
      ]
    },
    {
      path: '/evaluate',
      name: 'Evaluate',
      component: Evaluate
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
    },
    //选择城市
    {
      path: '/city',
      name: 'City',
      component: City,
    }, {
      path: "/type",
      name: 'type',
      component: type,
    },
    {
      path: "/datd",
      name: 'datd',
      component: datd,
      children: [{
          path: "/erji",
          name: "erji",
          component: erji
        },
        {
          path: "/erji1",
          name: "erji1",
          component: erji1
        },
        {
          path: "/erji2",
          name: "erji2",
          component: erji2
        }
      ]
    }, {
      path: '/shop_xiangqing',
      name: 'shop_xiangqing',
      component: shop_xiangqing,
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
    //确认订单fan
    {
      path: '/affirm_order',
      name: 'Affirm',
      component: Affirm
    },
    {
      path: '/affirm_order_butt',
      name: 'AffirmBut',
      component: AffirmBut
    },
    {
      path: '/basic_service',
      name: 'Basicservice',
      component: Basicservice
    },
    {
      path: '/enjoyable_service',
      name: 'Enjoyable',
      component: Enjoyable
    },
    //导航页下的设置fan
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    //发票fan
    {
      path: '/invoice_management',
      name: 'Invoice',
      component: Invoice,
    },
    {
      path: '/make_invoice',
      name: 'Makeinvoice',
      component: Makeinvoice,
      children: [{
          path: 'time_share',
          name: 'Timeshare',
          component: Timeshare
        },
        {
          path: 'domestic_rent',
          name: 'Domesticrent',
          component: Domesticrent
        },
      ],
    },
    {
      path: '/shipping_address',
      name: 'Shippingaddress',
      component: Shippingaddress,
    },
    {
      path: '/common_information',
      name: 'Commoninfo',
      component: Commoninfo,
    },
    // 常用信息设置下fan
    {
      path: '/invoice_mess',
      name: 'Invoicemess',
      component: Invoicemess,
    },
    {
      path: '/billing_history',
      name: 'Billing',
      component: Billing,
    },
    {
      path: '/emils',
      name: 'Emils',
      component: Emils,
    },
    //违章fan
    {
      path: '/rule_description',
      name: 'Ruledescription',
      component: Ruledescription,

    },
    {
      path: '/Illegal_processing',
      name: 'Illegal',
      component: Illegal,
      children: [{
          path: 'pending',
          name: 'Pending',
          component: Pending,
        },
        {
          path: 'discretion',
          name: 'Discretions',
          component: Discretions,
        },
        {
          path: '/Illegal_processing',
          name: 'Illegal',
          component: Illegal,
          children: [{
              path: 'pending',
              name: 'Pending',
              component: Pending,
            },
            {
              path: 'discretion',
              name: 'Discretions',
              component: Discretions,
            },
            {
              path: 'other_processing',
              name: 'Otherprocessing',
              component: Otherprocessing,
            },
          ]
        }, {
          path: 'other_processing',
          name: 'Otherprocessing',
          component: Otherprocessing,
        },
      ]
    },
    //顺风车
    {
      path: '/ride_sharing',
      name: 'Ridesharing',
      component: Ridesharing
    },
    //送车
    {
      path:"/car",
      name:"Car",
      component:Car
    }
  ]
})
