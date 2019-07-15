<template>
  <div class="affirm_order">
    <!-- 头部 -->
    <mt-header title="确认订单" class="header">
      <router-link to="/" slot="left">
        <img src="./img/fanhui@2x.png" />
      </router-link>
    </mt-header>
    <!-- 车型 -->
    <div class="vehicle_model">
      <img slot="icon" src="./img/61-1@2x.png" width="24" height="24" />
      <div class="car_name">
        <span class="car_names">丰田凯瑞美</span>
        <br />
        <span class="car_cfig">三箱5座&nbsp;|&nbsp;2.0T自动</span>
      </div>
    </div>
    <!-- 车地图 -->
    <ul class="car_map">
      <li>
        <a href="javaScript:;">
          <div class="img">
            <img src="./img/yuandian1@2x.png" />
          </div>

          <div class="car_site">
            <p>郑州郑州花园路店</p>
            <span>07月07日（周日）10:00</span>
          </div>
          <p>到店取车</p>
        </a>
      </li>
      <li>
        <a href="javaScript:;">
          <div class="img">
            <img src="./img/yuandian1@2x.png" />
          </div>
          <div class="car_site">
            <p>郑州郑州花园路店</p>
            <span>07月07日（周日）10:00</span>
          </div>
          <p>到店取车</p>
        </a>
      </li>
    </ul>
    <!-- 基本费用 -->
    <div class="capital_cost">
      <p class="cap_tit">基本费用</p>
      <ul class="cap_detal">
        <li>
          <p>车辆租赁及服务费</p>
          <span class="cap_num">150x2</span>
          <span class="cap_price">{{data[0].cap_price}}元</span>
        </li>
        <li>
          <p>
            基础服务费
            <img src="./img/wenhao@2x.png" class="question" @click="basic_service" />
          </p>
          <Basicservice v-show="$store.state.basic_service"></Basicservice>
          <span class="cap_num">50x2</span>
          <span class="cap_price">100元</span>
        </li>
        <li>
          <p>车辆整备费</p>
          <span class="cap_num"></span>
          <span class="cap_price">20元</span>
        </li>
        <li>
          <p class="choss">选择服务</p>
          <span class="butt">
            <AffirmBut></AffirmBut>
          </span>
        </li>
        <li :class="{img_displays:$store.state.affirm_order}">
          <p>
            尊享服务
            <img src="./img/wenhao@2x.png" class="question" @click="enjoyable_service" />
          </p>
          <Enjoyable v-show="$store.state.enjoyable_service"></Enjoyable>
          <span class="cap_num">50x2</span>
          <span class="cap_price">100元</span>
        </li>
      </ul>
      <div class="rent">
        <p>租金合计</p>
        <span>520元</span>
      </div>
    </div>
    <!-- 违约金 -->
    <div class="penal_sum">
      <div>
        <p>车辆+违章押金</p>
        <img src="./img/wenhao@2x.png" />
        <span>芝麻信用700分且通过综合评估</span>
      </div>
      <ul class="penal_payment">
        <li v-for="(item,i) in arr" :key="i">
          <a href="javaScript:;" :class="{a:true,active:i==index}" @click="tag(i)">
            <img src="./img/duihao@2x.png" v-show="i==index?true:false" />
            <img src="./img/option_off@2x.png" v-show="i==index?false:true" />
            <span>{{item}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 取车须知 -->
    <div class="car_information">
      <p>取车须知</p>
      <div>
        <img src="./img/fanhui-2@2x.png" />
      </div>
    </div>
    <!-- 协议 -->
    <div class="protocol">
      <div>
        <img src="./img/querenxuanzhong@2x.png" />
      </div>
      <p>
        已仔细阅读并同意
        <span>《订单说明及退订规则》</span>
      </p>
    </div>
    <!-- 确认订单 -->
    <div class="confirm_order">
      <router-link to='/'>
        <div class="suer_con">
          <p>确认订单</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import AffirmBut from "./affirm_order_butt";
import Basicservice from "./basic_service";
import Enjoyable from "./enjoyable_service";
export default {
  data() {
    return {
      index: 1,
      arr: ["去绑卡免押金", "芝麻信用免押金", "支付押金"],
      data:[
        {
          'cap_price':'300'
        }
      ]
    };
  },
  methods: {
    //选择服务
    tag(num) {
      this.index = num;
    },
    //基础服务
    basic_service() {
      this.$store.commit("basic_service");
    },
    //尊享服务
    enjoyable_service() {
      this.$store.commit("enjoyable_service");
    }
  },
  components: {
    AffirmBut,
    Basicservice,
    Enjoyable
  }
};
</script>
<style scoped lang='less'>
.affirm_order {
  font-size: 0.12rem;
  background: #f6f6f6;
  padding-bottom: 0.2rem;
  .header {
    background: #fff;
    color: #222;
    border-bottom: 1px solid #dfdfdf;
    font-size: 0.16rem;
    height: 0.44rem;
    padding: 0 0.15rem;
    img {
      width: 0.13rem;
      height: 0.22rem;
    }
  }
  .vehicle_model {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    img {
      width: 0.91rem;
      height: 0.53rem;
      margin: 0.06rem 0.18rem;
    }
    .car_name {
      flex: 2;
      .car_names {
        font-size: 0.14rem;
      }
      .car_cfig {
        color: #888;
        margin-top: 0.07rem;
        display: block;
      }
    }
  }
  //车地图
  .car_map {
    background: #fff;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0 0.15rem 0.1rem;
    margin-bottom: 0.08rem;
    li {
      padding-top: 0.06rem;
      a {
        display: flex;
        .img {
          width: 0.1rem;
          height: 0.1rem;
          padding-top: 0.1rem;
          img {
            width: 0.03rem;
            height: 0.03rem;
            vertical-align: bottom;
          }
        }
        .car_site {
          flex: 5;
          p {
            font-size: 0.14rem;
            margin-bottom: 0.05rem;
            color: #222;
          }
          span {
            color: #888;
          }
        }
        p {
          flex: 1;
        }
      }
    }
  }
  //基本费用
  .capital_cost {
    background: #fff;
    padding: 0.12rem 0;
    margin-bottom: 0.08rem;
    .cap_tit {
      font-size: 0.14rem;
      color: #222;
      padding-left: 0.15rem;
    }
    .cap_detal {
      border-bottom: 1px solid #dfdfdf;
      // display: flex;
      li {
        overflow: hidden;
        margin: 0.1rem 0.23rem 0.1rem 0.15rem;
        p {
          color: #444;
          width: 2rem;
          float: left;
          .question {
            display: inline-block;
            width: 0.12rem;
            margin-left: 0.13rem;
            vertical-align: middle;
          }
        }
        .choss {
          font-size: 0.14rem;
          color: #222;
        }
        .butt {
          float: right;
        }
        .cap_num {
          color: #888;
          float: left;
        }
        .cap_price {
          color: #222;
          float: right;
        }
      }
    }
    .rent {
      padding: 0.1rem 0.23rem 0.14rem 0.15rem;
      padding-bottom: 0;
      overflow: hidden;
      p {
        float: left;
        color: #444;
        font-size: 0.14rem;
      }
      span {
        float: right;
        color: #222;
      }
    }
  }
  //违约金
  .penal_sum {
    background: #fff;
    padding: 0.1rem 0.23rem 0 0.15rem;
    margin-bottom: 0.08rem;
    div {
      display: flex;
      height: 0.2rem;
      line-height: 0.2rem;
      p {
        font-size: 0.14rem;
        color: #222;
      }
      img {
        width: 0.13rem;
        height: 0.13rem;
        margin: 0.04rem 0.06rem 0 0.1rem;
      }
      span {
        color: #888;
      }
    }
    .penal_payment {
      display: flex;
      li {
        flex: 1;
        margin: 0.14rem 0;
        .a {
          width: 1.06rem;
          height: 0.23rem;
          line-height: 0.19rem;
          display: block;
          border: 1px solid #bbb;
          text-align: center;
          img {
            display: inline-block;
            vertical-align: middle;
            width: 0.1rem;
            height: 0.1rem;
            margin-top: -0.02rem;
          }
        }
        .active {
          border: 1px solid #ffcc00;
          color: #ffcc00;
        }
      }
      li:nth-child(2) {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
      }
    }
  }
  //取车须知
  .car_information {
    display: flex;
    background: #fff;
    padding: 0.1rem 0 0.1rem 0.15rem;
    p {
      font-size: 0.12rem;
      color: #444;
      flex: 10;
    }
    div {
      flex: 1;
      img {
        width: 0.07rem;
        height: 0.12rem;
      }
    }
  }
  // 协议
  .protocol {
    display: flex;
    padding: 0.09rem 0 0.09rem 0.15rem;
    div {
      img {
        width: 0.13rem;
        height: 0.13rem;
        margin-right: 0.05rem;
      }
    }
    p {
      color: #888;
      span {
        color: #0099ff;
      }
    }
  }
  //确认订单
  .confirm_order {
    background: #fff;
    padding: 0.08rem 0.15rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    height: 0.55rem;
   a{
      .suer_con {
      width: 3.45rem;
      height: 0.39rem;
      text-align: center;
      line-height: 0.39rem;
      background: #ffcc00;
      p {
        font-size: 0.16rem;
        color: #fff;
      }
    }
   }
   
  }
  .img_displays {
    display: none !important;
  }
}
</style>

