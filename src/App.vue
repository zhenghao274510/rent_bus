<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from '../static/js/rem'

export default {
  name: 'App',
  mounted(){
    rem.setrem();
    window.onresize = rem.setrem;
  }
}
</script>

<style scoped lang='less' >
@import url('./../static/css/common.css');
body,html{
  padding: 0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin:0;
}

</style>
