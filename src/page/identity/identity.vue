<template>
  <div class="identity">
    <div class="common_head">
        <router-link to="/minedata" class="common_head_icon"></router-link>
        身份认证
    </div>
    <div class="identity-authentication">
        <img src="./img/shenfenzheng@2x.png" class="img1">
        <span class="text1">证件</span>
        <span class="text2">身份证/驾驶证</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="identity-authentication authentication2">
        <img src="./img/xingming@2x.png" class="img1">
        <span class="text1">姓名</span>
        <span class="text2">刘燕飞</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="identity-authentication">
        <img src="./img/zhengjianhao@2x.png" class="img1">
        <span class="text1">证件号</span>
        <span class="text2">410106********5625</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="identity-authentication authentication3">
        <img src="./img/youxiaoqi@2x.png" class="img1">
        <span class="text1">有效期</span>
        <span class="text2">未填写</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="identity-authentication-place"></div>
    <div class="identity-authentication authentication4">
        <img src="./img/renlianshibie@2x.png" class="img1">
        <span class="text1">人脸识别</span>
        <span class="text2">已通过</span>
        <img src="./img/fanhui-2@2x.png" class="img2">
    </div>
    <div class="identity-authentication-color"></div>
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

<style scoped lang="less">
    .identity{
        .common_head{
            background-color: #fff;
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
        .identity-authentication{
            background-color: #fff;
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
        .identity-authentication-place{
            height: .1rem;
            background: #f6f6f6;
        }
        .authentication2{
            .img1{
                width: .19rem;
                height: .2rem;
            }
        }
        .authentication3{
            border-bottom: none;
            .img1{
                top: .12rem;
                width: .23rem;
                height: .23rem;
            }
        }
        .authentication4{
            border-bottom: none;
            .img1{
                width: .19rem;
                height: .2rem;
            }
        }
        .identity-authentication-color{
            height: 3.83rem;
            background: #f6f6f6;
        }
    }
</style>
