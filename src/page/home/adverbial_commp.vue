<template>
  <div class="adverbial_commp"  ref="container">
    <div class="backtop" v-if="gotop" @click="hidden">
         <img src="./img/xiala@2x.png" alt="">
    </div>
    <ul class="list">
      <li>
        <a  @click='changefrom("from")'>
          <div class="list_icon">
            <img src="./img/anniu1-2@2x.png" alt />
          </div>
          <div class="list_city">
            <span>郑州</span>
            <img src="./img/xiala@2x.png" alt />
          </div>
          <div class="list_auto" >
            <p>{{$store.state.homedata.from}}</p>
            <span class="self" v-if="$store.state.homedata.spfrom==2">该门店仅支持自助还车</span>
          </div>
        </a>
          <div class="list_take">
            <span class="list_bg ">上门</span>
            <span class="list_bg reach active">到店</span>
          </div>
      </li>
       <li>
        <a  @click="changeto('to')">
          <div class="list_icon">

            <img src="./img/anniu2-2@2x.png" alt />
          </div>
          <div class="list_city">
            <span>郑州</span>
            <img src="./img/xiala@2x.png" alt />
          </div>
          <div class="list_auto">
            <p>{{$store.state.homedata.to}}</p>
            <span class="self" v-if="$store.state.homedata.spto==2">该门店仅支持自助还车</span>

          </div>
        </a>
          <div class="list_take">
            <span class="list_bg reach1">上门</span>
            <span class="list_bg reach active">到店</span>
          </div>
      </li>
    </ul>
    <!-- 时间 -->
      <Wtime></Wtime>
    <div class="btn">
      <button>
        立即选车
      </button>

    </div>

       <!-- 选择 服务 图标部分 -->
    <ul class="iconlist">
      <li>
        <router-link to=""><i class="icon super"></i><p>超值套餐</p></router-link>
      </li>
      <li>
        <router-link to=""><i class="icon car"></i><p>顺风车</p></router-link>
      </li>
      <li>
        <router-link to="/choseshop"><i class="icon shop"></i><p>门店查询</p></router-link>
      </li>
      <li>
        <router-link to=""><i class="icon dao"></i><p>导航</p></router-link>
      </li>
    </ul>
    <!-- 底部车型 -->
     <div class="recommend">
    <p class="title">车型推荐</p>
       <ul>
           <li>
             <router-link to="">
                <img src="./img/848@2x.png" alt="">
                <p><span>大众茗伊</span> <span><i>￥95</i>/日均</span></p>
             </router-link>
           </li>
             <li>
             <router-link to="">
                <img src="./img/853@2x.png" alt="">
                <p><span>雪佛兰</span> <span><i>￥99</i>/日均</span></p>
             </router-link>
           </li>

       </ul>



  </div>


  </div>
</template>

<script>


import BScroll from 'better-scroll';
import Wtime from './child/time'
export default {
  data() {
    return {
      scrolly:0,

      gotop:false
    };
  },
  methods: {
    //  选择门店
     changefrom(a){
        this.$store.commit('changedir',a);
        this.$router.push('/choseshop');
     },
    changeto(b){
        this.$store.commit('changedir',b);
        this.$router.push('/choseshop');
     },
    //滑动部分
    _initScroll(){
        this.container=new BScroll(this.$refs.container,{
          click:true,
           probeType:3
         });
      this.container.on('scroll',(pos)=>{
        this.gotop=true;
        this.$refs.container.style.top=1.2+'rem';



       });


    },
       hidden(){
          this.gotop=false;
       this.$refs.container.style.top=3.05+'rem';
       },

  },
  components: {
Wtime
  },
  mounted(){
     this.$nextTick(()=>{
     this._initScroll();

   })

  }
};
</script>

<style scoped lang='less'>
.adverbial_commp {
  position: absolute;
  top:3.05rem;
  left: 0;
  width: 100%;
  height: 3.93rem;

  transition: all .5s ease;
  background: #CCC;
  .backtop{
    width:100%;
    height: .2rem;
    background: #FFF;
    // border-bottom: .01rem outset #DFDFDF;
    overflow: hidden;
    img{
      width: .16rem;
      height: .1rem;
      margin: .05rem auto;
    }
  }

  .list {
    height: 1.4rem;
    background: #fff;
      padding:0 .16rem;
    li {
        padding:.1rem 0;
        border-bottom: 1px solid #DFDFDF;
        display: flex;
       justify-content: space-between;
       align-items: center;
      a {
        font-size: 0.14rem;
        display: flex;
        flex: 1;
        align-items: center;
        .list_icon{
            img{
                width: .12rem;
                height: .12rem;
                margin-right:.1rem;
            }
        }
        .list_city{
            color: #444;
            img{
                width: .08rem;
                height:.05rem;
                display: inline-block;
                margin:0.05rem .13rem .07rem .01rem;
                vertical-align: middle;
            }
        }
        .list_auto{
            flex: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: .42rem;
            color: #222;
          .self{
            display: block;
            padding: 0 .1rem;
            border-radius: .1rem;
            background: #FFCC00;
            color: #FFF;
            width: 1.18rem;
            height: .18rem;
            font-size: .12rem;
            line-height: .16rem;
          }
        }

      }
        .list_take{
           display: flex;
            float:right;
            .list_bg{
                color: #666;
                font-size: .12rem;
                display: inline-block;
                text-align: center;
                width: .37rem;
                height: .19rem;
                line-height: .19rem;
                background: url('./img/tophui@2x.png') no-repeat;
                background-size: 100% 100%;
            }
            .reach{
               margin-left:-.05rem;
            }
            .active{
                 background: url('./img/tophuang@2x.png') no-repeat;
                background-size: 100% 100%;
                color: #fff;
                z-index: 22;
            }
        }
    }
  }
  .btn{
    font-size: 0;
    background: #FFF;
    display: flex;
    align-items: center;
    button{

      // display: block;
      width: 3.45rem;
      height: .4rem;
      margin: .1rem  auto;
      background: #FFCC00;
      color: #FFF;
      font-size: .16rem;
      line-height: .4rem;
      text-align: center;
    }
  }
  .iconlist{
    display: flex;
    padding: .1rem 0;
    height: .78rem;
    justify-content: space-around;
    background: #FFF;
    li{
      width: 25%;
      height:100% ;
      a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        p{
          font-size: .14rem;
          letter-spacing: 2px;
        }
        .icon{
          width: .22rem;
          height: .22rem;
          display: block;

        }
        .super{
          background: url('./img/chaozhitaocan@2x.png') no-repeat;
           background-size: 100% 100%;
        }
        .car{
          background: url('./img/shunfengche@2x.png') no-repeat;
           background-size: 100% 100%;
        }
         .dao{
          background: url('./img/danghang@2x.png') no-repeat;
           background-size: 100% 100%;
        }
         .shop{
          background: url('./img/mendianchaxen@2x.png') no-repeat;
           background-size: 100% 100%;
        }

      }
    }
  }

  .recommend{
   padding: .18rem .16rem .24rem .16rem;
   height: 1.95rem;
  background: #FFF;
  margin-top: .08rem;
  .title{
    font-size: .16rem;
  }
  ul{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
     li{
       margin-top: .18rem;
       padding: 0 .14rem .18rem .14rem;
        width: 1.69rem;
        height: 1.2rem;
        border: .01rem solid #CCC;
        border-radius: .08rem;
        display: flex;
        img{
          width: 1.41rem;
          height: .83rem;
        }
        p{
          font-size: .12rem;
          text-align: center;
          i{
            color: #FFCC00;
          }
        }
     }
  }
}
}
</style>
