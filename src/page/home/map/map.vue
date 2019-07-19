<template>
<!-- <div class="map"> -->


    <baidu-map
     :center="center"
     :zoom="zoom"
     :dragging="true"
     :scroll-wheel-zoom="true"
     class="map"
     @ready="handler">
       <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
     <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-geolocation>
     <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"
     :icon="{url: './static/homeimg/dingweiweizhi@2x.png', size: {width: 30, height: 50}}">





    </bm-marker>
   </baidu-map>
   <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
          baidumapSwitch:false,
        center: "",
         zoom: 16,
      //  location: "../choseshop/img/fangdajing@2x.png",
       keyword: "请输入搜索关键词",
    }
  },
  methods: {
     //百度地图初始化（这个一定要！否则地图回加载不出来）
     handler({ BMap, map }) {
        let _this = this;	// 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
				var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
					// console.log(r);
					_this.center = {lng: r.longitude, lat: r.latitude };		// 设置center属性值
					_this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};		// 自定义覆盖物
					_this.initLocation = true;
					// console.log('center:', _this.center)	// 如果这里直接使用this是不行的
				},{enableHighAccuracy: true})
      },

//点击获取到当前经纬度
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
baidumap(){
 this.baiduDevicelocationx = this.center.lng
 this.baiduDevicelocationy = this.center.lat
},

  }


}
</script>

<style scoped lang='less'>
.map{
  height: 2.5rem;
  margin-top: .76rem;
 
}
</style>
