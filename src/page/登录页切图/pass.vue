<template>
  <div class=".box">
      <div class="top">
          <mt-header class="text" title="">
  <router-link to="/denglu" slot="left">
    <mt-button > <img class="img" src="./fanhui@2x.png" alt=""></mt-button>
  </router-link>
</mt-header>
      </div>
      <div class="foot">
          <p>登录</p>
          <div class="box1">
              <img src="./yonghu@2x.png">
              <input type="text" placeholder='请输入手机号/账号'>
          </div>
          <div class="box2">
              <img src="./mima@2x.png">
              <input type="text" placeholder='请输入密码'>
              <span></span>
          </div>
          <p class="p2">注册账号/<router-link to="/denglu">手机验证码登录</router-link> <span>忘记密码?</span></p>
          <button class="btn">登录</button>
          <p>登录即已同意<span>《服务协议》</span>和<span>《服务协议及补充协议》</span></p>
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
.box{
    display: flex;
    height: 100%;
}
.top{
    overflow: hidden;
    // height: .46rem;
    .text{
    font-size: .16rem;
    }
    .mint-header{
 color: #222;
    }
   .img{
    // width: .22rem;
    height: .22rem;
}
}

.mint-header{
  background-color:white;
}
.foot{
    font-size: .15rem;
    padding: .52rem .44rem 0 .47rem;
    flex: 1;
     p:nth-child(1){
         font-size: .23rem;
         color: #222222;
         padding-bottom: .38rem;
       }
       p:nth-child(4){
         font-size: .13rem;
        padding:.21rem 0;
        display: flex;
        color: #596D92;
        span{
            display: inline-block;
                flex:1;
                text-align: right;
                display: flex;
                white-space: nowrap;
                justify-content: flex-end;
                padding-right: 0;
        }
        a{
            color: #596D92
        }
       }
       .box1,.box2{
           display: flex;
           padding-bottom: .15rem;
           border-bottom: 1px solid #ccc;
        //    input{
        //         font-size: .15rem;
        //    }
        input{
                padding-left: .14rem;
            }
           img{
               width: .16rem;
            height: .22rem;
   
           }
           span{
            padding: 0 .11rem;
           }
       }
       .box2{
           padding: .22rem 0 .18rem 0;
            
            span{
                display: inline-block;
                flex:1;
                text-align: right;
                display: flex;
                white-space: nowrap;
                color: #FFCC00;
                justify-content: flex-end;
                padding-right: 0;
            }
       }
       .btn{
           width: 100%;
           height: .4rem;
           border-radius: .075rem;
           color: #ffff;
           font-size: .18rem;
       }
       p:nth-child(6){
         font-size: .12rem;
        padding-bottom:.25rem;
        display: flex;
        white-space: nowrap;
        padding: 2.35rem 0 0 0;
        span{
            color: #0099FF;
        }
       }

}
</style>
