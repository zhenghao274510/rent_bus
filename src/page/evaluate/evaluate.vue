<template>
  <div class="evaluate">
      <div class="common_head">
        <router-link to="#" class="common_head_icon"></router-link>
        评价
    </div>
    <div class="evaluate-buick">
        <img src="./img/840@2x.png" alt="">
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
                <span>综合评价</span> <van-rate v-model="value1" />
                <span>服务态度</span> <van-rate v-model="value2" />
                <span>手续办理</span> <van-rate v-model="value3" />
                <span>车辆情况</span> <van-rate v-model="value4" />
            </div> 
            <div class="evaluate-pick-input" contenteditable="true">
                感谢您对评价的支持，来说说您的平驾之旅吧！
            </div>          
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
                <span>综合评价</span> <van-rate v-model="value1" />
                <span>服务态度</span> <van-rate v-model="value2" />
                <span>手续办理</span> <van-rate v-model="value3" />
            </div> 
            <div class="evaluate-pick-input" contenteditable="true">
                感谢您对评价的支持，来说说您的平驾之旅吧！
            </div>          
        </div>
    </div>
    <div class="evaluate-place"></div>
    <div class="evaluate-foot">
        <!-- <div class="evaluate-foot-btn">提交评价</div> -->
        <router-link to="/minedata" class="evaluate-foot-btn">提交评价</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:4,   
      value2:4,   
      value3:4,   
      value4:4,   
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
      margin-top: .2rem;
      font-size: .16rem;
      text-align: center;
      line-height: .45rem;
      color: #222;
      .common_head_icon{
          position: absolute;
          left: .15rem;
          top: .31rem;
          width: .22rem;
          height: .22rem;
          background: url('./img/fanhui@2x.png') no-repeat;
          background-size: .12rem;
      }
    }
    .evaluate-buick{
        width: 100%;
        height: .65rem;
        border-top: 1px solid #dfdfdf;
        position:relative;
        img{
            position: absolute;
            top: .08rem;
            left:.2rem;
            width: .9rem;
            height: .53rem;
        }
        .evaluate-buick-text{
            height: .65rem;
            position: absolute; 
            right: 1.35rem;
            .text1{
                font-size: .14rem;
                color: #222;
                margin-bottom: -0.05rem;
                margin-top: 0.1rem;
            }
            .text2{
                font-size: .12rem;
                color: #888;
            }
        }
    }
    .evaluate-place{
        height: .1rem;
        background: #f6f6f6;
    }
    .evaluate-pick{
        height: 3.13rem;
        .evaluate-pick-up{
            margin-left: .15rem;
            .evaluate-pick-up-title{
                height: .4rem;
                position: relative;
                .car1{
                    position: absolute;
                    top: .15rem;
                    font-size: .14rem;
                    color: #222;
                }
                .car2{
                    position: absolute;
                    left: .9rem;
                    top: .15rem;
                    font-size: .14rem;
                    color: #444;
                }
            }
            .evaluate-pick-up-section{
                font-size: .14rem;
                margin-left: .56rem;
                overflow: hidden;
                span{
                    float: left;
                    margin-top: .06rem;
                }
                .van-rate{
                    margin-left: .75rem;
                    margin-top: .06rem;
                }
            }
            .evaluate-pick-input{
                width: 3.45rem;
                height: 1.3rem;
                background: #f6f6f6;
                margin-top: .06rem;               
                color: #888;
                font-size: .12rem;
                outline: none;
                text-indent: .08rem;
                line-height: .3rem;
            }
        }
    }
    .evaluate-foot{
        width: 100%;
        height: .55rem;
        .evaluate-foot-btn{
            display: block;
            width: 3.45rem;
            height: .39rem;
            font-size: .16rem;
            margin-left: .15rem;
            margin-top: .07rem;
            border-radius: .03rem;
            background: #ffcc00;
            color: #fff;
            text-align: center;
            line-height: .39rem;
        }
    }
</style>
