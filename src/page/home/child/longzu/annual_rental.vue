<template>
  <!-- 年租 -->
  <div class="annual_rental">
    <ul class="city">
      <li>
        <p>取车城市</p>
        <div>
          <p @click="to">
            <span v-text="text"></span>
            <img src="./img/xiala@2x.png" />
          </p>
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

    <Time style="height:.8rem;padding-top:.2rem;border:none;"></Time>
    <div class="btn">
      <button>立即选车</button>
    </div>
  </div>
</template>

<script>
import Time from "./../time";
export default {
  data() {
    return {
      text:'城市'
    };
  },
  methods: {
    to(){
      this.$store.commit('addcity','city');
      this.$router.push('/city');
    }
  },
  components: {
    Time
  },
  mounted(){
    // console.log(this.$store.state.city)
    if(this.$store.state.city!==''){
        this.text = this.$store.state.city;
      }  
  },

};
</script>

<style scoped lang='less'>
.annual_rental {
  padding: 0.12rem 0.25rem 0 0.25rem;

  .city {
    padding-bottom: 0.19rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    li {
      flex: 1;
      p {
        font-size: 0.12rem;
        color: #666;
        margin-bottom: 0.05rem;
      }
      p {
        font-size: 0.14rem;
        color: #444;
        img {
          display: inline-block;
          width: 0.08rem;
          height: 0.05rem;
        }
      }
    }
    li:last-of-type {
      margin-left: -0.7rem;
    }
  }
  .btn {
    font-size: 0;
    background: #fff;
    display: flex;
    align-items: center;
    button {
      // display: block;
      width: 3.45rem;
      height: 0.4rem;
      margin: 0.1rem auto;
      background: #ffcc00;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.4rem;
      text-align: center;
    }
  }
}
</style>
