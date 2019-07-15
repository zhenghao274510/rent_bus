<template>
  <!-- 自行处理记录 -->
  <div class="discretion">
    <div class="tit" @click="dis">
      <p>全部</p>
      <img src="./../img/xiala@2x.png" alt />
    </div>
    <ul :class="{list:true,diss:disp}">
      <li v-for="(item,index) in arr" :key="index" @click="toplin(index)">
        <a href="javaScript:;" :class="{toplin:index==num}">
          <p>{{item}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disp: false,
      arr: ["全部", "待审核", "审核中", "审核不通过", "已完成"],
      num: 0
    };
  },
  methods: {
    dis() {
      this.disp = !this.disp;
    },
    toplin(index) {
      this.num = index;
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.discretion {
  .tit {
    background: #fff;
    padding: 0.16rem 0;
    text-align: center;
    p {
      display: inline-block;
    }
    img {
      display: inline-block;
      width: 0.13rem;
      height: 0.08rem;
      margin-left: 0.05rem;
    }
  }
  .list {
    background: #fff;
    display: none;
    li {
      border-top: 1px solid #dfdfdf;
      a {
        display: block;
        text-align: center;
        padding: 0.16rem 0;
      }
      .toplin {
        color: #ffcc00;
      }
    }
  }
  .diss {
    display: block;
  }
}
</style>
