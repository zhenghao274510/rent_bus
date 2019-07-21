<template>
  <div class="map">
  <baidu-map
    :center="center"
    :zoom="zoom"
    :dragging="true"
    :scroll-wheel-zoom="true"
    class="map"
    @ready="handler"
  >

    <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-geolocation>
    <bm-marker
       :position="center"

      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
      :icon="{url: './static/homeimg/dingweiweizhi@2x.png', size: {width: 30, height: 50}}"
    ></bm-marker>
    <bm-view class="map" center="郑州">
  </bm-view>
    <bm-driving :start="star" :end="end" :auto-viewport="true" location="郑州"></bm-driving>


  </baidu-map>
  <span class="yuding" @click='change'>预定</span>
  </div>
</template>

<script>
export default {
  data() {
    return {

      showsharelist: false,
      baidumapSwitch: false,
      one: "",
      center: "",
      zoom: 16,
      star:this.$store.state.homedata.from,
      end:this.$store.state.homedata.to,


    };
  },
  methods: {
    //  点击修改状态
     change(){

       this.showsharelist=true;

        this.$store.commit('share_show',this.showsharelist);

     },
    //百度地图初始化（这个一定要！否则地图回加载不出来）
    handler({ BMap, map }) {
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        r => {

          this.center = { lng: r.longitude, lat: r.latitude }; // 设置center属性值
          this.autoLocationPoint = { lng: r.longitude, lat: r.latitude }; // 自定义覆盖物
          this.initLocation = true;
          // console.log('center:', this.center)
        },
        { enableHighAccuracy: true }
      );
    },
    // //点击获取到当前经纬度
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
    //双向绑定经纬度以及缩放尺寸
    syncCenterAndZoom(e) {
      const { lng, lat } = e.target.getCenter();
      this.center.lng = lng;
      this.center.lat = lat;
      this.zoom = e.target.getZoom();
    },
    //经纬度同步
    baidumap() {
      this.baiduDevicelocationx = this.center.lng;
      this.baiduDevicelocationy = this.center.lat;
    }
  }
};
</script>

<style scoped lang='less'>
.map {
  height: 100%;
  margin-top: 0.76rem;

  }
  .yuding{
    position: fixed;
    bottom: .1rem;
    left: 50%;
    transform: translateX(-50%);
    width: .68rem;
    height: .68rem;
    background: #FFCC00;
    display: block;
    border-radius: 50%;
    border: .05rem solid #FFF;
    color: #FFF;
    font-size: .17rem;
    line-height: .58rem;
    text-align: center;

  }





</style>
