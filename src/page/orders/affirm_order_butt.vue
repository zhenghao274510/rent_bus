<template>
  <div>
      <a href="javaScript:;" @click="tag">
    <img v-if="!value"  src="./img/kaiguanguan@2x.png" />
    <img v-else src="./img/kaiguanhei@2x.png" alt /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
     value:this.$store.state.affirm_order,
    };
  },
  methods: {
      tag(){
         this.value=!this.value
        this.$store.commit('affirm_orders',this.value)
      }
  },
  components: {},
  
};
</script>

<style scoped lang='less'>
a{
    img {
  width: 0.24rem;
  height: 0.15rem;
}
}



</style>
