<template>
  <div class="top">
     <mt-header class="text" title="选择车型">
  <router-link to="/" slot="left">
    <mt-button > <img class="img" src="./img/fanhui@2x.png" alt=""></mt-button>
  </router-link>
</mt-header>
    <div class="tab">
        <mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell :title="'内容 '" />
    <mt-cell :title="'内容 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell  :title="'测试 '" />
    <mt-cell  :title="'测试 '" />
  </mt-tab-container-item>
</mt-tab-container>
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

<style scoped lang='less'>
.top{
    overflow: hidden;
    // height: .46rem;
    .text{
    font-size: .16rem;
    height: 100%;
    }
    .mint-header{
 color: #222;
    }
   
}
.img{
    // width: .22rem;
    // height: .22rem;
}
</style>
