<template>
  <div class="payment">
      <div class="payment-head">
          <!-- <div class="payment-head-icon"></div> -->
          <router-link to="/data" class="payment-head-icon"></router-link>
          支付订单</div>
      <div class="payment-details">
          <div class="details1">{{$store.state.alldata.carinfo.p1}} <img src="./img/zhifufanhui-1@2x.png"></div>
          <div class="details2"><span>￥</span>{{$store.state.alldata.affsum}}</div>
      </div>
      <div class="payment-list">
          <div class="payment-list1" @click="fn1()">
            <img src="./img/yue@2x.png" class="img1">
            <span>余额支付</span>
            <img src="./img/zhifuoption_off@2x.png" class="img2">
            <img src="./img/zhifuxuanzhong@2x.png" class="img2" v-show="show">
          </div>
          <div class="payment-list1 payment-list2" @click="fn2()">
            <img src="./img/weixinzhifu@2x.png" class="img1">
            <span>微信支付</span>
            <img src="./img/zhifuoption_off@2x.png" class="img2">
            <img src="./img/zhifuxuanzhong@2x.png" class="img2" v-show="show1">
          </div>
          <div class="payment-list1" @click="fn3()">
            <img src="./img/zhifubaozhifu@2x.png" class="img1">
            <span>支付宝支付</span>
            <img src="./img/zhifuoption_off@2x.png" class="img2">
            <img src="./img/zhifuxuanzhong@2x.png" class="img2" v-show="show2">
          </div>
      </div>
      <div class="payment-out">
          <!-- <div class="payment-out-place"></div> -->
          <div class="payment-out-btn">
              <!-- <div>确认支付</div> -->
              <router-link to="" class="payment-out-btn-div">确认支付</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        show:false,
        show1:false,
        show2:true
    }
  },
  methods: {
      fn1(){
          this.show = true;
          this.show1 = false;
          this.show2 = false;
      },
      fn2(){
          this.show = false;
          this.show1 = true;
          this.show2 = false;
      },
      fn3(){
          this.show = false;
          this.show1 = false;
          this.show2 = true;
      },
  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .payment{
        .payment-head{
            height: .45rem;
            // margin-top: .2rem;
            font-size: .16rem;
            text-align: center;
            line-height: .45rem;
            border-bottom: 1px solid #ccc;
            color: #222;
            .payment-head-icon{
                position: absolute;
                left: .15rem;
                top: .11rem;
                width: .22rem;
                height: .22rem;
                background: url('./img/fanhui@2x@2x.png') no-repeat;
                background-size: .12rem;
            }
        }
        .payment-details{
            height: 1.12rem;
            background: #f6f6f6;
            display: flex;
            flex-direction: column;
            .details1{
                flex: 1;
                font-size: .14rem;
                line-height: .74rem;
                color: #888;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    // position: absolute;
                    // top: .13rem;
                    display: inline-block;
                    width: .35rem;
                    height: .35rem;
                }
            }
            .details2{
                flex: 1;
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
            height: 2.83rem;
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
