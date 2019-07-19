<template>
  <div class="setting">
    <!-- 头部 -->
    <Branch :title="title">
      <router-link to="" class="leftImg" slot="left" @click="wein">
        <img src="./img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
    <!-- 内容 -->
    <router-link to>
      <Setinvoce :arr="arr[0]"></Setinvoce>
    </router-link>
    <router-link to>
      <Setinvoce :arr="arr[1]"></Setinvoce>
    </router-link>
    <router-link to>
      <Setinvoce :arr="arr[2]" style="border:none"></Setinvoce>
    </router-link>
    <!-- 底部 -->
    <div class="foot">
      <div class="footer">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import Setinvoce from "./set_invoce";
import Branch from "./branch_head";
export default {
  data() {
    return {
      // num:this.$store.state.back,
      title: "设置",
      arr: ["设置支付密码", "关于我们", "隐私声明"]
    };
  },
  methods: {
     wein(){
  
       let arr=this.$store.state.homedata.myarr;
       let ind=this.$store.state.homedata.index;
       this.$router.push(arr[ind]);

    }
  },
  components: {
    Setinvoce,
    Branch
  },

};
</script>

<style scoped lang='less'>
.setting {
  font-size: 0.13rem;
  color: #444;
  height: 100%;
  background: #f6f6f6;
  .foot {
    background: #fff;
    padding: 0.08rem 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .footer {
      background: #ffcc00;
      width: 3.45rem;
      height: 0.39rem;
      margin: 0 auto;
      text-align: center;
      line-height: 0.39rem;
      p {
        font-size: 0.16rem;
        color: #fff;
      }
    }
  }
}
</style>
