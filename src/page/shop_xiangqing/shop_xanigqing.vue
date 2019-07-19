<template>
  <div class="box">
<div class="top">
      <mt-header class="text" title='门店详情'>
        <router-link to="/choseshop" slot="left">
          <mt-button>
           <img class="img" src="./img/fanhui@2x.png" alt />
          </mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="pla">
        <p>郑州花园路店</p>
        <p> 
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">  5.0
        <span>1254人评</span>
        </p>
        <p> <img src="./img/shizhong@2x.png"> <span>营业中</span>   <a href="#">8:00-21:00</a> </p>
        <p> <img src="./img/dingwei3@2x.png" alt=""> 郑州市金水区花园路145号润达商务一楼大厅</p>
        <div class="mo">
            <div class="left"> <img src="./img/kefu@2x.png" alt=""> <span>400-6166666</span></div>
            <div class="right"><img src="./img/phone_grey@2x.png" alt=""><span>15793678536</span></div>
        </div>
    </div>
    <p id="kong"></p>
    <div class="text">
        <p>精选评价</p>
        <div><span>136********5</span> <span class="pan">今天 9:00</span>
        <p>
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        <img src="./img/xing@2x.png" alt="">
        </p>
        </div>
        <p>办理便捷，服务态度很好，车辆干净整洁</p>
        <router-link to="">
        <p class="p4">查看全部22589条评论></p></router-link>
    </div>
    <div class="foot">
        <button class="btn">选此门店</button>
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

<style scoped lang='less'>
// #app{
//     background:rgba(246,246,246,1);
// }
.p4{
        text-align: right;
}
.box{
    font-size: .15rem;
}
.top {
  overflow: hidden;
  // height: .46rem;
  .text {
    font-size: 0.16rem;
  }
  .mint-header {
    color: #222;
  }
  .mint-header-title{
      text-align: center;
  }
  .img {
    // width: .22rem;
    height: 0.22rem;
  }
}

.mint-header {
  background-color: white;
}
.pla{
    width: 100%;
    padding: .16rem .15rem;
    border-top: 1px solid #DFDFDF;
    border-bottom: 1px solid #DFDFDF;
    p:nth-child(1){
        // display: none
        color: #222222;
        font-size: .16rem;
        padding-bottom: .34rem;
    }
    p:nth-child(2){ 
        display: flex;
        align-items: baseline;
        font-size: .13rem;
        // .pan{
            // display: inline-block;
            // padding-left: .2rem;
            // margin-left: .1rem;
        // }
        img{
            width:.14rem;
            height: .13rem;
            margin-right: .1rem;
        }
        span{
            display: block;
            flex:1;
            text-align: right;
            font-size: .11rem;
            color: #888888;
        }
    }
    p:nth-child(3){
        display: flex;
        align-items: baseline;
        font-size: .13rem;
        color:#444444;
        padding: .14rem 0;
        img{
            width: .13rem;
            height: .13rem;
        }
        span{
            padding: 0 .1rem;
            border-right:1px solid #DFDFDF; 
        }
        a{
            padding-left: .1rem;
            color:#444444;
        }
    }
    p:nth-child(4){
        font-size: .13rem;
        padding: .14rem 0;
        display: flex;
        align-items: baseline;
        border-top: 1px solid #DFDFDF;
        border-bottom: 1px solid #DFDFDF;
        img{
            width: .13rem;
            height: .13rem;
            margin-right: .1rem;
        }
    }
    .mo{
        display: flex;
        align-items: baseline;
        margin-top: .15rem;
        // padding: 0 .23rem;
        .left{
        width: 50%;
        display: flex;
        border-right:1px solid #DFDFDF; 
        align-items: baseline;
        justify-content: center;
        align-items: center;
        img{
            width: .13rem;
            height: .13rem;
        }
        }
        .right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        align-items: baseline;
        img{
            width: .08rem;
            height: .13rem;
        }
        }
    }
}
#kong{
    width: 100%;
    height: .08rem;
    background-color: #F6F6F6;
}
.text{
    padding: .16rem .15rem;
    p:nth-child(1){
        font-size: .14rem;
    }
    div:nth-child(2){
        display: flex;
        align-items: baseline;
        font-size: .14rem;
        padding: .16rem 0;
        justify-content: space-between;
        p{
            display: flex;
            img{
            width: .14rem;
            margin-left: .1rem;
            height: .13rem;
        }}
        }
    p:nth-child(3){
        font-size: .12rem;
        color: #666666;
        padding-bottom: .14rem;
        // border-bottom: 1px solid #DFDFDF;   
    }
    p:nth-child(4){
        border-top: 1px solid #DFDFDF;   
        font-size: .12rem;
        padding-top: .11rem;
        color: #888888;
        display: flex;
        flex-direction: row-reverse;
    }
}
.foot{
    width: 100%;
    height: .55rem;
    padding: .08rem .15rem;
    position: absolute;
    bottom: 0;
    .btn{
        background-color: #FFCC00;
        width: 100%;
        height:100%;
        color: #ffffff
    }
}
</style>
