<template>
  <div>
      <div class="hand">
        <mt-header title="我的订单" class="hand1" > 
        <router-link to="/" slot="left">
            <mt-button> <img class="left" src="./img/fanhui@2x.png" alt=""></mt-button>
        </router-link>
    </mt-header>
      </div>
      <div class="hang">
        <ul>
          <li class="yello">国内租</li>
          <li>分时共享</li>
          <li>全球租</li>
      </ul>
      </div>
      <div class="box">
        <p> <span>订单号：15623758043654</span> <span class="right">预定成功</span> </p>
        <ul>
          <li class="one"> <img src="./img/anniu3-2@2x.png" alt=""> <span>2019-07-07&nbsp;10:00&nbsp;至&nbsp;0.19-07-09&nbsp;10:00&nbsp;（2天）</span> </li>
          <li> <img src="./img/anniu1-2@2x.png" alt=""> <span>郑州&nbsp;郑州花园路店</span> </li>
          <li> <img src="./img/anniu2-2@2x.png" alt=""> <span>郑州&nbsp;郑州郑汴路店</span> </li>
          <li class="last"> <img src="./img/anniu4-2@2x.png" alt=""> <span>丰田凯美瑞&nbsp;三箱&nbsp;2.0T自动&nbsp;乘坐5人</span> </li>
        </ul>
        <p> <span>订单号：15623758043654</span> <span class="right">使用中</span> </p>
        <ul>
          <li class="one"> <img src="./img/anniu3-2@2x.png" alt=""> <span>2019-07-07&nbsp;10:00&nbsp;至&nbsp;0.19-07-09&nbsp;10:00&nbsp;（2天）</span> </li>
          <li> <img src="./img/anniu1-2@2x.png" alt=""> <span>郑州&nbsp;郑州花园路店</span> </li>
          <li> <img src="./img/anniu2-2@2x.png" alt=""> <span>郑州&nbsp;郑州郑汴路店</span> </li>
          <li class="last"> <img src="./img/anniu4-2@2x.png" alt=""> <span>丰田凯美瑞&nbsp;三箱&nbsp;2.0T自动&nbsp;乘坐5人</span> </li>
        </ul>
        <p> <span>订单号：15623758043654</span> <span class="right">已取消</span> </p>
        <ul>
          <li class="one"> <img src="./img/anniu3-2@2x.png" alt=""> <span>2019-07-07&nbsp;10:00&nbsp;至&nbsp;0.19-07-09&nbsp;10:00&nbsp;（2天）</span> </li>
          <li> <img src="./img/anniu1-2@2x.png" alt=""> <span>郑州&nbsp;郑州花园路店</span> </li>
          <li> <img src="./img/anniu2-2@2x.png" alt=""> <span>郑州&nbsp;郑州郑汴路店</span> </li>
          <li class="last"> <img src="./img/anniu4-2@2x.png" alt=""> <span>丰田凯美瑞&nbsp;三箱&nbsp;2.0T自动&nbsp;乘坐5人</span> </li>
        </ul>
        <p> <span>订单号：15623758043654</span> <span class="right">已完成</span> </p>
        <ul>
          <li class="one"> <img src="./img/anniu3-2@2x.png" alt=""> <span>2019-07-07&nbsp;10:00&nbsp;至&nbsp;0.19-07-09&nbsp;10:00&nbsp;（2天）</span> </li>
          <li> <img src="./img/anniu1-2@2x.png" alt=""> <span>郑州&nbsp;郑州花园路店</span> </li>
          <li> <img src="./img/anniu2-2@2x.png" alt=""> <span>郑州&nbsp;郑州郑汴路店</span> </li>
          <li> <img src="./img/anniu4-2@2x.png" alt=""> <span>丰田凯美瑞&nbsp;三箱&nbsp;2.0T自动&nbsp;乘坐5人</span> </li>
        </ul>
      </div>
      <div class="foot">
        <p>当前界面没有更多相关数据</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang = "less">
      .hand{
        .hand1{
        background: white;
        color:black;
        font-size:.15rem;
        }
        img{
          width: 0.13rem;
          height: 0.22rem;
        }
      }
      .hang{
        font-size: 0;
        ul{
          border-bottom: 1px solid #f6f6f6;
          li{
          height: 0.4rem;
          width: 33%;
          display:inline-block;
          font-size:.12rem;
          line-height: .4rem;
          text-align: center;
        }
        .yello{
          color: #FFCC00;
        }
        }
      }
      .box{
        width: 100%;
        /* height: 100%; */
        font-size: 0;
        /* overflow: visible; */
        /* overflow-y: visible; */ 
        p{
          height: 0.4rem;
          line-height: .4rem;
          font-size: .12rem;
          padding-left: .15rem;
          color:#888888;
          border-bottom: 1px solid #f6f6f6;
          .right{
            float: right;
            margin-right: 0.15rem;
          }

        }
        ul{
          font-size: .11rem;
          border-bottom: .08rem solid #f6f6f6;
          .one{
            padding-top: 0.2em;
          }
          li{
            height: 0.25rem;
            line-height: .25rem;
            img{
              width: 0.1rem;height: 0.1rem;
              margin-left: .15rem;
            }
          
          }
          .last{
              padding-bottom: .06rem;
          }
        }
      }
      .foot{
        height: 0.5rem;line-height: .5rem;
        text-align: center;
        background: #f6f6f6;
        font-size:0;
        p{
        font-size:.1rem;

        }
      }
</style>
