<template>
  <div class="minedata">
    <div class="common_head">
        <router-link to="/identity" class="common_head_icon"></router-link>
        个人资料
    </div>
    <div class="minedata-authentication">
        <img src="./img/shenfenzheng@2x.png" class="img1">
        <span class="text1">身份认证</span>
        <span class="text2">已完成</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>   
    <div class="minedata-authentication">
        <img src="./img/jiashizheng@2x.png" class="img1">
        <span class="text1">驾照认证</span>
        <span class="text2">未认证</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="minedata-authentication-place"></div>
    <div class="minedata-authentication authentication1">
        <img src="./img/shouji1@2x.png" class="img1 img3">
        <span class="text1">联系方式</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="minedata-authentication-bot"></div> 
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

<style scoped  lang="less">
    .minedata{
        .common_head{
            height: .45rem;
            font-size: .16rem;
            text-align: center;
            line-height: .45rem;
            color: #222;
            position: relative;
            border-bottom: 1px solid #dfdfdf;
            .common_head_icon{
                position: absolute;
                left: .15rem;
                top: .11rem;
                width: .22rem;
                height: .22rem;
                background: url('./img/fanhui3@2x.png') no-repeat;
                background-size: .12rem;
            }
        }
        .minedata-authentication{
            height: .45rem;
            position: relative;
            border-bottom: 1px solid #dfdfdf;
            .img1{
                position: absolute;
                top: .14rem;
                left: .16rem;
                width: .23rem;
                height: .17rem;
            }
            .text1{
                position: absolute;
                top: .14rem;
                left: .6rem;
                font-size: .14rem;
                color: #444;
            }
            .text2{
                position: absolute;
                top: .15rem;
                right: .34rem;
                font-size: .12rem;
                color: #666;
            }
            .img2{
                position: absolute;
                top: .17rem;
                right: .15rem;
                width: .08rem;
                height: .13rem;
            }
        }
        .authentication1{
            border-bottom: none;
            .img1{
                width: .17rem;
                height: .24rem;
                top: .1rem;
            }
        }
        .minedata-authentication-place{
            height: .1rem;
            background: #f6f6f6;
        }
        .minedata-authentication-bot{
            height: 4.74rem;
            background: #f6f6f6;
        }
    }
</style>
