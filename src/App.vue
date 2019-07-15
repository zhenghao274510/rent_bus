<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import details from './page/details/index'

import rem from '../static/js/rem.js'
export default {
  name: 'App',
  mounted(){
    rem.setrem();
    window.onresize = rem.setrem;
  }
}
</script>

<style>
@import './../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

</style>
