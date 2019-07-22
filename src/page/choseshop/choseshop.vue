<template>
  <div class="choseshop">
    <div class="chosehead">
      <a @click="back">
        <i class="icon back"></i>
      </a>
      <span v-if="$store.state.homedata.toshop">选择门店</span>
      <span v-else>门店</span>
      <router-link to='/searchshop' v-if="$store.state.homedata.toshop">
      <i class="icon search"></i>
      </router-link>
      <router-link to v-else>
        <i class="icon ding"></i>
      </router-link>
    </div>
    <div class="showcity" v-if="!$store.state.homedata.toshop">
      <span>用车城市</span>
      <div>
        郑州
        <span class="currentcity"></span>
      </div>
    </div>
  <div class="chosecont" ref="all" :class="{'pone':$store.state.homedata.toshop,'ptwo':!$store.state.homedata.toshop}">
      <!-- 左侧导航 -->
      <div class="left" ref="left" :class="{'ulone':$store.state.homedata.toshop,'ultwo':!$store.state.homedata.toshop}">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            ref="p"
            @click=" selectItem(index,$event)"
            :class="{'active':currentIndex===index}"
          >{{ item }}</li>
        </ul>
  </div>
 <!-- 右侧内容 -->
   <div class="right" ref="right">
  <div class="content">
       <div class="rightlist" v-for="(item,index) in datilelist" :key="index" ref="rightlist">
        <p class="title" ref="tit">{{item.title}}</p>
         <ul>
           <li v-for="(con,ind) in item.datalist" :key="ind" @click="changeinfo(con.name,con.type)">
            <a href="javaScript:;">
                 <div>
                    <router-link to="/home/china"><span>{{con.name}}</span></router-link>  <div>   <span class="self" v-if="con.type==2"></span><i class="car" v-else-if="con.type==1"></i>
                  <router-link to="/shop_xiangqing"> <span class="nearby" v-if="item.nearby==0">{{con.space}}</span><i class="more" v-else></i></router-link> </div>
                 </div>
                 <p class="info">
                {{con.details}}
                 </p>
           </a>
           </li>
         </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      // 标题 常在 类名
      ding: true,
      // 标题改变类名
      flag: true,
      list: [],
      datilelist: [],
      scrolly: 0,
      clickEvent: false,
      listHeight: [0]
      //  actli: 0
    };
  },
  mounted() {
    //  数据请求
    this.axios
      .get("./static/data/choseshopdata.json")
      .then(res => {
        this.list = res.data.shop;
        this.datilelist = res.data.result;
      })
      .catch(err => {
        console.log(err);
      });
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    //选择城市
    changeinfo(a, b) {
      console.log(b);
      this.$store.commit("changecome", a);
      this.$store.commit("changespan", b);
      // window.history.go(-1);
    },
    //  返回上一页
    back(){
      window.history.go(-1);
    },
    //  三栏联动
    _initScroll() {
      this.left = new BScroll(this.$refs.left, {
        click: true
      });
      this.right = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3,
        scrollY:true
      });
      this.right.on("scroll", pos => {
        this.scrolly = Math.abs(Math.round(pos.y));
        this._getHeight();
      });
    },
    //  左侧栏点击事件
    selectItem(index, event) {
      // this.clickEvent=true;
    let leftItem = this.$refs.left.getElementsByTagName("li");
    //  添加类名
      for (let i = 0; i < leftItem.length; i++) {
        leftItem[i].className = "";
      }
      event.target.className = "active";
      if (!event._constructed) {
        return;
      } else {
        this.right.scrollToElement(this.$refs.rightlist[index], 100, 0, 0);
      }
    },
    _getHeight() {
      //  获取右侧 每个区块的高  添加到数组
      let rightItem = this.$refs.right.getElementsByClassName("rightlist");
      let height = 0;
      for (let i = 0; i < rightItem.length; i++) {
        height += rightItem[i].offsetHeight;
        this.listHeight.push(height);
      }
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i] - 10;
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrolly > height && this.scrolly < height2)) {
          return i;
        }
        if (this.scrolly < height) {
          return 0;
        }
      }
    //  如果长度为0 返回0
      return 0;
    }
  },
  beforeDestroy(){
    // this._getHeight=null;
    this.right.destroy();
  }
};
</script>

<style scoped lang='less'>
.choseshop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  .chosehead {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
  height: 0.44rem;
    border-bottom: 0.01rem solid #ccc;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.5rem;
      height: 100%;
      &:last-child {
        width: 0.6rem;
      }
    .icon {
        display: block;
        width: 0.22rem;
        height: 0.22rem;
      }
    .back {
        background: url("./img/fanhui@2x.png") no-repeat;
        background-size: 100% 100%;
      }
      .search {
        background: url("./img/fangdajing@2x.png") no-repeat;
        background-size: 100% 100%;
      }
      .ding {
        width: .16rem;
        height: .2rem;
        background: url("./img/dingwei@2x.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    span {
      display: block;
      color: #222222;
      font-size: 0.16rem;
    }
  }
  // 当前城市区域
  .showcity {
    position: fixed;
    top: 0.44rem;
    left: 0;
    width: 100%;
    height: 0.31rem;
    display: flex;
    font-size: 0.12rem;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    z-index: 9999;
    .currentcity {
      display: inline-block;
      width: 0.07rem;
      height: 0.11rem;
      background: url("./img/fanhui-2@2x.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 0.05rem;
    }
  }
  .pone{
    margin-top: .44rem;
  }
  .ptwo{
    margin-top: .7rem;
  }
  .chosecont {
    // margin-top: 0.7rem;
    display: flex;
    position: relative;
    .ultwo{
       top: 0.7rem;
    }
    .ulone{
      top: .44rem;
    }
    .left {
      position: fixed;
      // top: 0.7rem;
      left: 0;
      width: 0.8rem;
      height: 100%;
      li {
        line-height: 0.4rem;
        color: #666666;
        font-size: 0.12rem;
        text-align: center;
      }
      .active {
        background: #fff;
        color: #ffcc00;
      }
    }
    .right {
      flex: 1;
      padding-left: 0.8rem;
      .content {
        width: 100%;
        .rightlist {
          width: 2.95rem;
          overflow: hidden;
          .pos {
          position: fixed;
          z-index: 99999;
          }
          .title {
            display: block;
            width: 100%;
            background: #f6f6f6;
            height: 0.27rem;
            line-height: 0.27rem;
            font-size: 0.12rem;
            text-indent: 0.11rem;
            letter-spacing: 2px;
          }
          .top {
            margin-top: 0.31rem;
          }
          ul {
            width: 100%;
            padding-left: 0.14rem;
            background: #fff;
            overflow: hidden;
            li {
              position: relative;
              width: 100%;
              height: 0.81rem;
              padding: 0 0.14rem 0.14rem 0;
              border-bottom: 0.01rem solid #ccc;
              a {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                div {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  line-height: 0.35rem;
                  font-size: 0.14rem;
                  .more {
                    display: inline-block;
                    width: 0.21rem;
                    height: 0.05rem;
                    background: url("./img/gengduo@2x.png") no-repeat;
                    background-size: 100% 100%;
                  }
                  .car {
                    display: inline-block;
                    width: 0.16rem;
                    height: 0.16rem;
                    background: url("./img/songche@2x.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 0.05rem;
                  }
                  .nearby {
                    display: inline-block;
                    font-size: 0.12rem;
                    color: #ccc;
                  }
                  .self {
                    display: inline-block;
                    width: 0.39rem;
                    height: 0.15rem;
                    background: url("./img/self.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 0.05rem;
                  }
                }
                .info {
                  position: absolute;
                  left: -0.3rem;
                  bottom: 0.14rem;
                  width: 112%;
                  display: block;
                  color: #888;
                  font-size: 0.14rem;
                  transform: scale(0.8);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
