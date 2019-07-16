<template>
  <div class="box">
    <mt-header fixed title="选择城市" style="width:100%">
      <router-link to="/" slot="left">
        <mt-button>
          <img src="./../img/fanhui@2x.png" alt class="back" />
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <img src="./../img/fangdajing@2x.png" alt class="search" @click="search" />
      </mt-button>
    </mt-header>

    <!-- 搜索 -->
    <mt-search v-model="value" v-show="show">
      <mt-cell
        v-for="(item,index) in result"
        :title="item.title"
        :value="item.value"
        :key="index"
        v-text="$options.filters.change(item)"
      ></mt-cell>
    </mt-search>
    <div v-show="show" class="ban" @click="show=false">111</div>
    <!-- 主题内容 -->
    <section>
      <!-- 字母 -->
      <div class="slide">
        <span @click="near">最近</span>
        <span @click="top">热门</span>
        <div class v-for="(item, index) in temABC" :key="index">
          <span class="temABC" @click="slide(item)">{{item}}</span>
        </div>
      </div>
      <div v-if="show1==1">
        <div class="yin">{{strA}}</div>
      </div>
      <!-- 当前城市 -->
      <div class="city_title">
        <p class="all">
          <span>当前位置城市</span>
          <span></span>
        </p>
        <div>
          <div class="img">
            <img src="./../img/dingwei@2x.png" alt />
          </div>
          <div class="city">
            <span v-show="texts">定位中</span>
            <span v-text="postion.city" v-show="postions"></span>
          </div>
        </div>
      </div>
      <!-- 历史 -->
      <div class="his_city">
        <p class="all">
          <span>历史访问城市</span>
          <span></span>
        </p>
        <div>
          <ul class="city_list">
            <li v-for="(item,index) in hisCitys" :key="index" v-text="item" class="his_list"></li>
          </ul>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="hot_city">
        <p class="hot">
          <span>热门城市</span>
          <span></span>
        </p>
        <div>
          <ul class="hot_list">
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>深圳</li>
            <li>天津</li>
            <li>杭州</li>
            <li>西安</li>
            <li>昆明</li>
            <li>武汉</li>
            <li>安阳</li>
            <li>苏州</li>
            <li>长沙</li>
            <li>长春</li>
          </ul>
        </div>
      </div>
      <!-- 城市 -->
      <div class="city city-wap">
        <div class="city-list">
          <div class="block-60"></div>
          <div v-for="(item,index) in cityListData" class="clearfix" :key="index">
            <p :id="item.ckey" class="sort">
              {{item.ckey}}
              <span></span>
            </p>
            <ul class="city_name">
              <li v-for="(ritem,index) in item.cityList" :key="index">{{ritem.airportName}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DataList from "./../../../../static/json/city.json";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      postion: {
        city: "郑州",
        lat: 34.5308189222,
        lng: 113.8526878594
      },
      temABC: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      dataList: DataList.dataList,
      upCityList: "",
      show: false,
      show1: 0, //字母
      list: false,
      value: "", //搜框
      hisCitys: [], //历史城市
      postions: false, //定位城市
      texts: true
    };
  },
  methods: {
    search() {
      this.show = true;
    },
    remove() {
      setTimeout(() => {
        this.postions = true;
        this.texts = false;
      }, 2000);
      let a = document.getElementsByClassName("mint-searchbar-cancel")[0];
      a.style.fontSize = 0.12 + "rem";
      a.onclick = () => {
        this.show = false;
      };
      setTimeout(() => {
        let his = document.getElementsByClassName("mint-cell");
        for (let i = 0; i < his.length; i++) {
          his[i].onclick = () => {
            console.log(his[i].innerHTML);
            this.hisCitys.push(his[i].innerHTML);
            this.show = false;
            this.value = "";
          };
        }
      }, 1000);
    },
    slide(key) {
      this.show1 = 1;
      this.strA = key;
      setTimeout(() => {
        this.show1 = 0;
      }, 1000);
      let targetTop = document.querySelector("#" + key + "").offsetTop;
      let a = document.getElementsByTagName("body")[0];
      a.scrollTo({
        top: targetTop + 60,
        behavior: "smooth"
      });
    },
    top() {
      let windowTop = document.getElementsByClassName("hot_city")[0].offsetTop;
      let a = document.getElementsByTagName("body")[0];
      a.scrollTo({
        top: windowTop - 60,
        behavior: "smooth"
      });
    },
    near() {
      let windowTop = document.documentElement.offsetTop;
      let a = document.getElementsByTagName("body")[0];
      a.scrollTo({
        top: windowTop,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.remove();
  },
  computed: {
    cityListData() {
      let map = {};
      let temps = [];
      this.dataList.map(item => {
        if (item.airportCode) {
          let ekey = item.airportCode.charAt(0).toUpperCase();
          temps = map[ekey] || [];
          temps.push({
            airportCode: item.airportCode,
            airportName: item.cityName
          });
          map[ekey] = temps;
        }
      });
      let list = [];
      for (let gkey in map) {
        list.push({
          ckey: gkey,
          cityList: map[gkey]
        });
      }
      list = list.sort(
        (li1, li2) => li1.ckey.charCodeAt(0) - li2.ckey.charCodeAt(0)
      );
      return list;
    },
    cityListKey() {
      let cityListKey = [];
      this.cityListData.map(item => {
        cityListKey.push(item.ckey);
      });
      return cityListKey;
    },
    result() {
      let result = [];
      this.dataList.forEach(item => {
        if (
          item.airportCode.toLowerCase().indexOf(this.value.toLowerCase()) !==
            -1 ||
          item.cityName.indexOf(this.value) !== -1
        ) {
          result.push(item.cityName);
        }else{
          // alert('没有数据')
        }
      });
      return result;
    }
  },
  filters: {
    change(val) {
      return val;
    }
  }
};
</script>

<style scoped lang='less'>
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  text-decoration: none;
  color: #000;
}
.box {
  width: 100%;
  height: 100%;
  .yin {
    font-size: 0.16rem;
    width: 0.4rem;
    height: 0.4rem;
    background: #000;
    opacity: 0.5;
    border-radius: 0.05rem;
    position: fixed;
    top: 50%;
    right: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
  }
  .ban{
    background: #fff;
    position: fixed;
    top: .44rem;
    width: 100%;
  }
  .mint-search {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
   font-size: .12rem;
    /deep/ .mint-search-list {
      top: 0.08rem;
      .mint-cell {
        font-size: 0.12rem;
        line-height: 2;
      }
    }
  }
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
    // 搜索头标
    .search {
      width: 0.22rem;
      height: 0.22rem;
    }
  }
  section {
    padding: 0.65rem 0.15rem;
    background: #f6f6f6;
    // 字母
    .slide {
      margin-right: 0.05rem;
      width: 0.18rem;
      position: fixed;
      top: 0.7rem;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.12rem;
      color: #ffcc00;
      span {
        white-space: nowrap;
        margin-bottom: 0.07rem;
      }
      .temABC {
        margin-top: 0.07rem;
      }
    }
    .all {
      font-size: 0.13rem;
      display: flex;
      align-items: center;
      justify-items: center;
      margin-bottom: 0.18rem;
      span:nth-child(2) {
        flex: 1;
        margin-left: 0.16rem;
        height: 1px;
        background: #dfdfdf;
      }
    }
    //定位
    .city_title {
      font-size: 0.13rem;
      div {
        width: 100%;
        display: flex;
        align-self: center;
        .img {
          width: 0.11rem;
          height: 0.14rem;
          img {
            width: 0.11rem;
            height: 0.14rem;
          }
        }
        .city {
          width: 100%;
          font-size: 0.12rem;
          span {
            margin-left: 0.04rem;
            background: #fff;
            display: block;
            width: 0.58rem;
            height: 0.24rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5rem;
          }
        }
      }
    }
    //历史城市
    .his_city {
      margin-top: 0.18rem;
      .city_list {
        font-size: 0.12rem;
        list-style: none;
        list-style: none;
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: row;
        li {
          background: #fff;
          border-radius: 0.5rem;
          text-align: center;
          width: 0.58rem;
          height: 0.24rem;
          line-height: 0.24rem;
          margin-right: 0.2rem;
          margin-bottom: 0.18rem;
        }
      }
    }
    //热门城市
    .hot_city {
      .hot {
        font-size: 0.13rem;
        display: flex;
        align-items: center;
        span:nth-child(2) {
          flex: 1;
          margin-left: 0.14rem;
          height: 1px;
          background: #dfdfdf;
        }
      }
      div {
        font-size: 0.12rem;
        .hot_list {
          margin-top: 0.18rem;
          list-style: none;
          overflow: hidden;
          li {
            float: left;
            background: #fff;
            border-radius: 0.5rem;
            text-align: center;
            width: 0.58rem;
            height: 0.24rem;
            margin-right: 0.2rem;
            margin-bottom: 0.18rem;
            line-height: 0.24rem;
          }
        }
      }
    }
    //城市
    .clearfix {
      font-size: 0.12rem;
      .sort {
        font-size: 0.12rem;
        display: flex;
        align-items: center;
        span {
          margin: 0.1rem;
          flex: 1;
          display: block;
          height: 0.01rem;
          background: #dfdfdf;
        }
      }
      .city_name {
        list-style: none;
        li {
          padding: 0.18rem 0;
          border-bottom: 1px solid #dfdfdf;
        }
        li:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>