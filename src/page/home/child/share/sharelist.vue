<template>
  <div class="sharelist" ref="container">
     <div class="backtop" v-if="gotop" @click="hidden">
         <img src="./../../img/xiala@2x.png" alt="">
    </div>
       <div class="shareinfo">
          <p>郑州花园路店</p>
          <p>郑州市金水区花园路145号润达商务一楼大厅</p>

       </div>
       <ul >
         <li v-for="(item,index) in sharelist" :key="index">
           <router-link to="">
             <div class="shareleft">
                  <img :src="item.src" alt="">
                  <p class="sharename">{{item.name}}</p>
             </div>
             <div class="shareright">
                 <p class="sharehao">{{item.card}}</p>
                 <p class="sharemore"><span v-for="(con,ind) in item.info" :key="ind">{{con}}</span></p>
                 <p class="sharetime"> <i>0.19</i>元/分钟+ <i>0.99</i>元/公里</p>
             </div>
           </router-link>
         </li>
       </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data() {
    return {
     sharelist:[],
     gotop:false
    }
  },
  mounted () {
       this.axios.get('./static/data/sharelistdata.json').then((res)=>{
         this.sharelist=res.data.data;
         console.log(this.sharelist)
       }).catch((err)=>{
          console.log(err);
       }),
      this.$nextTick(()=>{
     this._initScroll();

   })
  },
  methods: {
      _initScroll(){
        this.container=new BScroll(this.$refs.container,{
          click:true,
           probeType:3
         });
      this.container.on('scroll',(pos)=>{
        this.gotop=true;
        this.$refs.container.style.top=.78+'rem';

       });

    },
    hidden(){
      this.gotop=false;
       this.$refs.container.style.top=3.05+'rem';
    }




  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.sharelist{
  width: 100%;
  overflow-y: auto;
  position: absolute;
  top: 3.05rem;
  background: #FFF;
  z-index: 99;
  transition: all .6s ease;
    .backtop{
    width:100%;
    height: .2rem;
    background: #FFF;
    // border-bottom: .01rem outset #DFDFDF;
    overflow: hidden;
    img{
      width: .16rem;
      height: .1rem;
      margin: .05rem auto;
    }
  }
  .shareinfo{
    height: .64rem;
    padding: .15rem;
    border-bottom: .01rem solid #DFDFDF;
    p{
      &:first-child{
        color: #444;
        font-size: .14rem;
      }
       &:last-child{
        color: #666;
        font-size: .12rem;
      }
    }
  }
  ul{
    padding: 0 .15rem;
    width: 100%;
    li{
       width: 100%;
       height: .84rem;
       border-bottom: .01rem solid #DFDFDF;
       &:last-child{
         border:none;
       }
       a{
         display: flex;
         height: 100%;
         width: 100%;
         justify-content: space-between;
         align-items: center;
         .shareleft{
           margin-right: .1rem;
           text-align: center;
             img{
           width: 1.04rem;
           height: .61rem;
            }
            .sharename{
              font-size: .13rem;
              color: #888;
            }

         }
         .shareright{
             flex: 1;
              font-size: .12rem;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
             .sharehao{

              color: #444;
             }
             .sharemore{
                //  display: dlock;
               span{
                 padding: .05rem .13rem ;
                 border:.01rem outset #888;
                 border-radius: .04rem;
                 margin-right: .05rem;
               }
             }
             .sharetime{
                 i{
                   color: #FFCC00;
                 }
             }
         }

       }
    }
  }
}
</style>
