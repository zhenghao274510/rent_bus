<template>
  <div>
      <div class="hand">
        <mt-header title="我的订单" class="hand1" > 
        <router-link to="/" slot="left">
            <mt-button> <img class="left" src="./img/fanhui@2x.png" alt=""></mt-button>
        </router-link>
        </mt-header>
      </div>
      <div class="hang">
        <ul>
          <li>
            <router-link to="/erji">国内租</router-link>
          </li>
          <li>
            <router-link to="/erji1">分时共享</router-link>
          </li>
          <li>
            <router-link to="/erji2">全球租</router-link>
          </li>
      </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
window.onload=function(){
  var olink=document.getElementsByClassName("show");
  var count=0;
  olink.onclick=function(){
    count=count+1;
    if(count%2==0){
      olink.style.Color="#FFCC00";
    }
    else{
      olink.style.Color="black";
    }
  }
}
export default {
  data() {
    return {
          show:false,
          show1:false
    }
  },
  methods: {
      erji(item){
        this.$router.push({
          path:"/datd/${item.id}"
        })
      }
  },
  components: {

  }
}
</script>

<style scoped lang = "less">
a{
  text-decoration: none;
  color:black;
}
      .hand{
        width: 100%;
        position: fixed;
        bottom: 0 0.1rem;
        .hand1{
        background: white;
        color:black;
        font-size:.15rem;
        
        }
        img{
          width: 0.13rem;
          height: 0.22rem;
        }
      }
      .hang{
        padding-top: .16rem;
        font-size: 0;
        width: 100%;
        background:white;
        position: fixed;
        top: .39rem;
        ul{
          border-bottom: 1px solid #f6f6f6;
          li{
          height: 0.4rem;
          width: 33%;
          display:inline-block;
          font-size:.12rem;
          line-height: .4rem;
          text-align: center;
          a{
          font-size:.12rem;
        color:rgba(68,68,68,1);

          /* color: */
          }
          .router-link-active{
            color: #FFCC00;
            /* text-decoration: none; */
          }
        }
        
        }
      }
      
     
     
</style>
