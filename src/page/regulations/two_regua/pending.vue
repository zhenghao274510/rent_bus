<template>
  <!-- 待处理 -->
  <div class="pending">
    <ul>
      <li v-for='(item,index) in arr' :key="index">
        <!-- <router-link to="/Illegal_processing/pending"></router-link> -->
        <a href="javaScript:;" @click="lin(index)" :class="{active:index==num}">{{item}}</a>
      </li>
      <!-- <li>
        <router-link to="/Illegal_processing/Illegal_processing"></router-link>
        <a href="javaScript"></a>
      </li> -->
    </ul>
    <Nthings :p="p"></Nthings>
  </div>
</template>

<script>
import Nthings from './../../Main_branch/nothings'
export default {
  data() {
    return {
        arr:['分时共享','国内租车'],
        num:0,
        p:'当前页面没有相关数据哦'
    };
  },
  methods: {
      lin(index){
          this.num=index
      }
  },
  components: {
    Nthings
  }
};
</script>

<style scoped lang='less'>
.pending {
  ul {
    width: 2.01rem;
    height: 0.33rem;
    display: flex;
    border: 1px solid #ffcc00;
    overflow: hidden;
    margin: 0.07rem auto;
    li {
      flex: 1;
      line-height: 0.33rem;
      a {
        width: 100%;
        height: 100%;
        font-size: 0.13rem;
        display: block;
        text-align: center;
      }
     .active {
        background: #ffcc00;
        color: #fff;
      }
    }
  }
}
</style>
