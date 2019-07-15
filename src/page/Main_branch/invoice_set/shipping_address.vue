<template>
  <div class="invoice_mess">
    <Branch :title="title">
      <router-link to="/common_information" class="leftImg" slot="left">
        <img src="./../img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
    <Nthings :p="p"></Nthings>
    <div class="foot">
        <p>新增常用配送地址</p>
    </div>
  </div>
</template>

<script>
import Branch from "./../branch_head";
import Nthings from "./../nothings";
export default {
  data() {
    return {
      title: "配送地址",
      p: "您还没有常用的配送地址，快添加吧！"
    };
  },
  methods: {},
  components: {
    Branch,
    Nthings
  }
};
</script>

<style scoped lang='less'>
.invoice_mess{
    height: 100%;
    background: #f6f6f6;
    .foot{
        width: 3.45rem;
        height: .39rem;
        line-height: .39rem;
        background: #ffcc00;
        text-align: center;
        margin:0 auto;
        border-radius: .02rem;
        position: relative;
        bottom:-5.51rem;
        p{
            font-size: .16rem;
            color:#fff;
        }
    }
}
</style>
