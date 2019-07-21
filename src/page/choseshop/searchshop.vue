<template>
  <div class="seachshop">
    <div class="chosehead">
      <a @click="back">
        <i class="icon back"></i>
      </a>
      <span>选择门店</span>
    </div>
    <div class="searinput">
      <div class="searchinfo">
        <i class="search"></i>
        <input
          type="text"
          placeholder="输入地址寻找周边门店"
          v-focus
          v-on:input="sear_star(keyword)"
          v-model.trim="keyword"
        />
      </div>
      <span @click="del">取消</span>
    </div>
    <div class="right" ref="right">
      <!-- <div class="noinfo" v-if="show">没有相关信息,请多输入几次</div> -->
      <div class="content">
        <div class="rightlist">
          <ul>
            <li v-for="(item,index) in keylist" :key="index">
              <router-link to>
                <div>
                  <span>{{item.name}}</span>
                  <div>
                    <span class="self" v-if="item.type==2"></span>
                    <i class="car" v-else-if="item.type==1"></i>
                    <i class="more"></i>
                  </div>
                </div>
                <p class="info">{{item.details}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      datilelist: [],
      keyword: "",
      keylist: []
    };
  },
  mounted() {
    this.axios
      .get("./static/data/searshop.json")
      .then(res => {
        this.datilelist = res.data.datalist;
        console.log(this.datilelist);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    del(){
      this.keylist=[];
      this.keyword=''
    },
    //  返回上一页
    back() {
      window.history.go(-1);
    },
    sear_star(key) {
      if (key == "") {
        this.keylist = [];
      }
      let reg = /[\u4e00-\u9fa5]/g;
      if (key != "" && reg.test(key)) {
        this.datilelist.forEach(item => {
          if (item.details.indexOf(key) != -1) {
            this.keylist.push(item);
          }
        });
      }
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.seachshop {
  width: 100%;
  .chosehead {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    text-align: center;
    height: 0.44rem;
    line-height: 0.44rem;
    background: rgba(255, 255, 255, 1);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.5rem;
      height: 100%;
      position: absolute;
      top: 0;
      .back {
        display: block;
        width: 0.22rem;
        height: 0.22rem;
        background: url("./img/fanhui@2x.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    span {
      display: block;
      color: #222222;
      font-size: 0.16rem;
    }
  }
  .searinput {
    position: fixed;
    top: 0.44rem;
    z-index: 99;
    width: 100%;
    height: 0.5rem;
    padding: 0 0.15rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.01rem solid #ccc;
    .searchinfo {
      width: 3.05rem;
      height: 0.3rem;
      border-radius: 0.02rem;
      position: relative;
      .search {
        display: block;
        position: absolute;
        top: 0.04rem;
        left: 0.1rem;
        width: 0.21rem;
        height: 0.21rem;
        background: url("./img/sousuo@2x.png") no-repeat;
        background-size: 100% 100%;
      }
      input {
        width: 100%;
        height: 0.3rem;
        padding-left: 0.4rem;
        font-size: 0.14rem;
        background: #efefef;
        border-radius: 0.04rem;
        color: #AAA;
      }
      input::-webkit-input-placeholder {
        color: #AAA;
      }
    }
    span {
      display: block;
      width: 0.5rem;
      height: 100%;
      line-height: 0.5rem;
      font-size: 0.14rem;
      text-align: center;
      margin-left: 0.15rem;
    }
  }
  .right {
    width: 100%;
    .noinfo {
      width: 100%;
      font-size: 0.18rem;
      line-height: 0.4rem;
      text-align: center;
    }
    // padding-left: 0.8rem;
    .content {
      width: 100%;
      margin-top: 0.94rem;
      .rightlist {
        width: 100%;
        overflow: hidden;
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
                display: block;
                color: #888;
                font-size: 0.14rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
