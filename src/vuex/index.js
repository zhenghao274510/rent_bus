import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
    state:{
        //确认订单fan
        affirm_order:false,
        basic_service:false,
        enjoyable_service:false,
    },
    mutations:{
        //确认订单fan
        affirm_orders(state,value){
            state.affirm_order=value;
        },
        basic_service(state){
            state.basic_service=!state.basic_service
        },
        enjoyable_service(state){
            state.enjoyable_service=!state.enjoyable_service
        },
    },
    getters:{},
})