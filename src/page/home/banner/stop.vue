<template>
  <baidu-map
    :center="center"
    :zoom="zoom"
    :dragging="true"
    :scroll-wheel-zoom="true"
    class="map"
    @ready="handler"
  >
    <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="false" :autoLocation="true"></bm-geolocation>

    <div v-for="marker of markers">
      <bm-marker
        :position="{lng: marker.lng, lat: marker.lat}"
        :title="marker.name"
        @click="infoWindowOpen(marker)"
        :icon="{url: './static/homeimg/tingchechang2@2x.png', size: {width: 30, height: 30}}"
      >
        <bm-info-window
          :title="marker.title"
          :position="{lng: marker.lng, lat: marker.lat}"
          :show="marker.showFlag"
          @close="infoWindowClose(marker)"
          @open="infoWindowOpen(marker)"
          style="width:25px;height:20px"
        ></bm-info-window>
      </bm-marker>
    </div>
  </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      baidumapSwitch: false,
      center: "",
      zoom: 17,
      //  location: "../choseshop/img/fangdajing@2x.png",
      keyword: "请输入搜索关键词",
      markers: [
        {
          title:'兰德停车场',
          lng: 113.693604,
          lat: 34.785049,
          showFlag: false //flag放在每一条数据里
        },
        {
          title:'丹尼斯停车场',
          lng: 113.696604,
          lat: 34.785949,
          showFlag: false
        },
        {
          title:'丹尼斯百货花园店地下停车场',
          lng:113.693604,
          lat:34.785949,
          showFlag: false
        },
         {
          title:'金珠广场停车场',
          lng: 113.692604,
          lat: 34.784949,
          showFlag: false
        },
         {
          title:'动物园停车场',
          lng: 113.695604,
          lat: 34.784949,
          showFlag: false
        },
         {
          title:'豫博大厦-停车场',
          lng: 113.695604,
          lat: 34.783949,
          showFlag: false
        },
        {
          title:'新田360广场-停车场',
          lng: 113.691604,
          lat: 34.783949,
          showFlag: false
        },
      ]
    };
  },
  methods: {
    //百度地图初始化（这个一定要！否则地图回加载不出来）
    infoWindowClose(marker) {
      marker.showFlag = false;
    },
    infoWindowOpen(marker) {
      marker.showFlag = true;
    },
    handler({ BMap, map }) {
      let _this = this; // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          _this.center = { lng: 113.693604, lat: 34.785049 }; // 设置center属性值
          _this.autoLocationPoint = { lng: 113.693604, lat: 34.785049 }; // 自定义覆盖物
          _this.initLocation = true;
          // console.log('center:', _this.center)	// 如果这里直接使用this是不行的
        },
        { enableHighAccuracy: true }
      );
    },

    //点击获取到当前经纬度
    getClickInfo(e) {
      // console.log(e.point.lng);
      // console.log(e.point.lat);
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
  },
  components: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
.map {
  height: 4.5rem;
  /deep/.BMap_bubble_title{
      font-size: .12rem;
  }
  /deep/.anchorBL {
    a {
      img {
        width: 0 !important;
        height: 0;
      }
    }
  }
}
</style>
