<template> 
  <div class="box">
    <mt-header title="余额" style="width:100%">
      <router-link to="/money" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>

    </mt-header>
    <section>
        <div class="top">
            <span>当前余额(平驾币)</span>
            <span class="num1" v-text="num1"></span>
        </div>
        <div class="center">
            <h3>说明</h3>
            <ul>
                <li>1.兑换比例：1元=1积分=1平驾币</li>
                <li>2.平驾币可用于冲抵租车消费</li>
                <li>3.平驾币不可兑现</li>
            </ul>
        </div>
        <div class="bottom_top">
            <span>当前积分</span>
            <span class="num2" v-text="num2"></span>
        </div>
        <div class="bottom_b">
           <h3>说明</h3>
            <ul>
                <li>1.兑换比例：1积分=1元</li>
                <li>2.每单最高可使用积分冲抵40%的租车费用</li>
            </ul>
        </div>
        <div class="bottom">
           <router-link to="/invest">
            <input type="button" value="充值">
            </router-link>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1:2030,
      num2:1000
    };
  },
  methods: {},
  components: {
  },
  mounted(){
    if(this.$store.state.money !== ''){
      this.num1 = parseInt(this.$store.state.money) + this.num1;
    }
    if(this.$store.state.c_money !== ''){
      this.num2 = parseInt(this.$store.state.c_money) + this.num2;
    }
  }
};
</script>

<style scoped lang='less'>
.box {
  //头部
  height: 100%;
  background: #f6f6f6;
  .mint-header {
    background: #fff;
    margin-right: 0.05rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
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
  section{
      font-size: .13rem;
      .top{
          border-top: 1px solid #ccc;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: .24rem 0;
          background: #fff;
          .num1{
              margin-top: .1rem;
              font-size: .19rem;
              color: #FFCC00;
          }
      }
      .center{
          background: #fff;
          border-top: 1px solid #ccc;
          padding: .16rem .3rem;
          ul{
              margin-top: .16rem;
              li{
                  margin-bottom: .14rem;
              }
              li:last-child{
                  margin-bottom: 0;
              }
          }
      }
      .bottom_top{
        margin-top: .08rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: .24rem 0;
          background: #fff;
         .num2{
              margin-top: .1rem;
              font-size: .19rem;
              color: #FFCC00;
          }
      }
      .bottom_b{
          background: #fff;
          border-top: 1px solid #ccc;
          padding: .16rem .3rem;
          ul{
              margin-top: .16rem;
              li{
                  margin-bottom: .14rem;
              }
              li:last-child{
                  margin-bottom: 0;
              }
          }
      }
      .bottom{
         position: absolute;
         bottom: 0;
         width: 100%;
          height: .55rem;;
          background: #fff;
          padding: .08rem .15rem;
          display: flex;
          align-items: center;
         a{
           display: block;
           width: 100%;
            input{
              width: 100%;
              height: .39rem;
              background: #FFCC00;
             text-align: center;
             color: #fff;
             font-size: .16rem;
          }
         }
      }
  }
}
</style>
