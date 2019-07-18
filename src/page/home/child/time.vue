<template>
        <div class="abverbial_time">
           <div>
             <p class="datatime" @click="showdata"> 07月07日 </p>
             <p class="weektime"> 周日 &nbsp; 12:00</p>
            </div>
             <div>
              <p class="center">2天</p>
              <img src="./../img/jiantou@2x.png" >
             </div>
             <div>
             <p class="datatime">07月09日</p>
             <p class="weektime"> 周二 &nbsp; 12:00</p>
           </div>
           <Ctime v-if="showtime"></Ctime>
       </div>
</template>

<script>
// import Ctime from './chosetime'
export default {
  data() {
    return {
       showtime:false
    }
  },
  methods: {
     showdata(){
       this.showdata=true;
     }
  },
  components: {
  //  Ctime
  }
}
</script>

<style scoped lang='less'>
  .abverbial_time{
    padding: .05rem .16rem;
    height: .55rem;
    border-bottom: .01rem solid #EEEEEE;
     display: flex;
     justify-content: space-between;
     font-size: .14rem;
      background: #fff;
     div{

        &:nth-child(2){
          margin: 0 .15rem;
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
        }
       &:last-child{
          text-align: right;
        //  margin-left: .2rem;
       }
       .datatime{
         font-size: .16rem;
         font-weight: bold;
         letter-spacing: 2px;
       }
       .weektime{
        letter-spacing: 1px;
       }
       .center{
        //  text-align: center;
         color: #FFCC00;
       }

     }


  }
</style>
