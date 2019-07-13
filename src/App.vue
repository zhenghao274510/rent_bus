<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import rem from '../static/js/rem'

=======
import rem from '../static/js/rem.js'
>>>>>>> a/master
export default {
  name: 'App',
  mounted(){
    rem.setrem();
    window.onresize = rem.setrem;
  }
}
</script>

<<<<<<< HEAD
<style scoped lang='less' >
@import url('./../static/css/common.css');
body,html{
  padding: 0;
  margin:0;
}
=======
<style>
@import './../static/css/common.css';
>>>>>>> a/master
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  padding: 0;
  margin:0;
=======
  width: 100%;
  height: 100%;

>>>>>>> a/master
}

</style>
