<template>
  <div class="star" @click="star">
     <img src="./img/logo@2x.png">
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    star(){
      this.$router.push('/guide');
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.star{
  width: 100%;
  height: 100%;
}
</style>
