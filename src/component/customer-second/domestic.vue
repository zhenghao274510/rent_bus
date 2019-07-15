<template>
  <div class="domestic">
      <ul>
        <li>预定用车</li>
        <li><span>租车预计</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>取还车流程</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>订单修改</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>订单取消</span><img src="./img/fanhui-2@2x.png" alt=""></li>
      </ul>

      <ul>
        <li>费用相关</li>
        <li><span>费用构成</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>车辆预授权/押金</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
      </ul>

      <ul>
        <li>事故及故障</li>
        <li><span>车辆出险</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>车辆故障</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>保险责任</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>更换轮胎</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>维修押金说明</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>仪表盘指示灯说明</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
      </ul>

      <ul>
        <li>其他相关</li>
        <li><span>发票</span><img src="./img/fanhui-2@2x.png" alt=""></li>
        <li><span>违章</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>物品遗失</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>燃油说明</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
        <li><span>会员相关</span><img src="./img/fanhui-2@2x.png" alt=""></li> 
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
    .domestic{
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
