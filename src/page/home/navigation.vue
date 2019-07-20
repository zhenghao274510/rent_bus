<template>
  <div class="navigation" v-if='$store.state.homedata.show' @click.self="hidden">
    <div class="navigation_main">
      <div class="hader">
        <a href="javaScript:;" class="toux" @click="changeph">
          <router-link to="/minedata">
          <img src="./img/touxiang@2x.png" /></router-link>
        </a>
        <p>名字</p>
        <div>
          <a href="javaScript:;" class="crow">
            <img src="./img/huiyanka-putong@2x.png" alt />
          </a>
          <a href="javaScript:;" class="member">
            <span>普通会员</span>
            <img src="./img/fanhui-2@2x.png" />
          </a>
        </div>
      </div>
      <!-- 列表 -->
      <ul class="navigation_list">
        <li>
         <router-link to='/money'>
            <img src="./img/qianbao@2x.png" alt />
            <span>钱包</span>
      </router-link>
        </li>
        <li>
         <router-link to='/erji'>
            <img src="./img/dingdan@2x.png" alt />
            <span>订单</span>
         </router-link>
        </li>
        <li>
         <router-link to='/invoice_management'>
            <img src="./img/fapiao@2x.png" alt />
            <span>发票</span>
        </router-link>
        </li>
        <li>
         <router-link to='/Illegal_processing'>
            <img src="./img/weizhang@2x.png" alt />
            <span>违章</span>
        </router-link>
        </li>
        <li>
           <router-link to='/customer/domestic'>
            <img src="./img/kefu@2x.png" alt />
            <span>客服</span>
         </router-link>
        </li>
        <li>
          <router-link to='/setting'>
            <img src="./img/shezhi@2x.png" alt />
            <span>设置</span>
        </router-link>
        </li>
      </ul>
      <!-- 轮播 -->
      <div class="navigation_lun">
        <mt-swipe :auto="3000">
          <mt-swipe-item><img src="./img/2560-500-mian2-20180824-WEB@2x.png" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./img/2560-500-zizhu-20190426-WEB@2x.png" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 礼物 -->
      <div class="gift">
          <router-link to='/'>
              <img src="./img/liwu@2x.png" alt="">
              <span>邀请好友得奖励</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['show'],
  data() {
    return {
      show:false
    };
  },
  methods: {
    hidden(){
      this.$store.commit('changehome',this.show);
    },
    changeph(){
      console.log(1111111)
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.navigation {
    z-index: 666;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
  position: absolute;
  top:0;
  left: 0;
  transition: all .6s ease;
  .navigation_main {
    width: 53.3%;
    background: #fff;
    height: 100%;
    .hader {
      margin: 0 0.31rem;
      text-align: center;
      border-bottom: 1px solid #ccc;
      .toux {
        padding-top: 0.64rem;
        display: block;
        img {
          width: 0.49rem;
          height: 0.49rem;
          margin: 0 auto;
        }
      }
      p {
        color: #222;
        margin-top: 0.1rem;
      }
      div {
        margin-bottom: 0.17rem;
        .crow {
          img {
            width: 0.22rem;
            height: 0.12rem;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .member {
          span {
            font-size: 0.12rem;
            color: #ffcc00;
          }
          img {
            width: 0.06rem;
            height: 0.1rem;
            display: inline-block;
            margin-left: 0.03rem;
          }
        }
      }
    }
    //列表
    .navigation_list {
      padding: 0.18rem 0 0.18rem 0.31rem;
      li {
        margin: 0.16rem 0;
        a {
          display: block;
          img {
            width: 0.24rem;
            height: 0.24rem;
            margin-right: 0.06rem;
            display: inline-block;
            vertical-align: middle;
          }
          span {
            color: #333;
          }
        }
      }
    }
    //轮播
    .navigation_lun {
      width: 1.7rem;
      height: 0.8rem;
      margin: .46rem  auto 0;
    }
    .gift{
        margin:.19rem auto;
        a{
            display: block;
            text-align: center;
            img{
                width: .16rem;
                height: .14rem;
                display: inline-block;
                vertical-align: middle;
            }
            span{
                font-size: .12rem;
                color: #FFD427;
            }
        }
    }
  }
}
</style>
