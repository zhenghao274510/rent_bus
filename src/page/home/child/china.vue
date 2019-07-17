<template>
  <div>
   <Mymap></Mymap>

   <Adders></Adders>
    <div>
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
import Mymap from './../map/map'
import Adders from './../adverbial_commp'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Adders,Mymap
  }
}
</script>

<style scoped lang='less'>

</style>
