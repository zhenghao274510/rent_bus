<template>
  <div ref="container" class="all">

  <div class="sharelist">
    <div class="shareinfo">
      <p>郑州花园路店</p>
      <p>郑州市金水区花园路145号润达商务一楼大厅</p>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in sharelist" :key="index">
          <router-link to>
            <div class="shareleft">
              <img :src="item.src" alt />
              <p class="sharename">{{item.name}}</p>
            </div>
            <div class="shareright">
              <p class="sharehao">{{item.card}}</p>
              <p class="sharemore">
                <span v-for="(con,ind) in item.info" :key="ind">{{con}}</span>
              </p>
              <p class="sharetime">
                <i>0.19</i>元/分钟+
                <i>0.99</i>元/公里
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      sharelist: []
      //  gotop:false
    };
  },
  mounted() {
    this.axios
      .get("./static/data/sharelistdata.json")
      .then(res => {
        this.sharelist = res.data.data;
        console.log(this.sharelist);
      })
      .catch(err => {
        console.log(err);
      }),
      this.$nextTick(() => {
        this._initScroll();
      });
  },
  methods: {
    _initScroll() {
      this.container = new BScroll(this.$refs.container, {
        click: true,
        probeType:2,
         stopPropagation:true,  //取消冒泡
          bindToWrapper:true,
          scrollY:true,

      });
      this.container.on("scroll", pos => {

             this.scrolly = Math.abs(Math.round(pos.y));

      });

    }


  },
  components: {}
};
</script>

<style scoped lang='less'>
  .all{
  width: 100%;
  height: 4.93rem;

}
.sharelist {
  width: 100%;

  position: absolute;
  top: 3.05rem;
  background: #fff;
  z-index: 99;
  // transition: all 0.6s ease;
  overflow: hidden;

  .shareinfo {
    // position: fixed;
    // top: 3.03rem;
    // width: 100%;
    height: 0.64rem;
    padding: 0.15rem;
    border-bottom: 0.01rem solid #dfdfdf;
    background: #FFF;
    z-index: 999;
    p {
      &:first-child {
        color: #444;
        font-size: 0.14rem;
      }
      &:last-child {
        color: #666;
        font-size: 0.12rem;
      }
    }
  }

  ul {
    padding: 0 0.15rem;
    // margin-top: 0.63rem;
    width: 100%;
    // height: 100%;
    // overflow-y: scroll;
    li {
      width: 100%;
      height: 0.84rem;
      border-bottom: 0.01rem solid #dfdfdf;
      &:last-child {
        border: none;
      }
      a {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .shareleft {
          margin-right: 0.1rem;
          text-align: center;
          img {
            width: 1.04rem;
            height: 0.61rem;
          }
          .sharename {
            font-size: 0.13rem;
            color: #888;
          }
        }
        .shareright {
          flex: 1;
          font-size: 0.12rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .sharehao {
            color: #444;
          }
          .sharemore {
            //  display: dlock;
            span {
              padding: 0.05rem 0.13rem;
              border: 0.01rem outset #888;
              border-radius: 0.04rem;
              margin-right: 0.05rem;
            }
          }
          .sharetime {
            i {
              color: #ffcc00;
            }
          }
        }
      }
    }
  }
}
</style>
