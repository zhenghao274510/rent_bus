<template>
  <div class="basic_service">
    <div class="main">
      <div class="basic_cen">
        <p>尊享服务费</p>
        <span>客户保险范围内赔偿责任免除</span>
      </div>
      <div class="know" @click="flags">
        <span>知道了</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
      flags(){
          this.$store.commit('enjoyable_service')
      }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.basic_service {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  text-align: center;
  .main {
    background: #fff;
    width: 80%;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: .05rem;
    .basic_cen {
      border-bottom: 1px solid #e7e4e4;
      padding-top:.17rem;
      p {
        font-size: 0.17rem;
        color: #524e4e;
      }
      span {
          display: block;
        margin: 0.1rem 0 .17rem 0;
        font-size: 0.13rem;
        color: #8f8c8c;
        padding:0 .4rem;
      }
    }
    .know {
      padding: 0.14rem 0;
        span{
            font-size: .14rem;
            color:rgb(236, 189, 101);
        }
    }
  }
}
</style>
