<template>
  <!-- 充值 -->
  <div class="box">
    <mt-header title="充值" style="width:100%">
      <router-link to="/lost" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <section>
      <div class="top">
        <span>当前余额(平驾币)</span>
        <span class="num1">2030</span>
      </div>
      <div class="center">
          <div class="num2" v-show="show"> 
              <input type="text" v-model="value" @input="show=true">
          </div>
        <p>请选择充值金额</p>
        <ul class="cnenter_list">
          <li v-for="(item,index) in list" :key="index" :class="item.show?'':'active'" @click="change(index)">
            <span v-text="item.num1"></span>
            <span v-text="item.text1"></span>
            <span v-text="item.text2"></span>
          </li>
        </ul>
        <van-field
          readonly
          clickable
          :value="value"
          placeholder="自定义金额"
          @touchstart.native.stop="show = true"
          @focus="dele"
        />
        <van-number-keyboard v-model="value" :show="show" :maxlength="6" @blur="show = false" />
      </div>
      <div class="recommd">
          <h3>温馨提示</h3>
          <p>1.兑换比例：1元=1积分=1平驾币</p>
          <p>2.每单最高可使用积分冲抵40%的租车费用</p>
          <p></p>
      </div>
       <div class="bottom">
           <router-link to="/pay">
            <input type="buttom" value="立即充值">
            </router-link>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: "",
      list: [
        {
          num1: "1000元",
          text1: "充值1000元平驾币赠送100积分",
          text2: "赠100元",
          show:true
        },
        {
          num1: "2000元",
          text1: "充值2000元平驾币赠送300积分",
          text2: "赠300元",
          show:true
        },
        {
          num1: "3000元",
          text1: "充值3000元平驾币赠送500积分",
          text2: "赠500元",
          show:true
        },
        {
          num1: "5000元",
          text1: "充值5000元平驾币赠送800积分",
          text2: "赠800元",
          show:true
        },
        {
          num1: "8000元",
          text1: "充值8000元平驾币赠送1000积分",
          text2: "赠1000元",
          show:true
        },
        {
          num1: "10000元",
          text1: "充值10000元平驾币赠送1200积分",
          text2: "赠1200元",
          show:true
        }
      ]
    };
  },
  methods: {
    change(num){
      if(this.value === ''){
        this.list.forEach(item=>{
        item.show = true;
      })
      this.list[num].show = false;
      }
      
    },
    dele(){
      // if(this.value!==''){
        
      // }
      this.list.forEach(item=>{
        item.show = true;
      })
    }
  },
  components: {},
  mounted(){
    if(this.value!=''){
      this.list.forEach(item=>{
        item.list = false;
      })
    }
  }
};
</script>

<style scoped lang='less'>
.box {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  // 头部
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
  // 内容
  section {
    font-size: 0.13rem;
    //   上部
    .top {
      border-top: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.24rem 0;
      background: #fff;
      .num1 {
        margin-top: 0.1rem;
        font-size: 0.19rem;
        color: #ffcc00;
      }
    }
    //中部
    .center {
      margin-top: 0.09rem;
      width: 100%;
      background: #fff;
      position: relative;
      p {
        font-size: 0.13rem;
        padding: 0.16rem 0;
        text-align: center;
      }
      .cnenter_list {
        padding: 0 0.15rem;
        li {
          float: left;
          width: 1.66rem;
          height: 0.69rem;
          display: flex;
          flex-direction: column;
          padding: 0.17rem 0 0.17rem 0.13rem;
          border: 1px solid #dfdfdf;
          border-radius: 0.05rem;
          position: relative;
          margin-right: 0.13rem;
          margin-bottom: 0.14rem;
          span:nth-child(1) {
            font-size: 0.15rem;
            color: #222222;
            height: 0.15rem;
          }
          span:nth-child(2) {
            margin: 0.1rem 0 0 -0.185rem;
            font-size: 0.12rem;
            white-space: nowrap;
            transform: scale(0.8);
            color: #666666;
          }
          span:nth-child(3) {
            display: inline-block;
            font-size: 0.12rem;
            transform: scale(0.8);
            color: #fff;
            width: 0.68rem;
            height: 0.19rem;
            position: absolute;
            text-indent: 0.15rem;
            top: -0.03rem;
            right: -0.08rem;
            background: url("./img/pic.png") no-repeat;
            background-size: 100%;
          }
        }
        li:nth-child(2n) {
          margin-right: 0;
        }
        .active{
          border:1px solid #FFCC00;
          span:nth-child(1) {
            color:#ffcc00;
          }
           span:nth-child(2) {
            color:#ffcc00;
          }
        }
      }
      /deep/.van-cell__value--alone {
        height: 0.31rem;
        border: 1px solid #ccc;
        .van-field__control {
          font-size: 0.13rem;
          text-align: center;
        }
      }
        //输入值
      .num2{
          width: 100%;
          position: absolute;
          z-index: 999;
          height: 2.5rem;
          top: -.21rem;
          input{
            margin-top: 2rem;
              width: 100%;
              height: .5rem;
              text-align: center;
              font-size: .19rem;
          }
      }
    }
    .recommd{
        padding: .16rem .15rem;
        font-size: .12rem;
        height: .95rem;
        color: #888;
        background: #fff;
        h3{
            color: #666;
        }
        p:nth-child(2){
            margin: .16rem 0 .13rem 0;
        }
    }
    //底部
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
