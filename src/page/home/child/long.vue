<template>
  <!-- 企业用车 -->
  <div class="enterprise">
    <div class="box">
      <ul class="list">
        <li @click="changeyear">
          <router-link to="/home/long/annual_rental" >
            <span>年租</span>
          </router-link>
        </li>
        <li @click="changelong">
          <router-link to="/home/long/business_car">
            <span>企业用车</span>
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>

    <div class="change">
      <ul class="qiye" v-if="$store.state.homedata.lon">
        <li>企业用车说明</li>
        <li v-for="(item,index) in qiye" :key="index">
          <p>{{item}}</p>
        </li>
      </ul>
      <ul class="nianzu" v-else>
        <li>年租说明</li>
        <li v-for="(ite,i) in nianzu" :key='i'>
          <p>{{ite}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      qiye: [
        "1、价格更低，租期更灵活！",
        "2、3个月以上，尽享长租优惠。",
        "3、0公里新车，只需要半年起租。",
        "4、服务更优专业化团队，强大的系统支持，24小时服务。"
      ],
      nianzu: [
        "1、租期：年租套餐租期可为365天，暂不支持续租，如延长租期 需重新下单；",
        "2、订单修购：年租订单提交后暂不接受更改任何内容；",
        "3、异地还车：年租暂不接受异地还车",
        "4、预授权：年租订单需刷取租车押金，具体请咨询门店；",
        "5、支付方式：可取车时一次性支付租金，也可选择分期支付；",
        "6、提前还车：提前还车需支付违约金，详见取车时签订的合同 细则；"
      ],
      display:false
    };
  },
  methods: {
    changeyear(){
     this.display=false;
     this.$store.commit('changehomelong',this.display)
    },
   changelong(){
     this.display=true;
     this.$store.commit('changehomelong',this.display)
   }
  },
  mounted() {

  },
  components: {}
};
</script>

<style scoped lang='less'>
.enterprise {
  font-size: 0.13rem;
  color: #666;
  // height: 100%;
  overflow: hidden;
  background: #FFF;
  .box {
    margin: 0.26rem 0.15rem;
    margin-top:.9rem;
    box-shadow: 0.01rem 0.01rem 0.05rem rgba(36, 36, 36, 0.2);
    .list {
      display: flex;
      text-align: center;
      li {
        flex: 1;
        padding-top: 0.16rem;
        padding-bottom: 0.16rem;
        a {
          display: inline-block;
          height: 0.21rem;
          span {
            margin-bottom: 0.05rem;
          }
        }
        a.router-link-active {
          width: 0.52rem;
          border-bottom: 1px solid #444;
        }
      }
    }
  }
  .change {
    height: 2.85rem;

    ul {
      padding-left: 0.25rem;
      li {
          width: 3.27rem;
        font-size: 0.12rem;
        color: #888;
        padding: 0.07rem 0;
      }
      li:first-of-type {
        padding: 0;
        font-size: 0.13rem;
        color: #444;
      }
    }
  }
}
</style>
