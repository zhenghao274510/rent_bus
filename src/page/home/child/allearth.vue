<template>
  <div class="earth">
       <img src="./../img/earth/banner-quanqiuzu@2x.png">
       <ul class="kefulist">
           <li>
             <router-link to="">
                 <i class="card"></i>
                 <p>驾照翻译</p>
             </router-link>
           </li>
             <li>
             <router-link to="">
                 <i class="msg"></i>
                 <p>租车须知</p>
             </router-link>
           </li>
             <li>
             <router-link to="">
                 <i class="more"></i>
                 <p>常见问题</p>
             </router-link>
           </li>

       </ul>
       <p class="info">洛杉矶取车需提供中国驾照英文翻译件+中国驾照原件</p>
       <div class="order">
         <ul>
            <li>
              <p class="address">取车地点</p>
              <router-link to="">
               <div>
                 <p>洛杉矶</p>
                 <span class="english">Los Angeles</span>
               </div>
               <div>
                 <p>洛杉矶国际机场</p>
                 <span class="english">Los Angeles Airport </span>
               </div>
              </router-link>
            </li>
             <li>
              <p class="address">还车地点</p>
              <router-link to="">
               <div>
                 <p>洛杉矶</p>
                 <span class="english">Los Angeles</span>
               </div>
               <div>
                 <p>洛杉矶国际机场</p>
                 <span class="english">Los Angeles Airport </span>
               </div>
              </router-link>
            </li>
         </ul>
         <Wtime></Wtime>
         <div class="juan">
           <div class="juan_info">
            <span class="fl_l">折扣代码</span>
            <span class="fl_r">CDP#</span>
           </div>
            <div class="juan_info">
            <span class="fl_l">优惠代码</span>
            <span class="fl_r">PC#</span>
           </div>
         </div>
         <div class="end">
              <input type="button" value="确认订单">
         </div>
      </div>




  </div>
</template>

<script>
import Wtime from './time'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
   Wtime
  }
}
</script>

<style scoped lang='less'>
.earth{
  width: 100%;
  margin-top: .76rem;
  img{
    width: 100%;
    height: auto;
  }
    .kefulist{
      background: #FFF;
      padding:.14rem 0;
      width: 100%;
      height: .73rem;
      display:flex;
      justify-content: space-around;
      align-items: center;
      li{
        width: 33.333%;
        height: 100%;
        a{
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          p{
            font-size: .12rem;
            letter-spacing: 2px;
          }
          i{
            display:block;
          }
            .card{
              width: .27rem;
              height: .19rem;
              background: url('./../img/earth/jiazhaofanyi@2x.png') no-repeat;
              background-size:100% 100%;
            }
              .msg{
              width: .23rem;
              height: .19rem;
              background: url('./../img/earth/xuzhi@2x.png') no-repeat;
              background-size:100% 100%;
            }
             .more{
              width: .24rem;
              height: .24rem;
              background: url('./../img/earth/wenhao@2x.png') no-repeat;
              background-size:100% 100%;
            }
        }
      }

  }
  .info{
    text-indent: .15rem;
    line-height: .29rem;
    font-size: .13rem;
    color: #666666;
  }
  .order{
     width: 100%;
     padding: 0 .15rem;
     background: #FFF;
     ul{
       width: 100%;
       li{
         padding: .1rem 0;
         height:.78rem;
         border-bottom: .01rem solid #EEE;
         display: flex;
         flex-direction: column;
         justify-content: space-around;

         .address{
           font-size: .12rem;
           color: #666666;
           &::before{
           content:'';
           width: .05rem;
           height: .05rem;
           border-radius: 50%;
           background: #F48A2B;
           display: inline-block;
           margin-right: .12rem;
           vertical-align: middle;
         }
         }
         a{
           display: flex;
           justify-content: space-around;
           div{
             font-size: 0;
             &:first-child{
               width: .8rem;
               margin: 0 .6rem 0 .15rem;
             }
               &:last-child{
                 flex: 1;
               }
               p{
                 font-size: .14rem;
               }
               .english{
                 font-size: .12rem;
                 transform: scale(.8);
               }
           }

         }
       }
     }
     .juan{
       font-size: 0;
       .juan_info{
         height:.34rem;
         line-height: .34rem;
         overflow: hidden;
         border-bottom:.01rem solid  #EEE;


        span{
          display: block;
          height: 100%;
          font-size: .12rem;
        }
        .fl_l{
          float: left;
            &::before{
           content:'';
           width: .05rem;
           height: .05rem;
           border-radius: 50%;
           background: #BFBFBF;
           display: inline-block;
           margin-right: .12rem;
           vertical-align: middle;
         }
        }
        .fl_r{
          float: right;
        }


       }
     }

  }
   .end{
     width: 100%;
     font-size: 0;
     padding-top: .25rem;
     input{
       width: 3.45rem;
       margin: .15rem auto;
       height: .4rem;
       background:#FFCC00;
       color: #FFF;
       font-size:.15rem;
       text-align: center;
     }
   }


}
</style>


