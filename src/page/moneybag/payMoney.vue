<template>
  <div class="box">
    <!-- 头部 -->
    <mt-header title="充值支付" style="width:100%">
      <router-link to="/invest" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <section>
      <div class="top">
        <span>充值金额</span>
        <span class="num1">{{$store.state.num|num1}}</span>
      </div>
      <div class="center_content">
        <div class="in" v-for="(item,index) in payList" :key="index" @click="change(index)">
          <span>
            <img :src="item.img" alt />
          </span>
          <span v-text="item.text"></span>
          <span>
            <img :src="item.img2" alt v-if="item.vg" />
            <img :src="item.img1" alt v-else />
          </span>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <p class="footer_top">
          <span @click="confirm">

            <img src="./img/active.png" alt/>
          </span>
          <span>
            以仔细阅读并同意
            <a href="#">《平驾租车租赁协议及充值说明》</a>
          </span>
        </p>
      </div>
      <div class="bottom">
        <router-link to="/invest">
          <input type="button"  value="确认支付"/>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payList: [
        {
          img: require("./img/bankcard.png"),
          text: "银行卡支付",
          img1: require("./img/arc.png"),
          img2: require("./img/active.png"),
          vg: false
        },
        {
          img: require("./img/weixin.png"),
          text: "微信支付",
          img1: require("./img/arc.png"),
          img2: require("./img/active.png"),
          vg: false
        },
        {
          img: require("./img/pay.png"),
          text: "支付宝支付",
          img1: require("./img/arc.png"),
          img2: require("./img/active.png"),
          vg: false
        }
      ],
      right: true
    };
  },
  methods: {
    change(index) {
      this.payList.forEach(item => {
        item.vg = false;
      });
      this.payList[index].vg = true;
    },
    confirm(){
        // this.right = !this.right;
    }
  },
  components: {},
  mounted(){
    // console.log(this.payList[0].vg)
    this.payList[0].vg = true;
  },
  filters: {
    num1:function(num){
      return '￥'+num;
    }
  },
};
</script>

<style scoped lang='less'>
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  text-decoration: none;
  color: #222;
}
.box {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  .mint-header {
    background: #fff;
    margin-right: 0.05rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 0.44rem;
    /deep/.mint-header-title {
      color: #000;
      font-size: 0.16rem;
      letter-spacing: 5px;
    }
    .back {
      width: 0.13rem;
      height: 0.22rem;
    }
  }
  section {
    font-size: 0.12rem;
    // 上部
    .top {
      border-top: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.36rem 1.55rem;
      background: #fff;
      span:nth-child(1) {
        font-size: 0.12rem;
        transform: scale(0.8);
      }
      .num1 {
        margin-top: 0.1rem;
        font-size: 0.18rem;
        color: #000;
        font-weight: bold;
      }
    }
    .center_content {
      margin-top: 0.08rem;
      height: 1.57rem;
      .in {
        border-top: 1px solid #dfdfdf;
        background: #fff;
        padding: 0.14rem 0.36rem;
        display: inline-block;
        display: flex;
        align-items: center;
        &:nth-child(1) {
          border-top: none;
        }
        span {
          display: inline-block;
        }
        span:nth-child(1) {
          img {
            width: 0.24rem;
            height: 0.24rem;
          }
        }
        span:nth-child(2) {
          flex: 1;
          margin-left: 0.1rem;
        }
        span:nth-child(3) {
          img {
            width: 0.14rem;
            height: 0.14rem;
          }
        }
      }
    }
    .footer {
      width: 100%;
      .footer_top {
        display: flex;
        align-items: center;
        margin: 2.52rem 0.15rem 0.07rem 0.15rem;
        font-size: .12rem;
        color: #888;
        span:nth-child(1) {
          img {
            width: 0.13rem;
            height: 0.13rem;
          }
          margin-right: .06rem;
        }
        span:nth-child(2){
            a{
                color: #7bc7fa;
            }
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.55rem;
      background: #fff;
      padding: 0.08rem 0.15rem;
      display: flex;
      align-items: center;
      a {
        display: block;
        width: 100%;
        input {
          width: 100%;
          height: 0.39rem;
          background: #ffcc00;
          text-align: center;
          color: #fff;
          font-size: 0.16rem;
        }
      }
      .active{
          color:#ccc;
      }
    }
  }
}
</style>
