<template>
  <div class="homeshare">
      <Mymap></Mymap>
      <Share v-if='$store.state.showshare'></Share>
  </div>
</template>

<script>
import Mymap from './../map/map'
import Share from './share/sharelist'

export default {
  data() {
    return {

    }
  },
  mounted () {


  },
  methods: {

  },
  components: {
  Mymap,Share
  }
}
</script>

<style scoped lang='less'>


</style>
