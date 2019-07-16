<template>
  <!-- 企业用车 -->
  <div class="business_car">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>{{item.name}}</p>
        <router-link :to="item.url">
          <span>{{item.chess}}</span>
          <img src="./img/fanhui-2@2x.png" />
        </router-link>
      </li>
    </ul>
      <div class="btn">
      <button>
        下一步
      </button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "取车城市",
          chess: "请选择",
          url: "/annual_rental"
        },
        {
          name: "取车门店",
          chess: "请选择",
          url: "/annual_rental"
        },
        {
          name: "取车时间",
          chess: "2019年07月12日 周五",
          url: "/annual_rental"
        },
        {
          name: "租期",
          chess: "一年",
          url: "/annual_rental"
        },
        {
          name: "车型",
          chess: "请选择",
          url: "/annual_rental"
        }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.business_car {
  padding: 0 0.25rem;
  font-size: 0.13rem;
  color: #888;
  li {
    display: flex;
    align-items: center;
    padding: 0.11rem 0;
    p {
      flex: 3;
    }
    a {
      span {
        font-size: 0.12rem;
        color: #888;
      }
      img {
        display: inline-block;
        width: 0.06rem;
        height: 0.1rem;
      }
    }
  }
  li:nth-child(3) span{
      font-size: .13rem;
      color:#444;
  }
  li:nth-child(4) span{
      font-size: .13rem;
      color:#444;
  }
  .btn{
    font-size: 0;
    background: #FFF;
    display: flex;
    align-items: center;
    button{

      // display: block;
      width: 3.45rem;
      height: .4rem;
      margin: .1rem  auto;
      background: #FFCC00;
      color: #FFF;
      font-size: .16rem;
      line-height: .4rem;
      text-align: center;
    }
  }
}
</style>
