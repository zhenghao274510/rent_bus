<template>
  <div class="customer_common_head">
    <div class="common_head">
      <router-link to="/home/china" class="common_head_icon"></router-link>
      客服
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .common_head{
      height: .45rem;
      position: relative;
      font-size: .16rem;
      text-align: center;
      line-height: .45rem;
      color: #222;
      .common_head_icon{
          position: absolute;
          left: .15rem;
          top: .11rem;
          width: .22rem;
          height: .22rem;
          background: url('./img/fanhui@2x@2x.png') no-repeat;
          background-size: .12rem;
      }
    }
</style>
