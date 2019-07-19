<template>
  <div class="success">
      <img src="./img/xuanzhong@2x.png" alt="">
      <div class="success-placeorder">下单成功</div>
      <div class="success-order_no">订单号：15623758043654</div>
      <div class="success-text">芝麻信用700分且通过综合评估，可免车辆和违章押金</div>
      <!-- <div class="success-btn1">芝麻信用授权</div>
      <div class="success-btn2">查看订单</div> -->
      <router-link class="success-btn1" to="">芝麻信用授权</router-link>
      <router-link class="success-btn2" to="/data">查看订单</router-link>
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
    .success{
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        padding-top: .8rem;
        background: #f6f6f6;
        img{
            display: block;
            width: .6rem;
            height: .6rem;
            margin: 0 auto;
            // margin-top: 1.05rem;
            border-radius: 50%;
        }
        .success-placeorder{
            width: .64rem;
            font-size: .16rem;
            margin: .28rem auto;
            color: #222;
            background: #f6f6f6;
        }
        .success-order_no{
            margin: 0 auto;
            margin-top: .9rem;
            width: 1.49rem;
            font-size: .12rem;
            color: #888;
            background: #f6f6f6;
        }
        .success-text{
            width: 100%;
            font-size: .13rem;
            margin-top: .28rem;
            margin-left: .15rem;
            color: #FFCC00;
            background: #f6f6f6;
        }
        .success-btn1{           
            display: block;
            text-decoration: none;
            width: 3.45rem;
            height: .39rem;
            font-size: .16rem;
            background: #FFCC00;
            color: #fff;
            text-align: center;
            line-height: .39rem;
            border-radius: .03rem;
            margin: 0 auto;
            margin-top: .23rem;
        }
        .success-btn2{
            display: block;
            text-decoration: none;
            width: 3.45rem;
            height: .39rem;
            font-size: .16rem;
            background: #fff;
            color: #444;
            text-align: center;
            line-height: .39rem;
            border-radius: .03rem;
            margin: 0 auto;
            margin-top: .24rem;
            border: 1px solid #bfbfbf;
            margin-bottom: 1.75rem;
        }
    }
</style>
