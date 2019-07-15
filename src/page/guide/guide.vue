<template>
  <div class="guide">
   <mt-swipe :auto="0" :continuous='false' @change="handleChange">
  <mt-swipe-item><img src="./img/guide1.gif"></mt-swipe-item>
  <mt-swipe-item><img src="./img/guide2.gif"></mt-swipe-item>
  <mt-swipe-item><img src="./img/guide3.gif"></mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
      handleChange(index) {
        // console.log(11)
      if(index==2){
        setTimeout(()=>{
          this.$router.push('./home');
        },1000)

      }
  }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.guide{
  width: 100%;
  height: 100%;
}


</style>
