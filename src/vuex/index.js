import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
    state:{
      homedata:{
        show:false
      },
    
    },
    mutations:{
      changehome(state,val){
        state.homedata.show=val;
      },

    },
    getters:{},
})
