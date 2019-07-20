<template>
  <div class="evaluatedetails">
    <div class="common_head">
      <router-link to="#" class="common_head_icon"></router-link>
      评价详情
    </div>
    <div class="evaluatedetails-hao">
        <p><span class="phone">139*******9</span> <img src="./img/huiyanka-huangjin@2x.png"> <span class="vip">黄金会员</span><span class="time">今天 08:35</span></p>
        <div class="city">同城异地</div>
    </div>
    <div class="evaluatedetails-section">
        <span>综合评价</span> <van-rate v-model="value1" />
        <span>服务态度</span> <van-rate v-model="value2" />
        <span>手续办理</span> <van-rate v-model="value3" />
        <span>车辆情况</span> <van-rate v-model="value4" />
    </div>
    <div class="evaluatedetails-text">
      <div class="text">越来越便利，车况非常好，手续简单，租还方便</div>
      <div class="place"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:4,
      value2:5,
      value3:5,
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
    .evaluatedetails{
        .common_head{
          background-color: #fff;
            height: .45rem;
            font-size: .16rem;
            text-align: center;
            line-height: .45rem;
            color: #222;
            position: relative;
            border-bottom: 1px solid #dfdfdf;
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
        .evaluatedetails-hao{
          background-color: #fff;
          height: .5rem;
            p{
              display: flex;
              align-items: baseline;
              padding-top: .12rem;
              padding-bottom: .05rem;
              padding-right: .16rem;
                font-size:.12rem;
                overflow: hidden;
                .phone{
                  font-size: .14rem;
                  float: left;
                  margin-left: .15rem;
                  color: #222;
                }
                img{
                  width: .22rem;
                  height: .12rem;
                  margin-left: .06rem;
                }
                .vip{
                  margin-left: .04rem;
                  color: #ffcc00;
                }
                .time{
                  // float: right;
                  // margin-right: .16rem;
                  // color: #888;
                  flex: 1;
                  text-align: right;
                }
            }
            .city{
              width: .48rem;
              height: .18rem;
              background: #FDF2C4;
              font-size:.12rem;
              color: #444;
              margin-left: .15rem;
              text-align: center;
              // line-height: .18rem;
            }
        }
        .evaluatedetails-section{
          background-color: #fff;
            font-size: .14rem;
            padding: .05rem 0 .15rem .15rem;
            // margin-left: .15rem;
            // margin-top: .05rem;
            overflow: hidden;
            span{
                float: left;
                margin-top: .06rem;
            }
            .van-rate{
                margin-left: .75rem;
                margin-top: .06rem;
            }
            .van-rate__item{
              margin-right: .12rem;
            }
        } 
        .evaluatedetails-text{
          // margin-top: .15rem;
          border-top: 1px solid #dfdfdf;
          .text{
            font-size: .12rem;
            height: .52rem;
            background: #fff;
            line-height: .52rem;
            text-indent: .15rem;
          }
          .place{
            height: 3.65rem;
            background: #f6f6f6;
          }
        } 
    }
</style>
