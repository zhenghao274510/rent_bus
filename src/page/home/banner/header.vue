<template>
  <div class="box">
    <header>
      <mt-header title="导航" style="width:100%">
        <router-link to='/home/china' slot="left">
          <mt-button>
            <img src="./img/fanhui@2x.png" alt class="back" />
          </mt-button>
        </router-link>
      </mt-header>
      <!-- 搜索 -->
      <van-search fiexd v-model="value" placeholder="请输入目的地" show-action>
        <div slot="action">取消</div>
      </van-search>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
       value:''
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.box {
  width: 100%;
  header {
    .mint-header {
      padding-left: 0.15rem;
      background: #fff;
      margin-right: 0.05rem;
      display: flex;
      justify-content: center;
      // overflow: hidden;
      height: 0.44rem;
      /deep/.mint-header-title {
        color: #000;
        font-size: 0.16rem;
        letter-spacing: 5px;
      }
      .back {
        width: 0.13rem;
        height: 0.22rem;
      }
    }
  }
}
</style>
