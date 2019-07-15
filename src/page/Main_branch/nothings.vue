<template>
  <div class="nothings">
    <img src="./img/weixaio@2x.png" />
    <p>{{p}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["p"],
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.nothings {
  font-size: 0.14rem;
  color: #888;
  text-align: center;
  position: relative;
  left: 0;
  bottom: -1.8rem;
  img {
    margin:0 auto;
    margin-bottom:.3rem;
    width: 2rem;
  }
}
</style>
