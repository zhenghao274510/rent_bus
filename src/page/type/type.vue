<template>
<div class="box">
  <div class="top">
     <mt-header class="text" title="选择车型">
  <router-link to="/home/china" slot="left">
    <mt-button > <img class="img" src="./img/fanhui@2x.png" alt=""></mt-button>
  </router-link>
</mt-header></div>
    <div class="tab" >
        <mt-navbar v-model="selected">
  <mt-tab-item id="1" class="daohang">按价格</mt-tab-item>
  <mt-tab-item id="2" class="daohang">按车型</mt-tab-item>
</mt-navbar>

  </div>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div class="main_">
      <ul class='left'>
        <li ref="leftlist" v-for="(item,index) in leftlist " :key="index" @click="addbg(index)">{{item}}</li>
      </ul>
      <ul class="right">
        <router-link to="/affirm_order">
        <li v-for="(item,index) in list[p] " :key='index'  @click="choose(index)">
          <div class="le">
            <img :src='item.img'>
          </div>
          <div class="ri">
            <p>{{item.p1}}</p>
            <p>{{item.p2}}</p>
            <p><span>{{item.span}}</span>{{item.p3}}</p>
          </div>
        </li></router-link>
      </ul>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <div class="main_">
      <ul class='left'>
        <li ref="rightlist" v-for="(item,index) in rightlist " :key="index" @click="addbg2(index)">{{item}}</li>
      </ul>
      <ul class="right">
        <router-link to="/affirm_order">
        <li v-for="(item,index) in list[pp] " :key='index' @click="choose(index)">
          <div class="le">
            <img :src='item.img'>
          </div>
          <div class="ri">
            <p>{{item.p1}}</p>
            <p>{{item.p2}}</p>
            <p><span>{{item.span}}</span>{{item.p3}}</p>
          </div>
        </li></router-link>
      </ul>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rightlist:[
        '全部车型','经济型','舒适型','豪华型','商务型','中巴/大巴','SUV','MPV'
      ],
      leftlist:[
        '价格不限','150以下','150——300','300——500','500以上',
      ],
      p:0,
      pp:0,
      list:[
      // list0:
      [
        {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },
        {
          img:require('./img/853@2x.png'),
          p1:'丰车致炫',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'118元'
        },
         {
          img:require('./img/849@2x.png'),
          p1:'雪佛兰科鲁兹',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'99元'
        },
        {
          img:require('./img/870@2x.png'),
          p1:'大众朗逸',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'95元'
        },

      ],
      // list1:
      [ {
          img:require('./img/849@2x.png'),
          p1:'雪佛兰科鲁兹',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'99元'
        },
        {
          img:require('./img/870@2x.png'),
          p1:'大众朗逸',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'95元'
        },],
        // list2:
        [  {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },],
        // list3:
        [ {
          img:require('./img/849@2x.png'),
          p1:'雪佛兰科鲁兹',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'99元'
        },
        {
          img:require('./img/870@2x.png'),
          p1:'大众朗逸',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'95元'
        },],
        // list4:
        [ {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },
        
        ],
        // list5:
        [
          {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },
        {
          img:require('./img/853@2x.png'),
          p1:'丰车致炫',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'118元'
        },
         {
          img:require('./img/849@2x.png'),
          p1:'雪佛兰科鲁兹',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'99元'
        },
        {
          img:require('./img/870@2x.png'),
          p1:'大众朗逸',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'95元'
        },
        ],

 // list2:
        [  {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },],
        // list3:
        [ {
          img:require('./img/849@2x.png'),
          p1:'雪佛兰科鲁兹',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'99元'
        },
        {
          img:require('./img/870@2x.png'),
          p1:'大众朗逸',
          p2:'三箱五座|1.6T自动',
          p3:'/日均',
          span:'95元'
        },],
        // list4:
        [ {
          img:require('./img/744@2x.png'),
          p1:'雪佛兰迈锐宝',
          p2:'三箱五座|1.5T自动',
          p3:'/日均',
          span:'145元'
        },
        {
          img:require('./img/840拷贝@2x.png'),
          p1:'宝沃BX5',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'136元'
        },
        {
          img:require('./img/848@2x.png'),
          p1:'别克昂科拉',
          p2:'SVU五座|1.5T自动',
          p3:'/日均',
          span:'125元'
        },],
        



        ],
       

selected:'1'
    }
  },
  methods: {
    choose(ind){
      let currentcar=this.list[this.pp][ind];
     
     this.$store.commit('choosecar',currentcar);
    
    },
   addbg(index){
     this.$refs.leftlist.forEach(item => {
       item.className='';
     });
    //  console.log(e.target)
      this.$refs.leftlist[index].className='active'
     
      this.p= index;
   },
   addbg2(index){
     console.log(index)
     this.$refs.rightlist.forEach(item => {
       item.className='';
     });
    //  console.log(e.target)
      this.$refs.rightlist[index].className='active'
     
      this.pp= index;
   }


  },
  components: {

  },mounted(){
    this.$refs.leftlist[0].className='active'
    this.$refs.rightlist[0].className='active'
  }
}
</script>

<style scoped lang='less'>
.main_{
  // background: #F6F6F6;
  background-color: #F6F6F6;
}

.top{
    overflow: hidden;
    // height: .46rem;
    .text{
    font-size: .16rem;
    // height: 100%;
    }
    .mint-header{
    color: #222;
    }
   
}
.img{
    width: .22rem;
    height: .22rem;
}
.mint-header{
  background-color:white;
}
.danhang{
  font-size: .13rem;
}
.mint-navbar .mint-tab-item.is-selected{
  color:#FFCC00;
  border:none;
}
.mint-navbar{
  border-bottom:1px solid black;
}
.main_{
  display: flex;
  background: #f6f6f6;
  // height: 200%;
}
.main_ .left{
  width: .8rem;
  font-size: .12rem;
  overflow: hidden;
  margin:0;
    text-align: center;
    padding: 0;
  li{
    width: 100%;
    height: .4rem;
    line-height: .4rem
  }
  //  li:nth-child(1){
  //     background-color: #fff;
  //     color: #FFCC00;
  //      }
}
.right{
  background: #f6f6f6;
  flex:1;
    li{
       background-color: #fff;
       width: 100%;
       height: .99rem;
    margin-bottom: .08rem;
    display: flex;
    // flex-direction: column;
    .le{
      width: 1rem;
      img{
        width: 1.11rem;
        margin: .2rem .08rem;
        // height: .65rem;
        // padding: .17rem 0 .18rem .13rem; 
      }
    }
    .ri{
        p{
          margin:0;
          padding: 0;
          font-size: .15rem;
          padding-right: .34rem;
          margin-left: .23rem;
        }
       p:nth-child(1){
      margin-top: .1rem;
         font-size: .16rem;
        //  padding: .1rem 0 .06rem 0 ;
       }
       p:nth-child(2){
         font-size: .11rem;
         padding: .1rem 0 .06rem 0 ;
        //  padding: .06rem 0 ;
         border-bottom:.01rem solid #DFDFDF;
        color: #888888;
       }
       p:nth-child(3){
         color: #888888;
         font-size: .11rem;
         span{
         font-size: .18rem;
         padding: .1rem 0 .06rem 0 ;
        //  border-bottom:.01rem solid #DFDFDF;
        color: #FFCC00;
        }
       }
    }
  }
}
.active{
  background-color: #fff;
  color: #FFCC00;
}
.main_ ul li :nth-of-type(2){
  background-color: #fff;
}

</style>
