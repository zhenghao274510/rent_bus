<template>
  <!-- 分是共享 -->
  <div class="time_share">
          <Nthings :p='p'>
    </Nthings>
       
  </div>
</template>

<script>
import Nthings from "./../nothings";
export default {
  data() {
    return {
        p:" 您目前没有符合开发票的订单"
    };
  },
  methods: {},
  components: {Nthings}
};
</script>

<style scoped lang='less'>
.time_share{
    font-size: .14rem;
    color:#888;
}
</style>
