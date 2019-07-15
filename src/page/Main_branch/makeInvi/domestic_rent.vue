<template>
  <!-- 国内租 -->
  <Nthings :p='p'>
    </Nthings>
</template>

<script>
import Nthings from "./../nothings";
export default {
  data() {
    return {
        p:'您目前没有符合开发票的订单'
    };
  },
  methods: {},
  components: {Nthings}
};
</script>

<style scoped>
</style>
