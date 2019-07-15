<template>
<!-- 其他处理效果 -->
  <div class="other_processing">
 <Nthings :p="p"></Nthings>
  </div>
</template>

<script>
import Nthings from './../../Main_branch/nothings'
export default {
  data() {
    return {
 p:'当前页面没有相关数据哦'
    }
  },
  methods: {

  },
  components: {
Nthings
  }
}
</script>

<style scoped lang='less'>

</style>
