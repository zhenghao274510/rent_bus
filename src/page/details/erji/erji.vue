<template>
  <div>
      <ul class="big">
        <li class="box"  v-for="(item,index) in shuju" :key="index">
        <p> <span>订单号：{{ item.hao }}</span> <router-link :to="item.luyou"><span class="right">{{ item.right }}</span></router-link> </p>
        <ul>
          <li class="one">
           <img :src="item.img" alt="">  
           <span>{{ item.time }}</span> 
          </li>
          <li> <img :src="item.img1" alt=""> <span>{{ item.zheng }}</span> </li>
          <li> <img :src="item.img2" alt=""> <span>{{ item.zheng1 }}</span> </li>
          <li class="last"> <img :src="item.img3" alt=""> <span>{{ item.paizi }}</span> </li>
        </ul>
      </li>
      <div class="foot">
        <p>当前界面没有更多相关数据</p>
      </div>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        shuju:[
            {
                "hao":15623758043654,
                "right":"预定成功",
                "img":require('../img/anniu3-2@2x.png'),
                "time":"2019-07-07 10:00 至 2019-07-09 10:00 （2天）",
            
                "img1":require('../img/anniu1-2@2x.png'),
                "zheng":"郑州  郑州花园路店",
            
                "img2":require('../img/anniu2-2@2x.png'),
                "zheng1":"郑州  郑州郑汴路店",
          
               "img3":require('../img/anniu4-2@2x.png'),
               "paizi":"丰田凯美瑞 三箱 2.0T自动 乘坐5人",
               "luyou":"/data"
            },
            {
                "hao":15623758043654,
                "right":"使用中",
                "img":require('../img/anniu3-2@2x.png'),
                "time":"2019-07-07 10:00 至 2019-07-09 10:00 （2天）",
            
                "img1":require('../img/anniu1-2@2x.png'),
                "zheng":"郑州  郑州花园路店",
            
                "img2":require('../img/anniu2-2@2x.png'),
                "zheng1":"郑州  郑州郑汴路店",
          
               "img3":require('../img/anniu4-2@2x.png'),
               "paizi":"丰田凯美瑞 三箱 2.0T自动 乘坐5人",
               "luyou":"/date"
            },
            {
                "hao":15623758043654,
                "right":"已取消",
                "img":require('../img/anniu3-2@2x.png'),
                "time":"2019-07-07 10:00 至 2019-07-09 10:00 （2天）",
            
                "img1":require('../img/anniu1-2@2x.png'),
                "zheng":"郑州  郑州花园路店",
            
                "img2":require('../img/anniu2-2@2x.png'),
                "zheng1":"郑州  郑州郑汴路店",
          
               "img3":require('../img/anniu4-2@2x.png'),
               "paizi":"丰田凯美瑞 三箱 2.0T自动 乘坐5人",
               "luyou":"/details"
            },
            {
                "hao":15623758043654,
                "right":"已完成",
                "img":require('../img/anniu3-2@2x.png'),
                "time":"2019-07-07 10:00 至 2019-07-09 10:00 （2天）",
            
                "img1":require('../img/anniu1-2@2x.png'),
                "zheng":"郑州  郑州花园路店",
            
                "img2":require('../img/anniu2-2@2x.png'),
                "zheng1":"郑州  郑州郑汴路店",
          
               "img3":require('../img/anniu4-2@2x.png'),
               "paizi":"丰田凯美瑞 三箱 2.0T自动 乘坐5人",
               "luyou":"/datt"
            }
        ]

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.big{
  width: 100%;
  // position: fixed;top: .95rem;
  padding-top: .95rem;
}
 .box{
        width: 100%;
        background-color: #fff;
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
        height: 0.5rem;line-height: .4rem;
        text-align: center;
        background: #f6f6f6;
        font-size:0;
        p{
        font-size:.1rem;

        }
      }
</style>
