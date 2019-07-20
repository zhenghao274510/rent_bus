<template>
  <!-- 充值 -->
  <div class="box">
    <mt-header fixed title="充值" style="width:100%">
      <router-link to="/lost" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <section :class="show?'a':''">
      <div class="top">
        <span>当前余额(平驾币)</span>
        <span class="num1" v-text="nus"></span>
      </div>
      <div class="center">
        <p>请选择充值金额</p>
        <ul class="cnenter_list">
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="item.show?'':'active'"
            @click="change(index)"
          >
            <span v-text="$options.filters.change(item.num1,index)"></span>
            <span v-text="item.text1"></span>
            <span v-text="item.text2"></span>
          </li>
        </ul>
        <van-field
          readonly
          :value="value"
          placeholder="自定义金额"
          @touchstart.native.stop="show = true"
          @focus="dele"
          class="aa"
        />
        <van-number-keyboard
          close-button-text="完成"
          v-model="value"
          :show="show"
          :maxlength="6"
          @blur="show = false"
        />
      </div>
      <div class="recommd">
        <h3>温馨提示</h3>
        <p>1.兑换比例：1元=1积分=1平驾币</p>
        <p>2.每单最高可使用积分冲抵40%的租车费用</p>
        <p></p>
      </div>
      <div class="bottom">
        <router-link to="/pay">
          <input
            type="button"
            value="立即充值"
            :class="active?'active':''"
            @click="next"
            :disabled="active"
          />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: true,
      value: "",
      nus: "2030",
      list: [
        {
          num1: "1000",
          text1: "充值1000元平驾币赠送100积分",
          num2: 100,
          text2: "赠100元",
          show: true
        },
        {
          num1: "2000",
          text1: "充值2000元平驾币赠送300积分",
          num2: 300,
          text2: "赠300元",
          show: true
        },
        {
          num1: "3000",
          text1: "充值3000元平驾币赠送500积分",
          num2: 500,
          text2: "赠500元",
          show: true
        },
        {
          num1: "5000",
          text1: "充值5000元平驾币赠送800积分",
          num2: 800,
          text2: "赠800元",
          show: true
        },
        {
          num1: "8000",
          text1: "充值8000元平驾币赠送1000积分",
          num2: 1000,
          text2: "赠1000元",
          show: true
        },
        {
          num1: "10000",
          text1: "充值10000元平驾币赠送1200积分",
          num2: 1200,
          text2: "赠1200元",
          show: true
        }
      ]
    };
  },
  methods: {
    change(num) {
      this.active = false;
      if (this.value === "") {
        this.list.forEach(item => {
          item.show = true;
        });
        this.list[num].show = false;
      }
      this.$store.commit("add", this.list[num].num1);
      this.$store.commit("addscore", this.list[num].num2);
    },
    dele() {
      // this.active = false;
      this.list.forEach(item => {
        item.show = true;
      });
    },
    next() {
      if (this.value === "") {
        this.list.forEach(item => {});
      } else {
        this.$store.commit("add2", this.value);
      }
    }
  },
  components: {},
  filters: {
    change(val) {
      return val + "元";
    }
  },
  mounted() {
    if (this.value != "") {
      this.list.forEach(item => {
        item.list = false;
      });
    }
    let fill = document.getElementsByClassName("van-number-keyboard__close")[0];
    fill.onclick = () => {
      this.active = false;
    };
    if (this.value !== "") {
      this.active = false;
    }
  }
};
</script>

<style scoped lang='less'>
.box {
  width: 100%;
  // height: 100%;
  background: #f6f6f6;
  // 头部
  .mint-header {
    background: #fff;
    margin-right: 0.05rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 0.44rem;
    border-bottom: 1px solid #dfdfdf;
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
  // 内容
  .a {
    margin-top: -2rem;
  }
  section {
    position: fixed;
    width: 100%;
    margin-top: 0.4rem;
    font-size: 0.13rem;
    //   上部
    .top {
      // border-top: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.24rem 0;
      background: #fff;
      .num1 {
        margin-top: 0.1rem;
        font-size: 0.19rem;
        color: #ffcc00;
      }
    }
    //中部
    .center {
      font-family: pingfang;
      margin-top: 0.09rem;
      width: 100%;
      background: #fff;
      position: relative;
      p {
        font-size: 0.13rem;
        padding: 0.16rem 0;
        text-align: center;
      }
      .cnenter_list {
        padding: 0 0.15rem;
        li {
          float: left;
          width: 1.66rem;
          height: 0.69rem;
          display: flex;
          flex-direction: column;
          padding: 0.17rem 0 0.17rem 0.13rem;
          border: 1px solid #dfdfdf;
          border-radius: 0.05rem;
          position: relative;
          margin-right: 0.13rem;
          margin-bottom: 0.14rem;
          span:nth-child(1) {
            font-size: 0.15rem;
            color: #222222;
            height: 0.15rem;
          }
          span:nth-child(2) {
            margin: 0.1rem 0 0 -0.185rem;
            font-size: 0.12rem;
            white-space: nowrap;
            transform: scale(0.8);
            color: #666666;
          }
          span:nth-child(3) {
            display: inline-block;
            font-size: 0.12rem;
            transform: scale(0.8);
            color: #fff;
            width: 0.68rem;
            height: 0.19rem;
            position: absolute;
            text-indent: 0.15rem;
            top: -0.03rem;
            right: -0.08rem;
            background: url("./img/pic.png") no-repeat;
            background-size: 100%;
          }
        }
        li:nth-child(2n) {
          margin-right: 0;
        }
        .active {
          border: 1px solid #ffcc00;
          span:nth-child(1) {
            color: #ffcc00;
          }
          span:nth-child(2) {
            color: #ffcc00;
          }
        }
      }
      /deep/.van-cell {
        padding: 0 0.15rem;
      }
      /deep/.van-cell__value--alone {
        border: 1px solid #ccc;
        padding: none;
        .van-field__control {
          font-size: 0.13rem;
          text-align: center;
        }
      }
    }
    .recommd {
      padding: 0.16rem 0.15rem;
      font-size: 0.12rem;
      height: 0.95rem;
      color: #888;
      background: #fff;
      h3 {
        color: #666;
      }
      p:nth-child(2) {
        margin: 0.16rem 0 0.13rem 0;
      }
    }
    //底部
    .bottom {
      //  position: absolute;
      //  bottom: 0;
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
      .active {
        color: #ccc;
      }
    }
  }
}
</style>
