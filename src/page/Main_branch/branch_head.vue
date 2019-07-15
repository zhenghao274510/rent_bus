<template>
  <div class="header">
    <slot name="left"></slot>
    <span>{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.header {
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  font-size: 0.16rem;
  color: #222;
  .leftImg {
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    left: 0.16rem;
    bottom: 0.1rem;
  }
  .rightImg{
    position: absolute;
    right: .15rem;
    bottom: 0rem;
    font-size: .12rem;
    color:#666;
  }
}
</style>
