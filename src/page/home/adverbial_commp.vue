<template>
  <div ref="container" class="all">
    <div class="adverbial_commp">

      <ul class="list">
        <li>
          <a href="#/city">
            <div class="list_icon">
              <img src="./img/anniu1-2@2x.png" alt />
            </div>
            <div class="list_city">
              <span>郑州</span>
              <img src="./img/xiala@2x.png" alt />
            </div>
          </a>
           <a href="#" @click="changefrom('from')">
            <div class="list_auto" ref="from">
              <p>{{$store.state.homedata.from}}</p>
              <span class="self" v-if="$store.state.homedata.spfrom==2">该门店仅支持自助还车</span>
            </div>
            </a>
          <div class="list_take" @click="frombg">
            <span class="list_bg" :class="{'active':fromflag}">上门</span>
            <span class="list_bg reach" :class="{'active':!fromflag}">到店</span>
          </div>
        </li>
        <li>
          <a href="#/city">
            <div class="list_icon">
              <img src="./img/anniu2-2@2x.png" alt />
            </div>
            <div class="list_city">
              <span>郑州</span>
              <img src="./img/xiala@2x.png" alt />
            </div>
          </a>
          <a  @click="changeto('to')">
            <div class="list_auto" ref="to">
              <p>{{$store.state.homedata.to}}</p>
              <span class="self" v-if="$store.state.homedata.spto==2">该门店仅支持自助还车</span>
            </div>
            </a>
          <div class="list_take" @click="tobg">
            <span class="list_bg reach1" :class="{'active':toflag}">上门</span>
            <span class="list_bg reach" :class="{'active':!toflag}">到店</span>
          </div>
        </li>
      </ul>
      <!-- 时间 -->
      <Wtime></Wtime>
    <div class="btn">
      <router-link to="/type">
      <button>
        立即选车
      </button>
</router-link>
    </div>
      <!-- 选择 服务 图标部分 -->
      <ul class="iconlist">
        <li>
          <router-link to="/meal">
            <i class="icon super"></i>
            <p>超值套餐</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <i class="icon car"></i>
            <p>顺风车</p>
          </router-link>
        </li>
        <li>
          <a href="#/choseshop" @click="tochoose">
            <i class="icon shop"></i>
            <p>门店查询</p>
          </a>
        </li>
        <li>
          <router-link to>
            <i class="icon dao"></i>
            <p>导航</p>
          </router-link>
        </li>
      </ul>
      <!-- 底部车型 -->
      <div class="recommend">
        <p class="title">车型推荐</p>
        <ul>
          <li>
            <router-link to>
              <img src="./img/848@2x.png" alt />
              <p>
                <span>大众茗伊</span>
                <span>
                  <i>￥95</i>/日均
                </span>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="./img/853@2x.png" alt />
              <p>
                <span>雪佛兰</span>
                <span>
                  <i>￥99</i>/日均
                </span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Wtime from "./child/time";
export default {
  data() {
    return {
      scrolly: 0,
      toflag: false,
      fromflag: false,

      towhere: false,
      tobgok:'请选择门店',
      tobgno:'请选择地址'
    };
  },
  methods: {
    tochoose() {
      this.$store.commit("changeor", this.towhere);

    },
    //  选择上门 和 送
    tobg() {
      this.toflag = !this.toflag;
       this.$store.commit('changhomespanto',0);
      if(!this.toflag){
        this.$store.commit('changeto',this.tobgok);
      }else{
        this.$store.commit('changeto',this.tobgno);
      };


    },
    frombg() {
      this.fromflag = !this.fromflag;
        this.$store.commit('changhomespanfrom',0);
      if(!this.fromflag){
        this.$store.commit('changefrom',this.tobgok);
      }else{
        this.$store.commit('changefrom',this.tobgno);
      }

    },
    //  选择门店
    changefrom(a) {

      this.$store.commit("changedir", a);

      if(this.fromflag){
         this.$router.push("/choseshop");
      }
    },
    changeto(b) {
      this.$store.commit("changedir", b);
      this.$router.push("/choseshop");
    },
    //  选车状态
    btncanel(){
      // let to
      //  if()
    },
    // 多状态修改
    changespan() {
      if (this.fromflag == false) {
        // this.$store.commit('changefrom','')
      }
      if (this.toflag == false) {
        // this.$store.commit('changeto','')
      }
    },
    //滑动部分
    _initScroll() {
      this.container = new BScroll(this.$refs.container, {
        click: true,
        probeType: 3
      });
    this.container.on("scroll", pos => {
      this.scrolly = Math.abs(Math.round(pos.y));

      });
    }
  },




  components: {
    Wtime
  },
  mounted() {
     this.btncanel();
    this.$nextTick(() => {
      this._initScroll();
    });

  }
};
</script>

<style scoped lang='less'>
.all {
  position: absolute;
  top: 3.05rem;
  left: 0;
  width: 100%;
  height: 3.93rem;
  z-index: 33;
}

.adverbial_commp {
  background: #ccc;
  .backtop {
    width: 100%;
    height: 0.2rem;
    background: #fff;
    overflow: hidden;
    img {
      width: 0.16rem;
      height: 0.1rem;
      margin: 0.05rem auto;
    }
  }

  .list {
    height: 1.4rem;
    background: #fff;
    padding: 0 0.16rem;
    li {
      padding: 0.1rem 0;
      height:.6rem;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-size: 0.14rem;
        display: flex;
        // flex: 1;
        align-items: center;
        .list_icon {
          img {
            width: 0.12rem;
            height: 0.12rem;
            margin-right: 0.1rem;
          }
        }
        .list_city {
          color: #444;
          img {
            width: 0.08rem;
            height: 0.05rem;
            display: inline-block;
            margin: 0.05rem 0.13rem 0.07rem 0.01rem;
            vertical-align: middle;
          }
        }
        .list_auto {
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #222;
          .self {
            display: block;
            padding: 0 0.1rem;
            border-radius: 0.1rem;
            background: #ffcc00;
            color: #fff;
            width: 1.18rem;
            height: 0.18rem;
            font-size: 0.12rem;
            line-height: 0.16rem;
          }
          p{
            color:#AAAAAA;
          }
        }
      }
      .list_take {
        display: flex;
        float: right;
        .list_bg {
          color: #666;
          font-size: 0.12rem;
          display: inline-block;
          text-align: center;
          width: 0.37rem;
          height: 0.19rem;
          line-height: 0.19rem;
          background: url("./img/tophui@2x.png") no-repeat;
          background-size: 100% 100%;
        }
        .reach {
          margin-left: -0.05rem;
        }
        .active {
          background: url("./img/tophuang@2x.png") no-repeat;
          background-size: 100% 100%;
          color: #fff;
          z-index: 22;
        }
      }
    }
  }
  .btn {
    font-size: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      // display: block;
      width: 3.45rem;
      height: 0.4rem;
      margin: 0.1rem auto;
      background: #ffcc00;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.4rem;
      text-align: center;
    }
  }
  .iconlist {
    display: flex;
    padding: 0.1rem 0;
    height: 0.78rem;
    justify-content: space-around;
    background: #fff;
    li {
      width: 25%;
      height: 100%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        p {
          font-size: 0.14rem;
          letter-spacing: 2px;

        }
        .icon {
          width: 0.22rem;
          height: 0.22rem;
          display: block;
        }
        .super {
          background: url("./img/chaozhitaocan@2x.png") no-repeat;
          background-size: 100% 100%;
        }
        .car {
          background: url("./img/shunfengche@2x.png") no-repeat;
          background-size: 100% 100%;
        }
        .dao {
          background: url("./img/danghang@2x.png") no-repeat;
          background-size: 100% 100%;
        }
        .shop {
          background: url("./img/mendianchaxen@2x.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }

  .recommend {
    padding: 0.18rem 0.16rem 0.24rem 0.16rem;
    height: 1.95rem;
    background: #fff;
    margin-top: 0.08rem;
    .title {
      font-size: 0.16rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        margin-top: 0.18rem;
        padding: 0 0.14rem 0.18rem 0.14rem;
        width: 1.69rem;
        height: 1.2rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.08rem;
        display: flex;
        img {
          width: 1.41rem;
          height: 0.83rem;
        }
        p {
          font-size: 0.12rem;
          text-align: center;
          i {
            color: #ffcc00;
          }
        }
      }
    }
  }
}
</style>
