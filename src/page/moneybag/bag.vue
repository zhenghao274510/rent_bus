<template>
  <div class="box">
    <!-- 头部 -->
    <mt-header title="我的钱包" style="width:100%">
      <router-link to="/" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <img src="./img/more.png" alt class="more" />
      </mt-button>
    </mt-header>
    <section>
      <div class="bag_content">
        <div class="inner" v-for="(item,index) in bags" :key="index">
          <span>
            <img :src="item.img" alt />
          </span>
          <div class="in">
            <span v-text="item.text"></span>
            <span v-text="item.text1"></span>
          </div>
          <router-link class="next" :to="item.To">
            <span v-text="item.text2"></span>
            <img :src="item.img2" alt />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bags: [
        {
          img: require("./img/moeny2.png"),
          text: "余额",
          img2: require("./img/enter.png"),
          To: "/lost"
        },
        {
          img: require("./img/moeny.png"),
          text: "优惠券",
          img2: require("./img/enter.png"),
          To: "/city"
        },
        {
          img: require("./img/bank.png"),
          text: "银行卡",
          text2: "未绑定",
          img2: require("./img/enter.png"),
          To: "/city"
        },
        {
          img: require("./img/score.png"),
          text: "可用积分",
          img2: require("./img/enter.png"),
          To: "/city"
        },
        {
          img: require("./img/card.png"),
          text: "储值卡",
          text1: "仅针对租车",
          img2: require("./img/enter.png"),
          To: "/city"
        }
      ]
    };
  },
  methods: {},
  components: {

  }
};
</script>

<style scoped lang='less'>
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  text-decoration: none;
}
.box {
  //头部
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
    // 更多
    .more {
      width: 0.25rem;
      height: 0.06rem;
    }
  }
  //内容
  section {
    background: #fff;
    font-size: 0.13rem;
    .bag_content {
      width: 100%;
      .inner {
        widows: 100%;
        display: flex;
        align-items: center;
        padding: 0.11rem 0.15rem;
        border-top: 1px solid #dfdfdf;
        span:nth-child(1) {
          img {
            width: 0.23rem;
            height: 0.23rem;
          }
        }
        .in {
          font-size: 0.13rem;
          margin-left: 0.21rem;
          flex: 1;
          color: #444444;
          display: flex;
          align-items: center;
          span:nth-child(2) {
            display: block;
            font-size: 0.12rem;
            margin-left: 0.16rem;
            transform: scale(0.85);
            color: #666666;
          }
        }
        .next {
          display: flex;
          align-items: center;
          span {
            font-size: 0.12rem;
            transform: scale(0.85);
            margin-right: 0.1rem;
            color: #666666;
          }
          img {
            width: 0.08rem;
            height: 0.13rem;
          }
        }
      }
    }
  }
}
</style>
