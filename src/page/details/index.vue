<template>
  <div class="top">
    <mt-header title="订单详情" class="hand">
      <router-link to="erji" slot="left">
        <mt-button class="button">
          <img class="left" src="./img/fanhui@2x.png" alt />
        </mt-button>
      </router-link>
      <mt-button class="button" slot="right">
        <img class="right" src="./img/gengduo@2x.png" alt id="show" @click="show1=!show1" />
      </mt-button>
    </mt-header>
    <div class="box">
      <mt-header class="hand2">
        <router-link to="/" slot="left">
          <mt-button>
            <span class="hao">订单号：15623758043654</span>
          </mt-button>
        </router-link>
        <mt-button slot="right" class="gong">预定成功</mt-button>
      </mt-header>
      <div class="car">
        <img :src="$store.state.alldata.carinfo.img" alt />
        <ul>
          <li>{{$store.state.alldata.carinfo.p1}}</li>
          <li>{{$store.state.alldata.carinfo.p2}}</li>
          <li>
            <router-link to>{{$store.state.alldata.affirm_orderss}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="time">
      <span>
        {{$store.state.alldata.starTime.tostarM}}月{{$store.state.alldata.starTime.tostarD}}日
        <br />
        <span>{{$store.state.alldata.starTime.tostarW}}{{$store.state.alldata.starTime.tostarH}}:00</span>
      </span>
      <span id="a2">
        {{days}}天
        <br />
        <img src="./img/jiantou@2x.png" alt />
      </span>
      <span>
        {{$store.state.alldata.endTime.toendM}}月{{$store.state.alldata.endTime.toendD}}日
        <br />
        <span>{{$store.state.alldata.endTime.toendW}}{{$store.state.alldata.endTime.toendH}}:00</span>
      </span>
    </div>
    <div class="black">
      <p>
        <img src="./img/anniu1-2@2x.png" alt /> 郑州
        <br />
        <span>{{$store.state.homedata.to}}</span>
      </p>
      <p>
        |
        <span>门店详情</span>
      </p>
    </div>
    <div class="black yellow">
      <p>
        <img src="./img/anniu2-2@2x.png" alt /> 郑州
        <br />
        <span>{{$store.state.homedata.from}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
        <span id="skyblue">修改</span>
      </p>
      <p>
        |
        <span>门店详情</span>
      </p>
    </div>
    <div class="zheng">
      <ul>
        <li>
          <img src="./img/jiashizheng@2x.png" alt />
          <br />
          <span>身份证</span>
        </li>
        <li>
          <img src="./img/shenfenzheng@2x.png" alt />
          <br />
          <span>驾驶证</span>
        </li>
        <li>
          <img src="./img/xinyongka@2x.png" alt />
          <br />
          <span>信用卡</span>
        </li>
        <li>
          <img src="./img/rili@2x.png" alt />
          <br />
          <span>证件有效期</span>
        </li>
      </ul>
    </div>
    <div class="lie">
      <ul>
        <li>
          <span>车辆租赁及服务费</span>
          <span>{{price}}x{{days}}</span>
          <span>{{data.insurance}}元</span>
        </li>
        <li>
          <span>基础服务费</span>
          <span>{{prices.royalty}}x{{days}}</span>
          <span>{{data.royalty}}元</span>
        </li>
        <li>
          <span>其他费用</span>
          <span></span>
        </li>
        <li class="li1">
          <span>.车辆整备费</span>
          <span></span>
          <span>20元</span>
        </li>
        <li class="li1" id="li1">
          <span>.尊享服务费</span>
          <span>{{prices.oilCost}}x{{days}}</span>
          <span>{{data.oilCost}}元</span>
        </li>
      </ul>
      <p id="p">
        <span>租金合计</span>
        <span>{{sum}}元</span>
      </p>
    </div>
    <div class="foot">
      <p>车辆正在准备中，完成支付可节省取车时间</p>
      <router-link to="/Payment">
        <button>订单支付</button>
      </router-link>
      <p></p>
    </div>

    <div id="hide" v-show="show1" @click="show1=!show1">
      <div class="clear">
        <router-link to="/details">
          <p id="zi">取消订单</p>
        </router-link>
        <div class="small">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  showEagleMap: true,

  components: {},
  data() {
    /*定义data property的地方*/
    return {
      show: false,
      show1: false,
      days: this.$store.state.alldata.dayX,
      //基本费用单价
      prices: { royalty: 50, oilCost: 50 },
      //基本费用最右一栏
      data: {
        insurance: 0,
        royalty: 0,
        charge: 20,
        oilCost: 0,
        money: 0
      }
    };
  } /*end of data()*/,
  methods: {
    toolEventSlot() {
      this.showEagleMap = !this.showEagleMap;
    }
  },
  computed: {
    sum() {
      let add = this.$store.state.affirm_order;
      this.data.insurance = this.price * this.days;
      this.data.royalty = this.prices.royalty * this.days;
      this.data.oilCost = this.prices.oilCost * this.days;
      if (!add) {
        this.data.cap_prhe = Number(
          this.data.insurance +
            this.data.royalty +
            this.data.charge +
            this.data.oilCost
        );
      } else {
        this.data.cap_prhe = Number(
          this.data.insurance + this.data.royalty + this.data.charge
        );
      }
      return this.data.cap_prhe;
    },
    price() {
      let pr = this.$store.state.alldata.carinfo.span;
      if (pr != undefined) {
        return pr.slice(0, pr.length-1);
      }
    }
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #fff;
}
.hand {
  background-color: white;
  color: black;
  height: 0.33rem;
  font-size: 0.15rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 0.01rem solid #cccccc;
}
.right {
  width: 0.26rem;
  /* padding-top: .39rem; */
  height: 0.06rem;
}
.left {
  width: 0.13rem;
  height: 0.22rem;
  /* padding-top: .31rem; */
}
button {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
}
.hand2 {
  background-color: white;
  color: black;
  font-size: 0.15rem;
  border-bottom: 0.01rem solid #cccccc;
}
.hao {
  font-size: 0.12rem;
  color: #888888;
  /* padding-top: .03rem;
        padding-bottom: .03rem; */
}
.gong {
  font-size: 0.13rem;
  color: #ffcc00;
}
.car {
  font-size: 0;
  border-bottom: 0.08rem solid #f6f6f6;
  background: white;
}
.car > img {
  display: inline-block;
  width: 0.9rem;
  height: 0.62rem;
  /* padding-top: .04rem; */
  vertical-align: top;
  padding-top: 0.13rem;
  margin-left: 0.18rem;
}
.car > ul {
  display: inline-block;
  font-size: 0.15rem;
  list-style: none;
  margin-left: 0.32rem;
  padding-bottom: 0.06rem;
}

.car > ul > li:nth-child(1) {
  font-size: 0.14rem;
  padding-top: 0.1rem;
}
.car > ul > li:nth-child(2) {
  font-size: 0.11rem;
  color: #cccccc;
  padding-top: 0.1rem;
}

.car > ul > li:nth-child(3) {
  width: 0.87rem;
  height: 0.23rem;
  border: 0.01rem solid #00ffdd;

  font-size: 0.1rem;
  margin-top: 0.1rem;
  text-align: center;
  line-height: 0.23rem;
}
.car > ul > li:nth-child(3) > a {
  text-decoration: none;
  color: #00ffdd;
}
.time {
  font-size: 0;
  border-bottom: 1px solid #dfdfdf;
  background: white;

}
.time > span {
  font-size: 0.12rem;
  display: inline-block;
  width: 0.59rem;
  height: 0.34rem;
}
.time > span:nth-child(1) {
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.time > span:nth-child(2) {
  padding-left: 0.6rem;
  width: 1.68rem;

  color: #ffcc00;
  text-align: center;
}
.time > span > img {
  width: 0.88rem;
}
.time > span:nth-child(3) {
  float: right;
  margin-right: 0.08rem;
  margin-top: 0.1rem;
}
.time > span > span {
  font-size: 0.08rem;
  color: #cccccc;
}
.black {
  font-size: 0;
  background: white;

}
.yellow {
  border-bottom: 1px solid #dfdfdf;
}
.black > p {
  font-size: 0.12rem;
  display: inline-block;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.black > p:nth-child(2) {
  float: right;
  margin-right: 0.15rem;
  margin-top: 0.1rem;
  font-size: 0.12rem;
  padding-bottom: 0.1rem;
}
.black > p > img {
  width: 0.12rem;
  height: 0.12rem;
  display: inline-block;
  margin-left: 0.15rem;
}
.black > p > span {
  font-size: 0.1rem;
}
.black > p:nth-child(1) > span {
  margin-left: 0.33rem;
  color: #888888;
}
#skyblue {
  color: #00ffdd;
  margin-left: 0;
}
.zheng {
  background: white;
  font-size: 0;
  border-bottom: 0.08rem solid #f6f6f6;
}
.zheng > ul {
  list-style: none;
}
.zheng > ul > li {
  font-size: 0.1rem;
  text-align: center;
  color: #888888;
  display: inline-block;
}
.zheng > ul > li > img {
  width: 0.24rem;
  margin: 0 auto;
  height: 0.18rem;
}
.zheng > ul > li {
  width: 0.92rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.lie {
  background: white;
  font-size: 0;
}
.lie > ul {
  list-style: none;
  border-bottom: 0.01rem solid #cccccc;
}
.lie > ul > li {
  font-size: 0.12rem;
  color: black;
  margin-left: 0.15rem;
  padding-top: 0.1rem;
}
.lie > ul > li > span:nth-child(3) {
  float: right;
  margin-right: 0.15rem;
}
.lie > ul > .li1 {
  color: #666666;
  font-size: 0.11rem;
}
.lie > ul > li:nth-child(1) > span:nth-child(2) {
  margin-left: 1.3rem;
}
.lie > ul > li:nth-child(2) > span:nth-child(2) {
  margin-left: 1.68rem;
}
.lie > ul > li:nth-child(5) > span:nth-child(2) {
  margin-left: 1.7rem;
}
#li1 {
  padding-bottom: 0.1rem;
}
.lie > p {
  font-size: 0.12rem;
  padding-left: 0.15rem;
}
.lie > p > span {
  float: left;
  padding-top: 0.08rem;
  padding-bottom: 0.08rem;
}
.lie > p > span:last-child {
  float: right;
  margin-right: 0.15rem;
}
#p {
  height: 0.3rem;
  border-bottom: 0.08rem solid #f6f6f6;
}
.foot {
  font-size: 0.16rem;
  text-align: center;
}
.foot > p {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.11rem;
  color: #888888;
}
.foot > p:last-child {
  height: 0.1rem;
}
.foot > a > button {
  background: #ffcc00;
  color: white;
  width: 3.45rem;
  height: 0.39rem;
  border-radius: 0.05rem;
  border: 0;
}
.clear {
  width: 1.16rem;
  height: 0.37rem;
  float: right;
  position: absolute;
  font-size: 0;
  top: 0.34rem;
  right: 0.01rem;
  color: black;
  text-align: center;
  line-height: 0.37rem;
  /* background: #FFFFFF; */
  background: #ffffff;
  border-radius: 0.03rem;
  z-index: 100;
  /* background: url("./img/quxiaodingdankuang2@2x.png"); */
  /* background-size: 100%; */
}
.clear > a {
  font-size: 0.1rem;
  text-decoration: none;
  color: black;
}
#hide #zi {
  color: black;
}
.small {
  width: 0;
  height: 0;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #ffffff;
  position: absolute;
  top: -0.1rem;
  right: 0.2rem;
}
#hide {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(102, 102, 102, 0.3);
  /* display: none; */
}
</style>