<template>
  <!-- 顺风车 -->
  <div class="ride_sharing">
    <!-- 头部 -->
    <Branch :title="title" style="border:none">
      <router-link to='/home/china' class="leftImg" slot="left">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
      <img src="./img/wenhao1@2x.png" alt slot="right" class="digth" />
    </Branch>
    <!-- 赛选列表 -->
    <ul class="city_list">
      <li v-for="(item,index) in city_list" :key="index">
        <span>{{item}}</span>
        <img src="./img/xiala@2x.png" />
      </li>
    </ul>
    <!-- 城市选车 -->
    <ul class="car_list">
      <li v-for="(items,i) in car_list" :key="i">
        <div class="li_cen">
          <div class="licen_top">
            <div class="licen_top_left">
              <p>{{items.value}}</p>
              <span>07-12 周五</span>
            </div>
            <div class="licen_top_mod">
              <p>100元</p>
              <img src="./img/jiantou-chang@2x.png" />
              <span>限租1天</span>
            </div>
            <div class="licen_top_right">
              <p>{{items.value1}}</p>
              <span>07-14 周日</span>
            </div>
          </div>
          <div class="licen_dow">
            <img :src="items.img" />
            <span>{{items.value2}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Branch from "./../Main_branch/branch_head";
export default {
  data() {
    return {
      title: "顺风车",
      city_list: ["取车城市", "用车时间", "还车城市"],
      car_list: [
        {
          value: "三明",
          value1: "广州",
          img: require("./img/744@2x.png"),
          value2: "雪佛兰科鲁兹"
        },
        {
          value: "南京",
          value1: "上海",
          img: require("./img/840@2x.png"),
          value2: "大众朗逸"
        },
        {
          value: "上海",
          value1: "广州",
          img: require("./img/848@2x.png"),
          value2: "丰田致炫"
        },
        {
          value: "金华",
          value1: "南昌",
          img: require("./img/853@2x.png"),
          value2: "别克昂科拉"
        },
        {
          value: "西宁",
          value1: "宁波",
          img: require("./img/868@2x.png"),
          value2: "雪佛兰科鲁兹"
        }
      ]
    };
  },
  methods: {},
  components: {
    Branch
  }
};
</script>

<style scoped lang='less'>
.ride_sharing {
  font-size: 0.12rem;
  color: #666;
  background: #fff;
  .digth {
    width: 0.22rem;
    height: 0.22rem;
    bottom: 0.11rem;
    right: 0.15rem;
    position: absolute;
  }
  .city_list {
    font-size: 0.13rem;
    color: #444;
    border: none;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    li {
      flex: 1;
      text-align: right;
      padding: 0.1rem 0.15rem;
      img {
        width: 0.08rem;
        height: 0.05rem;
        display: inline-block;
        vertical-align: top;
        margin: 0.05rem 0.02rem 0 0.06rem;
      }
    }
  }
  // 城市选车
  .car_list {
    li {
      border-bottom: 1px solid #dfdfdf;
      .li_cen {
        padding: 0 0.15rem;
        .licen_top {
          display: flex;
          align-items: center;
          padding: 0.11rem 0;
          border-bottom: 1px solid #dfdfdf;
          line-height: 0.2rem;
          p {
            font-size: 0.14rem;
            color: #444;
          }
          .licen_top_left {
            flex: 1;
          }
          .licen_top_mod {
            text-align: center;
            flex: 3;
            img {
              width: 1.51rem;
              margin-left: 0.35rem;
            }
            p {
              font-size: 0.16rem;
              color: #ffcc00;
            }
          }
          .licen_top_right {
            flex: 1;
            text-align: right;
          }
        }
        .licen_dow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.01rem 0;
          img {
            width: 0.83rem;
            height: 0.48rem;
          }
        }
      }
    }
  }
}
</style>
