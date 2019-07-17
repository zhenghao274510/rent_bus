<template>
  <!-- 年租 -->
  <div class="annual_rental">
    <ul class="city">
      <li>
        <p>取车城市</p>
        <div>
          <router-link to="/">
            <span>城市</span>
            <img src="./img/xiala@2x.png" />
          </router-link>
        </div>
      </li>
      <li>
        <p>取还点</p>
        <div>
          <router-link to="/">
            <span>郑州动物园自助点</span>
          </router-link>
        </div>
      </li>
    </ul>
    <!-- <p>{{$route.params.id}}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        // id:
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.annual_rental {
  padding: 0.12rem 0 0 0.25rem;
  .city {
    padding-bottom: 0.19rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    li {
      flex: 1;
      p{
          font-size: .12rem;
          color:#666;
          margin-bottom:.05rem;
      }
      a {
          font-size: .14rem;
          color:#444;
        img {
          display: inline-block;
          width: 0.08rem;
          height: 0.05rem;
        }
      }
    }
    li:last-of-type{
        margin-left:-.7rem;
    }
  }
}
</style>
