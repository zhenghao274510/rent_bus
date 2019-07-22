<template>
  <div class="abverbial_time">
    <div @click="showPopup">
      <p class="datatime">{{starM | Time}}月{{ starD| Time}}日</p>
      <p class="weektime">{{starW}}&nbsp;{{starH |Time}}:00</p>
    </div>
    <div>
      <p class="center">{{sixTime}}</p>
      <img src="./../img/jiantou@2x.png" />
    </div>
    <div @click="showend">
      <p class="datatime">{{endM | Time}}月{{ endD | Time}}日</p>
      <p class="weektime">{{endW}}&nbsp;{{endH |Time}}:00</p>
    </div>
    <!-- 时间插件 -->
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="Cancel"
        @confirm="Confirm"
      />
    </van-popup>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showtime: false,
      show: false,
      minDate: new Date(),
      maxDate: new Date(2030, 1, 1),
      currentDate: new Date(),
      dir: "",
      starM: "7",
      starD: "7",
      starH: "12",
      starW: "周日",
      endM: "7",
      endD: "9",
      endH: "12",
      endW: "周二"
    };
  },
  methods: {
    showdata() {
      this.showtime = true;
    },
    showPopup() {
      this.show = true;
      this.dir = "star";
    },
    showend() {
      this.show = true;
      this.dir = "end";
    },
    Cancel() {
      this.show = false;
    },
    Confirm(value) {
      this.show = false;
      let myArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      let time = new Date(value);
      let W = time.getDay();
      if (this.dir == "star") {
        this.starM = time.getMonth() + 1;
        this.starD = time.getDate();
        this.starH = time.getHours();
        this.starW = myArr[W];
        let obj1={tostarM:this.starM,tostarD:this.starD,tostarH:this.starH,tostarW:this.starW}
        this.$store.commit('tostartime',obj1);
      } else {
        this.endM = time.getMonth() + 1;
        this.endD = time.getDate();
        this.endH = time.getHours();
        this.endW = myArr[W];
        let obj2={toendM:this.endM,toendD:this.endD,toendH:this.endH,toendW:this.endW}
        this.$store.commit('toendtime',obj2);

      }
      
    }
  },
  computed: {
    //  计算时间差
    sixTime() {
      let mouthsX = this.endM - this.starM;
      let dateX = this.endD - this.starD;
      if (mouthsX == 0 && dateX > 0) {
        return dateX + "天";
      } else if (mouthsX > 0 && dateX > 0) {
        return mouthsX + "月" + dateX + "天";
      } else if (mouthsX > 0 && dateX == 0) {
        return mouthsX + "月";
      } else {
        return "选择时间";
      }
    }

  },
  filters: {
    Time(val) {
      val < 10 ? (val = "0" + val) : val;
      return val;
    }
  },
  beforeDestroy(){
  

      let day=this.sixTime.slice(0,1);
      this.$store.commit('Xday',day);
    


   
  },
 
};
</script>

<style scoped lang='less'>
.abverbial_time {
  width: 100%;
  padding: 0.05rem 0.1rem;
  height: 0.55rem;
  border-bottom: 0.01rem solid #eeeeee;
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  background: #fff;
  div {
    width: 100%;
    &:nth-child(2) {
      margin: 0 0.15rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &:last-child {
      text-align: right;
    }
    .datatime {
      font-size: 0.16rem;
      font-weight: bold;
    }
    .weektime {
      letter-spacing: 1px;
    }
    .center {
      color: #ffcc00;
    }
  }
}
</style>
