<template>
  <div class="box">
    <mt-header title="超值套餐" style="width:100%">
      <router-link to="/home/china" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <span>规则说明</span>
      </mt-button>
    </mt-header>
    <!-- 内容 -->
    <section>
      <div class="top">
        <router-link to>工作日/4天</router-link>
        <router-link to>周租/7-27天</router-link>
        <router-link to>月租/28+天</router-link>
      </div>
      <div class="center">
        <ul>
          <li>
            <div class="left">
              <img src="./img/up.png" alt/>
              <span @click="from" v-text="text"></span>
              <img src="./../img/xiala@2x.png" alt />
            </div>
            <div class="c_center">
              <span>郑州动物园自助点</span>
              <span>该门店仅支持自助还车</span>
            </div>
            <div class="right">
              <span id="door" :class="{door:flay1}" @click="flay1=!flay1">上门</span>
              <span id="store" :class="{store:!flay1}" @click="flay1=false">到店</span>
            </div>
          </li>
          <li>
            <div class="left">
             <img src="./img/down.png" alt />
              <span @click="to" v-text="text1"></span>
              <img src="./../img/xiala@2x.png" alt />
            </div>
            <div class="c_center">
              <span>郑州动物园自助点</span>
              <span>该门店仅支持自助还车</span>
            </div>
            <div class="right">
              <span id="door" :class="{door:flay2}" @click="flay2=!flay2">上门</span>
              <span id="store" :class="{store:!flay2}" @click="flay2=false">到店</span>
            </div>
          </li>
        </ul>
      </div>
      <Wtime></Wtime>
      <div class="btn">
        <button>立即选车</button>
      </div>
    </section>
  </div>
</template>

<script>
import Wtime from "./../child/time";
export default {
  data() {
    return {
      text: "郑州",
      text1: "郑州",
      flay2: true,
      flay1: true,
    };
  },
  methods: {
    from() {
      this.$store.commit("addcity", "city1");
      this.$router.push("/city");
    },
    to() {
      this.$store.commit("addcity", "city2");
      this.$router.push("/city");
    }
  },
  components: { Wtime },
  mounted() {
    if (this.$store.state.city1 !== "") {
      this.text = this.$store.state.city1;
    }
    if (this.$store.state.city2 !== "") {
      this.text1 = this.$store.state.city2;
    }
  },
};
</script>

<style scoped lang='less'>
.box {
  width: 100%;
  height: 100%;
  // 头部
  .mint-header {
    padding-left: 0.15rem;
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
    /deep/.mint-button-text {
      color: #666;
      transform: scale(0.8);
      font-size: 0.12rem;
    }
  }
  section {
    .top {
      font-size: 0.13rem;
      color: #444;
      display: flex;
      background: #fff;
      a {
        display: inline-block;
        padding: 0.1rem 0.25rem;
        &:nth-child(1) {
          color: #ffcc00;
        }
      }
    }

    .center {
      margin-top: 0.08rem;
      background: #fff;
      ul {
        padding: 0 0.16rem;
        li {
          display: flex;
          align-items: center;
          font-size: 0.13rem;
          padding: 0.16rem 0;
          border-bottom: 1px solid #dfdfdf;
          .left {
            display: flex;
            align-items: center;
            span {
              margin-right: 0.1rem;
            }
            img {
              width: 0.12rem;
              height: 0.12rem;
              margin-right: 0.1rem;
            }
          }
          .c_center {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 0.1rem;
            span:nth-child(1) {
              font-size: 0.14rem;
              color: #222;
            }
            span:nth-child(2) {
              display: inline-block;
              background: #ffcc00;
              width: 1.3rem;
              height: 0.18rem;
              font-size: 0.12rem;
              padding: 0 0.01rem;
              transform: scale(0.7);
              color: #fff;
              text-align: center;
              border-radius: 0.5rem;
              margin-left: -0.19rem;
            }
          }
          .right {
            font-size: 0.12rem;
            width: 0.76rem;
            height: 100%;
            background: #efefef;
            display: flex;
            border-radius: 0.5rem;
            #door {
              display: inline-block;
              width: 0.38rem;
              color: #666;
              border-radius: 0.5rem;
              text-align: center;
              // margin-right:-.11rem;
            }
            #store {
              display: inline-block;
              width: 0.38rem;
              color: #666;
              border-radius: 0.5rem;
              text-align: center;
            }
          }
          .door {
              background: #ffcc00;
              color: #fff !important;
            }
            .store {
              background: #ffcc00;
              color: #fff !important;
            }
        }
      }
    }
    .btn {
      font-size: 0;
      background: #fff;
      display: flex;
      align-items: center;
      button {
        width: 3.45rem;
        height: 0.4rem;
        margin: 0.1rem auto;
        background: #ffcc00;
        color: #fff;
        font-size: 0.16rem;
        line-height: 0.4rem;
        text-align: center;
      }
    }
  }
}
</style>
