<template>
  <!-- 开票历史记录 -->
  <div class="billing_history">
    <Branch :title="title">
      <router-link to="/invoice_management" class="leftImg" slot="left">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
    <Nthings :p="p"></Nthings>
  </div>
</template>

<script>
import Branch from "./branch_head";
import Nthings from "./nothings";

export default {
  data() {
    return {
      title: "开票历史记录",
      p: "您目前没有开票历史记录"
    };
  },
  methods: {},
  components: {
    Branch,
    Nthings
  }
};
</script>

<style scoped>
.billing_history {
  height: 100%;
  background: #f6f6f6;
}
</style>
