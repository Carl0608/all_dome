<template>
  <div class="map">
    <baidu-map
      class="my_map"
      :center="center"
      :zoom='zoom'
      @ready="handler"
      :scroll-wheel-zoom="true"
      @click="getPoint"
    >
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <bm-marker
        :position="{lng:clikCenter.lng, lat: clikCenter.lat}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <!-- <bm-label
          content="我爱北京天安门"
          :labelStyle="{color: 'red', fontSize : '24px'}"
          :offset="{width: -35, height: 30}"
        /> -->
      </bm-marker>
    </baidu-map>

  </div>
</template>

<script>
// import BMap from "vue-baidu-map";
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      clikCenter: {
        lng: 0,
        lat: 0
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    getPoint(e) {
      console.log(e);
      this.clikCenter.lng = e.point.lng;
      this.clikCenter.lat = e.point.lat;
    },
    handler({ BMap, map }) {
      // this,
      console.log(BMap, map);
      this.center.lng = 120.15;
      this.center.lat = 30.28;
      this.zoom = 13;
    },
    init() {
      // var map = new BMap.Map("my_map");
      // var point = new BMap.Point(116.404, 39.915);
      // map.centerAndZoom(point, 15);
    }
  }
};
</script>

<style lang="scss"  scoped>
.my_map {
  width: 99vw;
  height: 99vh;
  /deep/.anchorBL {
    display: none;
  }
}
</style>
