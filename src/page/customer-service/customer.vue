<template>
  <div class="customer">
      <CustomerHead></CustomerHead>
      <ul>
          <li>
              <router-link to="/customer/domestic">国内租</router-link>
          </li>
          <li>
              <router-link to="/customer/timesharing">分时共享</router-link>
          </li>
          <li>
              <router-link to="/customer/testdrive">试驾</router-link>
          </li>
          <li>
              <router-link to="/customer/globalrent">全球租</router-link>
          </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import CustomerHead from './../../component/head/customer-head'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
      CustomerHead
  }
}
</script>

<style scoped lang="less">
    .customer{
        ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            height: .32rem;
            margin-top: 0;
            margin-bottom: 0;
            border-bottom: 1px solid #dfdfdf;
            li{
                flex:1;
                a{
                    text-decoration: none;
                    display: block;
                    font-size: .13rem;
                    text-align: center;
                    line-height: .32rem;
                    color: #444;
                }
                .router-link-active{
                    color: #ffcc00;
                }
            }
        }
    }
</style>
