<template>
   <div class="home">
         <Mine></Mine>
     <!-- home 顶部 -->
     <div class="home_top">
         <a href="#" class="back" @click='mine'><span class="self icon"></span></a> <span class="logo"></span>
          <div class="twoicon"><a href="#"><i  class="search"></i></a> <a href="#"><i class="see"></i></a></div>
     </div>
     <!-- home 导航 -->
     <ul class="home_nav" @click='changetop($event)'>
          <li><router-link to="/home/china" :class="{'active':active}">国内租</router-link></li>
          <li><router-link to="/home/share">分时共享</router-link></li>
          <li><router-link to="/home/try">试驾</router-link></li>
          <li><router-link to="/home/allearth">全球租</router-link></li>
          <li><router-link to="/home/long">长租</router-link></li>
     </ul>
    <div>

    <transition :name="transitionName" mode="out-in">
           <router-view/>
    </transition>

    </div>
</div>
</template>

<script>
import Mine from './navigation'



export default{
    data(){
        return{
          active:true,
          transitionName:'',
          //  控制我的信息显示隐藏
          show:false

        }
    },
    components:{
   Mine
    },
    mounted(){
      this.$router.push('/home/china');
      this.show=false;
    },
    methods:{
      //  控制影藏
      mine(){
        this.show=true;
        this.$store.commit('changehome',this.show)
      },
      // 导航切换
      changetop(e){
          this.active=false;
          e.target.className='active';

      },


    },
     watch: {
      // 使用watch 监听$router的变化
      $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index){
          // 设置动画名称
          this.transitionName = 'slide-right';
        } else{
          this.transitionName = 'slide-left';
        }
      }
     }

        }





</script>

<style scoped lang="less">
.home{
  width: 100%;
  height: 100%;
   overflow: hidden;
    .home_top{
      width: 100%;
      height: .44rem;
      display: flex;
      padding: 0 .15rem;
      background: #FFF;
      justify-content: center;
      align-items: center;
      position: fixed;
      top:0;
      left: 0;
      z-index: 99;
      .back{
        display: flex;
        width: .44rem;
        height: .44rem;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
      }
      .self{
        background: url('./img/zhanghao@2x.png') no-repeat;
        background-size: 100% 100%;

      }
      .icon{
       display: block;
       width: .22rem;
       height: .22rem;
      }
        .logo{
          display: inline-block;
          margin-right: .1rem;
          width: 1.1rem;
          height: .25rem;
          background: url('./img/LOGO@2x.png') no-repeat;
          background-size: 100% 100%;
        }
        .twoicon{
          display: flex;
          justify-content: left;
          position: absolute;
          right: 0;
          top:0;
          a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: .44rem;
            height: .44rem;
              .search{
                width: .22rem;
                height: .22rem;
            background: url('./img/mendianchaxen@2x.png') no-repeat;
          background-size: 100% 100%;
          }
          .see{

            width: .22rem;
            height: .22rem;
            background: url('./img/xiaoxi@2x.png') no-repeat;
          background-size: 100% 100%;
          }

          }

        }


    }
    .home_nav{
      width: 100%;
      height: .32rem;
      background: #FFF;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0;
      position: fixed;
      top:.43rem;
      z-index: 99;

      li{
        width: 20%;
        height: 100%;
        text-align: center;
        a{
          display:block;
          line-height: .32rem;
          width: 100%;
          height: 100%;
          font-size: .12rem;
          z-index: 6;
        }
        .active{
          color: #FFCC00;
        }
      }
    }
  .map{
    width: 100%;
    height: 3rem;

  }
}
</style>
