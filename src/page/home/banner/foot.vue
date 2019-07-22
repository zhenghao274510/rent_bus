<template>
  <div class="box">
    <footer>
      <router-link to="/gation/line">
        <img src="./img/luxian@2x.png" alt />
        <span>路线</span>
      </router-link>
      <router-link to='/gation/station'>
        <img src="./img/jiayouzhan@2x.png" alt />
        <span>加油站</span>
      </router-link>
      <router-link to='/gation/stop'>
        <img src="./img/tingchechang@2x.png" alt />
        <span>停车场</span>
      </router-link>
      <router-link to='/gation/store'>
        <img src="./img/mendian0@2x.png" alt />
        <span>门店</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:''
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  text-decoration: none;
  color: #000;
}
.box {
  width: 100%;
  footer {
    background: #fff;
    width: 100%;
    height: 1.04rem;
    display: flex;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      font-size: 0.12rem;
      align-items: center;
      justify-content: center;
      color: #444444;
      img {
        width: 0.45rem;
        height: 0.45rem;
      }
      span {
        display: block;
        margin-top: 0.12rem;
      }
    }
  }
}
</style>
