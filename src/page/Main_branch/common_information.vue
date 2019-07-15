<template>
<!-- 常用信息设置 -->
  <div class="common_information">
 <!-- 头部 -->
    <Branch :title="title">
      <router-link to="/invoice_management" class="leftImg" slot="left">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
     <!-- 内容 -->
    <router-link to="/invoice_mess">
      <Setinvoce :arr="arr[0]"></Setinvoce>
    </router-link>
    <router-link to="/shipping_address">
      <Setinvoce :arr="arr[1]"></Setinvoce>
    </router-link>
    <router-link to="/emils">
      <Setinvoce :arr="arr[2]" style="border:none"></Setinvoce>
    </router-link>
  </div>
</template>

<script>
import Branch from "./branch_head";
import Setinvoce from "./set_invoce";
export default {
  data() {
    return {
        title:'常用信息设置',
        arr:['发票信息','配送地址','电子邮箱']
    }
  },
  methods: {

  },
  components: {
Branch,Setinvoce
  }
}
</script>

<style scoped>
.common_information{
    height: 100%;
    background: #f6f6f6;
}
</style>
