<template>
  <div id="app">

    <transition :name="transitionName" mode="out-in">
  <router-view/>
    </transition>

  </div>
</template>

<script>
import details from './page/details/index'


import rem from '../static/js/rem.js'
export default {
  name: 'App',
  data () {
      return {
        transitionName:''
      }
    },

  mounted(){
    rem.setrem();
    window.onresize = rem.setrem;


  },
   watch: {
      // 使用watch 监听$router的变化
      $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index){
          // 设置动画名称
          this.transitionName = 'slide-right';
        } else{
          this.transitionName = 'slide-left';
        }
      }
     }
}
</script>


<style  >
@import url('./../static/css/common.css');
@import url('./../static/css/other.css');


#app {
  width: 100%;
  height: 100%;
  font-family:'pingfang';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
