<template>
  <div class="payment">
      <div class="payment-head">
          <!-- <div class="payment-head-icon"></div> -->
          <router-link to="#" class="payment-head-icon"></router-link>
          支付订单</div>
      <div class="payment-details">
          <div class="details1">丰田凯美瑞 订单详情 <img src="./img/zhifufanhui-1@2x.png"></div>
          <div class="details2"><span>￥</span>520</div>
      </div>
      <div class="payment-list">
          <div class="payment-list1">
            <img src="./img/yue@2x.png" class="img1">
            <span>余额支付</span>
            <img src="./img/zhifuoption_off@2x.png" class="img2">
          </div>
          <div class="payment-list1 payment-list2">
            <img src="./img/weixinzhifu@2x.png" class="img1">
            <span>微信支付</span>
            <img src="./img/zhifuoption_off@2x.png" class="img2">
          </div>
          <div class="payment-list1">
            <img src="./img/zhifubaozhifu@2x.png" class="img1">
            <span>支付宝支付</span>
            <img src="./img/zhifuxuanzhong@2x.png" class="img2">
          </div>
      </div>
      <div class="payment-out">
          <div class="payment-out-place"></div>
          <div class="payment-out-btn">
              <!-- <div>确认支付</div> -->
              <router-link to="customer" class="payment-out-btn-div">确认支付</router-link>
          </div>
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
    .payment{
        .payment-head{
            height: .45rem;
            margin-top: .2rem;
            font-size: .16rem;
            text-align: center;
            line-height: .45rem;
            border-bottom: 1px solid #ccc;
            color: #222;
            .payment-head-icon{
                position: absolute;
                left: .15rem;
                top: .31rem;
                width: .22rem;
                height: .22rem;
                background: url('./img/fanhui@2x@2x.png') no-repeat;
                background-size: .12rem;
            }
        }
        .payment-details{
            height: 1.12rem;
            background: #f6f6f6;
            .details1{
                font-size: .14rem;
                margin-left: 1.2rem;
                line-height: .74rem;
                color: #888;
                position: relative;
                img{
                    position: absolute;
                    top: .13rem;
                }
            }
            .details2{
                font-size: .3rem;
                text-align: center;
                line-height: .01rem;
                span{
                    font-size: .2rem;
                }
            }
        }
        .payment-list{
            width: 100%;
            background: #f6f6f6;
            .payment-list1{
                width: 100%;
                height: .5rem;
                background: #fff;
                position:relative;
                .img1{
                    width: .24rem;
                    height: .24rem;
                    position: absolute;
                    top:.14rem;
                    left: .36rem;
                }
                span{
                    font-size: .14rem;
                    position: absolute;
                    top:.2rem;
                    left:.7rem;
                }
                .img2{
                    width: .14rem;
                    height: .14rem;
                    position: absolute;
                    top:.2rem;
                    right:.36rem;
                }
            }
        } 
        .payment-list2{
            margin: .1rem 0;
        }
        .payment-out{
            width: 100%;
            height: 3.2rem;
            background: #f6f6f6;
            position: relative;
            .payment-out-place{

            }
            .payment-out-btn{
                position:absolute;
                bottom: 0;
                width: 100%;
                height: .55rem;
                background: #fff;
                .payment-out-btn-div{
                    text-decoration: none;
                    display: block;
                    width: 3.45rem;
                    height: .39rem;
                    font-size: .16rem;
                    background: #ffcc00;
                    color: #fff;
                    text-align: center;
                    line-height: .39rem;
                    margin-left: .15rem;
                    margin-top: .08rem;
                }
            }
        }
    }
</style>
