<template>
  <div class="invoice">
    <!-- 头部 -->
    <Branch :title="title">
      <router-link to='/home' class="leftImg" slot="left">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
    <!-- 内容 -->
    <router-link to="/make_invoice">
      <Setinvoce :arr="arr[0]"></Setinvoce>
    </router-link>
    <router-link to="/billing_history">
      <Setinvoce :arr="arr[1]"></Setinvoce>
    </router-link>
    <router-link to="/common_information">
      <Setinvoce :arr="arr[2]" style="border:none"></Setinvoce>
    </router-link>
  </div>
</template>

<script>
import Setinvoce from "./set_invoce";
import Branch from "./branch_head";
export default {
  data() {
    return {
      title: "发票管理",
      arr: ["根据订单开票", "开票历史记录", "常用信息设置"]
    };
  },
  methods: {
  },
  components: {
    Setinvoce,Branch
  }
};
</script>

<style scoped lang='less'>
.invoice {
  font-size: 0.13rem;
  color: #444;
  height: 100%;
  background: #f6f6f6;
}
</style>
