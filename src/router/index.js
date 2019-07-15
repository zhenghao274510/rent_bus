import Vue from 'vue'
import Router from 'vue-router'
//我的钱包
import Moeny from '../page/moneybag/bag.vue'
import Lost from '../page/moneybag/lost.vue'
import Invest from '../page/moneybag/invest.vue'
import Pay from '../page/moneybag/payMoney.vue'

import Success from './../page/success/success.vue'
import Payment from './../page/payment/payment.vue'
import Customer from './../page/customer-service/customer.vue'
import Evaluate from './../page/evaluate/evaluate.vue'

import Domestic from './../component/customer-second/domestic.vue'
import Timesharing from './../component/customer-second/timesharing.vue'
import Testdrive from './../component/customer-second/testdrive.vue'
import Globalrent from './../component/customer-second/globalrent.vue'

import details from '../page/details/index2'
import data from '../page/details/index'
import date from '../page/details/index3'
import datt from '../page/details/index4'
import datd from '../page/details/index5'

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
import Shippingaddress from './../page/Main_branch/invoice_set/shipping_address'
import Emils from './../page/Main_branch/invoice_set/emils'
//违章
import Illegal from './../page/regulations/Illegal_processing'
import Ruledescription from './../page/regulations/rule_description'
// 二级路由
import Pending from './../page/regulations/two_regua/pending'
import Discretions from './../page/regulations/two_regua/discretion'
import Otherprocessing from './../page/regulations/two_regua/other_processing'

import type from '../page/type/type'
import City from '@/page/storeCity/chooseCity/city.vue'
import denglu from '../page/登录页切图/denglu'
import pass from '../page/登录页切图/pass.vue'
import shop_xiangqing from '../page/shop_xiangqing/shop_xanigqing'

Vue.use(Router)
export default new Router({
  routes: [{
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
      component: Pay,
    },
    {
      path: '/',
      name: 'Success',
      component: Success
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
      children:[
        // {path: '/',name: 'Domestic',redirect: 'Domestic'},
        {path: '/domestic',name: 'Domestic',component: Domestic},
        {path: '/timesharing',name: 'Timesharing',component: Timesharing},
        {path: '/testdrive',name: 'Testdrive',component: Testdrive},
        {path: '/globalrent',name: 'Globalrent',component: Globalrent},
      ]
    },
    {
      path:'/evaluate',
      name:'Evaluate',
      component:Evaluate
    },{
      path:'/data',
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
    }, {
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
    }, {
      path: '/shop_xanigqing',
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
          path: 'other_processing',
          name: 'Otherprocessing',
          component: Otherprocessing,
        },
      ]
    },
  ]
})
