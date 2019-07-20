<template>
  <div class="box">
    <!-- 头部 -->
    <mt-header fiexd title="送车地址" style="width:100%">
      <router-link to="/home/china" slot="left">
        <mt-button>
          <img src="./img/back.png" alt class="back" />
        </mt-button>
      </router-link>
    </mt-header>
    <!-- 搜索 -->
    <van-search fiexd v-model="value" placeholder="请输入送车地址" show-action @click="onSearch" @input='get'>
      <div slot="action" @click="remove">取消</div>
    </van-search>
    <!-- 地图 -->
    <Map></Map>
    <!-- 地址 -->
    <div class="content" ref="container">
      <ul class="list">
        <li v-for="(item,index) in list" :key="index" @click="change(index)">
          <div class="left">
            <p :class="item.show?'active':''">
              <span v-show="item.show" v-text="item.text1"></span>
              <span v-text="item.text2"></span>
            </p>
            <p>
              <span v-text="item.text3"></span>
            </p>
          </div>
          <div class="right">
            <img src="./img/right.png" alt v-show="item.show" />
          </div>
        </li>
      </ul>
    </div>
    <!-- 搜索 -->
    <div class="s_content" v-if="show">
      <ul class="list">
        <li v-for="(item,index) in list" :key="index" @click="add(index)">
          <div class="left">
            <p>
              <span v-text="item.text2"></span>
            </p>
            <p>
              <span v-text="item.text3"></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Map from "./map/map";
export default {
  data() {
    return {
      value: "",
      list: [
        {
          text1: "当前：",
          text2: "郑州大学第一附属医院",
          text3: "二七广场",
          show: false,
        },
        {
          text1: "当前：",
          text2: "兰德·慢生活",
          text3: "金水区花园路31号",
          show: false,
        },
        {
          text1: "当前：",
          text2: "快驴试用",
          text3: "金水区花园路31号",
          show: false,
        },
        {
          text1: "当前：",
          text2: "羊肉饸烙面豆腐菜（东风路）",
          text3: "金水区花园路31号东风路南阳路交叉口西200米路倍",
          show: false,
        },
        {
          text1: "当前：",
          text2: "喜刷刷家政（国贸店）",
          text3: "金水区花园路31号",
          show: false,
        },
        {
          text1: "当前：",
          text2: "围辣串串香（兰德中心店）",
          text3: "金水区花园路丰产路交叉口东北角兰德中心1楼",
          show: false,
        },
        {
          text1: "当前：",
          text2: "晨熙电器",
          text3: "金水区花园路与丰产路交叉口国贸",
          show: false,
        },
        {
          text1: "当前：",
          text2: "金康炸鸡",
          text3: "金水区郑东商业中心",
          show: false,
        },
        {
          text1: "当前：",
          text2: "METGIRLS密格丝皮肤管理美甲美睫（国贸360店）",
          text3: "金水区农业路与花园路交叉国贸360A座",
          show: false,
        },
        {
          text1: "当前：",
          text2: "主持人陶凯工作室",
          text3: "金水区国贸360",
          show: false,
        }
      ],
      show: false,
    };
  },
  methods: {
    get(){
       for(let i = 0 ; i < this.list.length;i++){
        if(this.list[i].text2.indexOf(this.value)!==-1){
          let val = this.list[i];
          // console.log(this.list.splice(i,1))
           this.list.splice(i,1);
          this.list.unshift(val);
        }
      }
    },
    onSearch() {
      this.show = true;
    },
    remove() {
      this.show = false;
    },
    change(index) {
      this.list.forEach(item => {
        item.show = false;
      });
      this.list[index].show = true;
    },
    add(index) {
      this.show = false;
      this.list.forEach(item => {
        if (item.text2 == this.list[index].text2) {
          this.list.forEach(item => {
            item.show = false;
          });
          this.list[index].show = true;
         if(this.list[index].show==true){
           let a = this.list[index];
           this.list.splice(index,1);
           this.list.unshift(a);
         }
        }
      });
    }
  },
  components: {
    Map
  },
  mounted() {
    this.list[0].show = true;
  },
};
</script>

<style scoped lang='less'>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  .content {
    width: 100%;
    // flex: 1;
    font-size: 0.13rem;
    padding: 0 0.16rem;
    overflow: auto;
    background: #fff;
    transition: all 1s ease;
    li {
      display: flex;
      border-bottom: 1px solid #dfdfdf;
      padding: 0.16rem 0;
      .left {
        flex: 1;
        .active {
          color: #ffcc00;
        }
        p:nth-child(2) {
          margin-top: 0.13rem;
        }
      }
      .right {
        img {
          width: 0.16rem;
          height: 0.16rem;
        }
      }
    }
  }

  .s_content {
    width: 100%;
    height: 6rem;
    font-size: 0.13rem;
    padding: 0 0.16rem;
    overflow-y: auto;
    background: #fff;
    position: fixed;
    top: 0.9rem;
    li {
      display: flex;
      border-bottom: 1px solid #dfdfdf;
      padding: 0.16rem 0;
      .left {
        flex: 1;
        .active {
          color: #ffcc00;
        }
        p:nth-child(2) {
          margin-top: 0.13rem;
        }
      }
      .right {
        img {
          width: 0.16rem;
          height: 0.16rem;
        }
      }
    }
  }
}
</style>
