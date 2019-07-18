<template>
<!-- 根据订单开票 -->
  <div class="make_invoice">
     <!-- 头部 -->
    <Branch :title="title" style="border:none">
      <router-link to="/invoice_management" class="leftImg" slot="left">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
     <span slot="right" class="rightImg">开票规则</span>
    </Branch>
    <!-- 内容 -->
    <ul class="list_cen">
        <li>
            <router-link to='/make_invoice/domestic_rent'>国内租</router-link>
        </li>
         <li>
            <router-link to='/make_invoice/time_share'>分时共享</router-link>
        </li>
    </ul>
    <div class="display">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Branch from "./branch_head";
export default {
  data() {
    return {
        title:'根据订单开票'
    }
  },
  methods: {

  },
  components: {
Branch
  },
  mounted(){
      this.$router.push('/make_invoice/domestic_rent')
  }
}
</script>

<style scoped lang='less'>
.make_invoice{
    height: 100%;
    background: #f6f6f6;
    .list_cen{
        background: #fff;
        padding:.1rem 0;
        font-size: .14rem;
        color:#444;
        display: flex;
        align-items: center;
        text-align: center;
        li{
            flex: 1;
            a{
                display: block;
                color: #444;
            }
            a.router-link-active{
                color:#ffcc00;
            }
        }
    }
}
</style>
