<template>
  <div class="evaluate">
    <div class="common_head">
      <router-link to="/datt" class="common_head_icon"></router-link>评价
    </div>
    <div class="evaluate-buick">
      <img src="./img/840@2x.png" alt />
      <div class="evaluate-buick-text">
        <p class="text1">别克昂科拉</p>
        <p class="text2">SUV5座 | 1.4T自动</p>
      </div>
    </div>
    <div class="evaluate-place"></div>
    <div class="evaluate-pick">
      <div class="evaluate-pick-up">
        <div class="evaluate-pick-up-title">
          <span class="car1">取车门店</span>
          <span class="car2">郑州花园路店</span>
        </div>
        <div class="evaluate-pick-up-section">
          <span>综合评价</span>
          <van-rate v-model="value1" />
          <span>服务态度</span>
          <van-rate v-model="value2" />
          <span>手续办理</span>
          <van-rate v-model="value3" />
          <span>车辆情况</span>
          <van-rate v-model="value4" />
        </div>
        <textarea class="evaluate-pick-input" placeholder="感谢您对评价的支持，来说说您的平驾之旅吧！" name id></textarea>
      </div>
    </div>
    <div class="evaluate-place"></div>
    <div class="evaluate-pick">
      <div class="evaluate-pick-up">
        <div class="evaluate-pick-up-title">
          <span class="car1">还车门店</span>
          <span class="car2">郑州花园路店</span>
        </div>
        <div class="evaluate-pick-up-section">
          <span>综合评价</span>
          <van-rate v-model="value5" />
          <span>服务态度</span>
          <van-rate v-model="value6" />
          <span>手续办理</span>
          <van-rate v-model="value7" />
        </div>
        <textarea class="evaluate-pick-input" placeholder="感谢您对评价的支持，来说说您的平驾之旅吧！" name id></textarea>
      </div>
    </div>
    <div class="evaluate-place"></div>
    <div class="evaluate-foot">
      <!-- <div class="evaluate-foot-btn">提交评价</div> -->
      <router-link to="/pingjiaduo" class="evaluate-foot-btn">提交评价</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 4,
      value2: 4,
      value3: 4,
      value4: 4,
      value5: 4,
      value6: 4,
      value7: 4
    };
  },
  methods: {},
  components: {},
  mounted() {
     
    
  },
  updated() {
  },
  destroyed(){
       const text = document.getElementsByClassName("evaluate-pick-input")[0].value;
       this.$store.commit('addtext',text);
  }
};
</script>

<style scoped lang="less">
.evaluate {
  background-color: #fff;
}
.common_head {
  height: 0.45rem;
  position: relative;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.45rem;
  color: #222;
  position: relative;
  .common_head_icon {
    position: absolute;
    left: 0.15rem;
    top: 0.11rem;
    width: 0.22rem;
    height: 0.22rem;
    background: url("./img/fanhui@2x.png") no-repeat;
    background-size: 0.12rem;
  }
}
.evaluate-buick {
  width: 100%;
  height: 0.65rem;
  border-top: 1px solid #dfdfdf;
  position: relative;
  img {
    position: absolute;
    top: 0.08rem;
    left: 0.2rem;
    width: 0.9rem;
    height: 0.53rem;
  }
  .evaluate-buick-text {
    height: 0.65rem;
    position: absolute;
    right: 1.35rem;
    .text1 {
      font-size: 0.14rem;
      color: #222;
      margin-bottom: -0.05rem;
      margin-top: 0.1rem;
    }
    .text2 {
      font-size: 0.12rem;
      color: #888;
    }
  }
}
.evaluate-place {
  height: 0.1rem;
  background: #f6f6f6;
}
.evaluate-pick {
  height: 3.13rem;
  .evaluate-pick-up {
    margin-left: 0.15rem;
    .evaluate-pick-up-title {
      height: 0.4rem;
      position: relative;
      .car1 {
        position: absolute;
        top: 0.15rem;
        font-size: 0.14rem;
        color: #222;
      }
      .car2 {
        position: absolute;
        left: 0.9rem;
        top: 0.15rem;
        font-size: 0.14rem;
        color: #444;
      }
    }
    .evaluate-pick-up-section {
      font-size: 0.14rem;
      margin-left: 0.56rem;
      overflow: hidden;
      span {
        float: left;
        margin-top: 0.06rem;
      }
      .van-rate {
        margin-left: 0.75rem;
        margin-top: 0.06rem;
      }
    }
    .evaluate-pick-input {
      width: 3.45rem;
      height: 1.3rem;
      background: #f6f6f6;
      margin-top: 0.06rem;
      color: #888;
      font-size: 0.12rem;
      outline: none;
      text-indent: 0.08rem;
      line-height: 0.3rem;
    }
  }
}
.evaluate-foot {
  width: 100%;
  height: 0.55rem;
  .evaluate-foot-btn {
    display: block;
    width: 3.45rem;
    height: 0.39rem;
    font-size: 0.16rem;
    margin-left: 0.15rem;
    margin-top: 0.07rem;
    border-radius: 0.03rem;
    background: #ffcc00;
    color: #fff;
    text-align: center;
    line-height: 0.39rem;
  }
}
</style>
