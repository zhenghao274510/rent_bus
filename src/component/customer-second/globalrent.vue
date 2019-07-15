<template>
  <div class="globalrent">
      <ul>
        <li>自助服务</li>
        <li><span>驾照翻译</span><img src="./img/fanhui-2@2x.png" alt=""></li>
      </ul>

      <ul>
        <li>取车须知</li>
        <li><span>取车流程</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>订单条款</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>订单条款</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
      </ul>

      <ul>
        <li>取车须知</li>
        <li><span>取车流程</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>订单条款</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>保险条款</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
      </ul>

      <ul>
        <li>常见问题</li>
        <li><span>预定相关</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>用车相关</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>保险相关</span><img src="./img/fanhui-2@2x.png" alt=""></li>
      </ul>
      <div class="domestic-foot">
          <!-- <div class="domestic-foot-left">客服热线</div>
          <div class="domestic-foot-right">在线客服</div> -->
          <router-link to="/evaluate" class="domestic-foot-left">客服热线</router-link>
          <router-link to="#" class="domestic-foot-right">在线客服</router-link>
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

<style scoped lang="less">
    .globalrent{
        margin-top: 0;  
        background: #f6f6f6;
        ul{
            list-style: none;
            margin: 0;
            margin-left: -0.4rem;
            margin-bottom: .1rem;
            background: #fff;
            li{
                font-size: .13rem;
                color: #888;
                height: .45rem;
                line-height: .45rem;
                border-bottom: 1px solid #ccc;
                overflow: hidden;
                text-indent: .15rem;
                span{
                  color: #444;
                  float: left;
                  text-indent: .15rem;  
                }
                img{
                    float: right;
                    width: .08rem;
                    height: .13rem;
                    margin-top: .16rem;
                    margin-right: .15rem;
                }
            }
            li:last-child{
                border-bottom: none;
            }
        }
        .domestic-foot{
            height: .55rem;
            background: #fff;
            display: flex;
            flex-direction: row;
            .domestic-foot-left{
                text-decoration: none;
                width: 1.2rem;
                height: .4rem;
                font-size: .16rem;
                margin-left: .15rem;
                margin-top: .07rem;
                text-align: center;
                line-height: .4rem;
                border: 1px solid #cfcfcf;
                border-radius: .03rem;
                color: #666;
            }
            .domestic-foot-right{
                text-decoration: none;
                font-size: .16rem;
                width: 2.12rem;
                height: .4rem;
                margin-right: .15rem;
                margin-top: .07rem;
                text-align: center;
                line-height: .4rem;
                color: #fff;
                background: #ffcc00;
                border-radius: .03rem;
                margin-left: .1rem;
            }
        }  
    }
</style>
