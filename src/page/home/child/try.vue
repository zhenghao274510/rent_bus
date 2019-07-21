<template>
  <div ref="container" class="all">
    <div class="hometry">
      <img src="./../img/earth/banner-quanqiuzu@2x.png" class="banner" />
      <div class="gift">
        <i></i>
        <i></i>
        <div class="gift_info">
          <span class="gift_bao"></span>
          <div>
            <p>宝沃1天免费租车劵</p>
            <p>有效期：即日起一年内有效</p>
          </div>
        </div>
        <span class="get_bao">领取</span>
      </div>
      <div class="giftend">
        <!-- 中间图部分 -->
        <ul class="moregift">
          <li>
            <img src="./../img/try/tu1@2x.png" />
            <div>
              <p class="miantry">免费试驾</p>
              <p class="gold">用劵可免费开1天</p>
            </div>
          </li>
          <li>
            <img src="./../img/try/tu2@2x.png" />
            <div>
              <p class="miantry">深度试驾</p>
              <p class="gold">购车后最多可 免三天实付租车费</p>
            </div>
          </li>
        </ul>
        <!-- 列表部分 -->
        <div class="content">
          <div class="trylist">
            <div class="try_title">
              <span>试驾车型</span>
              <router-link to>
                郑州
                <i class="down"></i>
              </router-link>
            </div>
            <ul>
              <li class="tryitem">
                <router-link to>
                  <div class="left">
                    <img src="./../img/try/868@2x.png" />
                    <div class="info">
                      <p>宝沃BX5</p>
                      <p class="minx">免费试驾:领劵后免费租1天</p>
                      <p class="minx">深度试驾:日均148元起</p>
                    </div>
                  </div>
                  <div class="right">领取</div>
                </router-link>
              </li>
              <li class="tryitem">
                <router-link to>
                  <div class="left">
                    <img src="./../img/try/869@2x.png" />
                    <div class="info">
                      <p>宝沃BX6</p>
                      <p class="minx">免费试驾:领劵后免费租1天</p>
                      <p class="minx">深度试驾:日均148元起</p>
                    </div>
                  </div>
                  <div class="right">领取</div>
                </router-link>
              </li>
              <li class="tryitem">
                <router-link to>
                  <div class="left">
                    <img src="./../img/try/870@2x.png" />
                    <div class="info">
                      <p>宝沃BX7两驱</p>
                      <p class="minx">免费试驾:领劵后免费租1天</p>
                      <p class="minx">深度试驾:日均148元起</p>
                    </div>
                  </div>
                  <div class="right">领取</div>
                </router-link>
              </li>
              <li class="tryitem">
                <router-link to>
                  <div class="left">
                    <img src="./../img/try/870@2x.png" />
                    <div class="info">
                      <p>宝沃BX7四驱</p>
                      <p class="minx">免费试驾:领劵后免费租1天</p>
                      <p class="minx">深度试驾:日均148元起</p>
                    </div>
                  </div>
                  <div class="right">领取</div>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- icon图标部分 -->
          <div class="iconlist">
            <p class="iconlist_title">试驾平台保障</p>
            <ul>
              <li>
                <router-link to>
                  <span class="icon one"></span>
                  <p>车况保障更安全</p>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="icon two"></span>
                  <p>免押尊享更无忧</p>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <span class="icon three"></span>
                  <p>时间可选更自由</p>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- 底部电话 -->
          <div class="tryend">咨询电话：400666666</div>
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
      scrolly: 0
    };
  },
  mounted() {},
  methods: {},

  components: {}
};
</script>

<style scoped lang='less'>
.all {
  width: 100%;
  height: 3.56rem;
}
.hometry {
  width: 100%;
  height: 100%;
  margin-top: 0.76rem;
  transition: all 0.6s ease;
  .banner {
    width: 100%;
    height: auto;
  }
  .gift {
    width: 3.45rem;
    height: 0.8rem;
    padding: 0 0.1rem;
    margin: 0.08rem auto;
    background: #fff;
    border-radius: 0.08rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .get_bao {
      width: 0.44rem;
      height: 0.22rem;
      line-height: 0.18rem;
      border: 0.01rem solid #ffcc00;
      border-radius: 0.11rem;
      font-size: 0.12rem;
      text-align: center;
      color: #ffcc00;
      margin-right: 0.15rem;
    }
    .gift_info {
      display: flex;
      .gift_bao {
        width: 0.42rem;
        height: 0.45rem;
        background: url("./../img/try/hongbao@2x.png") no-repeat;
        background-size: 100% 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-left: 0.2rem;
        p {
          &:first-child {
            font-size: 0.14rem;
          }
          &:last-child {
            font-size: 0.12rem;
            transform: scale(0.8);
          }
        }
      }
    }

    i {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 50%;
      background: #f6f6f6;
      &:nth-child(1) {
        position: absolute;
        top: -0.05rem;
        left: 0.77rem;
      }
      &:nth-child(2) {
        position: absolute;
        bottom: -0.05rem;
        left: 0.77rem;
      }
    }
  }
  .giftend {
    background: #fff;
    width: 100%;
    .content{
      height: 3rem;
      overflow-y: auto;
    }
    .moregift {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 0.2rem;
      height: 0.92rem;
      border-bottom: 0.01rem solid #eeeeee;
      li {
        width: 50%;
        height: 100%;
        display: flex;
        //  justify-content: space-between;
        align-items: center;
        img {
          width: 0.6rem;
          height: 0.6rem;
        }
        div {
          font-size: 0;
          margin-left: 0.1rem;
          .miantry {
            font-size: 0.14rem;
          }
          .gold {
            font-size: 0.12rem;
            color: #ffcc00;
          }
        }
      }
    }
    .trylist {
      padding: 0.1rem 0.1rem 0 0.1rem;
      .try_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.14rem;
        height: 0.3rem;
        .down {
          display: inline-block;
          margin-left: 0.08rem;
          width: 0.08rem;
          height: 0.05rem;
          background: url("./../img/try/xiala@2x.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      ul {
        font-size: 0;
        width: 100%;
        li {
          width: 100%;
          height: 0.88rem;
          border-bottom: 0.01rem solid #eeeeee;
          &:last-child {
            border-bottom: none;
          }
          a {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            .left {
              display: flex;
              flex: 1;

              height: 100%;
              align-items: center;
              img {
                width: 0.8rem;
                height: 0.47rem;
              }
              .info {
                height: 100%;
                padding: 0.1rem;
                flex: 1;
                display: flex;

                flex-direction: column;
                justify-content: space-between;
                p {
                  font-size: 0.14rem;
                  color: #222;
                }
                .minx {
                  font-size: 0.12rem;
                  color: #666;
                }
              }
            }
            .right {
              width: 0.44rem;
              height: 0.22rem;
              line-height: 0.18rem;
              font-size: 0.12rem;
              border: 0.01rem solid #ffcc00;
              color: #ffcc00;
              border-radius: 0.11rem;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .tryend {
    font-size: 0.12rem;
    line-height: 0.5rem;
    text-align: center;
  }
  .iconlist {
    margin: 0.12rem 0 0 0;
    height: 1.55rem;
    background: #fff;
    padding: 0.27rem 0.17rem;
    .iconlist_title {
      font-size: 0.14rem;
      text-align: center;
    }
    ul {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 33.333%;
        height: 100%;
        a {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .icon {
            display: block;
            width: 0.45rem;
            height: 0.45rem;
          }
          .one {
            background: url("./../img/try/duipai@2x.png") no-repeat;
            background-size: 100% 100%;
          }
          .two {
            background: url("./../img/try/qianbao@2x.png") no-repeat;
            background-size: 100% 100%;
          }
          .three {
            background: url("./../img/try/shizhong@2x.png") no-repeat;
            background-size: 100% 100%;
          }
          p {
            font-size: 0.12rem;
            color: #ffcc00;
          }
        }
      }
    }
  }
}
</style>
