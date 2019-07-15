<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from '../static/js/rem.js'

export default {
  name: 'App',
  mounted(){
    rem.setrem();
    window.onresize = rem.setrem;
  }
}
</script>

<style scoped lang='less' >
@import './../static/css/common.css';
body{
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
