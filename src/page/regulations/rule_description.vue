<template>
<!-- 规则说明 -->
  <div class="rule_description">
        <!-- 头部 -->
    <Branch :title="title"  >
      <router-link to="/Illegal_processing" class="leftImg" slot="left">
        <img src="./../Main_branch/img/fanhui@2x.png" alt />
      </router-link>
    </Branch>
      <ul>
          <li>
              1、在用车期间发生的违章需由客户承担。
          </li>
           <li>
              2、违章发现后，在神州自动使用违章押金结算前，或者客户 使用其他方式支付违章费用前，客户可通过自行处理入口获 取处理违章所需的
          </li>
           <li>
              3、如逾期未办理租赁期间的违章，将收取违约金。
          </li>
           <li>
              4、违章处理完毕后，您可继续下单使用分时租车。
          </li>
      </ul>
  </div>
</template>

<script>
import Branch from "./../Main_branch/branch_head";
export default {
  data() {
    return {
        title:'规则说明'
    }
  },
  methods: {

  },
  components: {
Branch
  }
}
</script>

<style scoped lang='less'>
.rule_description{
    font-size: .13rem;
    color:#444;
    ul{
        li{
            width: 3.5rem;;
            padding:.06rem .14rem;
        }
    }
}
</style>
