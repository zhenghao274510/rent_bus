<template>
  <!-- 违章处理也 -->
  <div class="Illegal_processing">
      <!-- 头部 -->
    <Branch :title="title" style='border:none'>
      <a @click='wein' class="leftImg" slot="left">
        <img src="./../Main_branch/img/fanhui@2x.png" alt />
      </a>
      <router-link slot="right" class="rightImg" to='/rule_description'>
        <p>规则说明</p>
      </router-link>
    </Branch>
    <!-- 二级路由 -->
     <ul class="list_cen">
        <li>
            <router-link to='/Illegal_processing/pending'>待处理</router-link>
        </li>
         <li>
            <router-link to='/Illegal_processing/discretion'>自行处理记录</router-link>
        </li>
        <li>
            <router-link to='/Illegal_processing/other_processing'>其他处理记录</router-link>
        </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Branch from "./../Main_branch/branch_head";
export default {
  data() {
    return {
      title: "违章处理"
    };
  },
  methods: {
    wein(){
      this.$router.push('/home');

    }
  },
  mounted(){
    this.$router.push('/Illegal_processing/pending')
  },
  components: {
    Branch
  }
};
</script>

<style scoped lang='less'>
.Illegal_processing {
  font-size: 0.13rem;
  color: #444;
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
        border-bottom:1px solid #dfdfdf;
        li{
            flex: 1;
            a{
                display: block;
                color:#444;
            }
            a.router-link-active{
                color:#ffcc00;
            }
        }
    }
}
</style>
