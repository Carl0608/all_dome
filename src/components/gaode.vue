<template>
  <div>
    <!-- <el-amap
      vid="amapDemo"
      :amap-manager="amapManager"
      :events="mapEvents"
      class="amap-demo"
    >
    </el-amap> -->
    <el-amap
      class="amap-box"
      vid='amap-vue'
      :center="center"
      :zoom="zoom"
      :events="mapEvents"
    ></el-amap>
  </div>
</template>

<script>
// import { AMapManager } from "vue-amap";
import VueAMap from "vue-amap";
// let amapManager = new VueAMap.AMapManager();

export default {
  data() {
    return {
      zoom: 12,
      amapManager: new VueAMap.AMapManager(),
      center: [121.59996, 31.197646],
      events: "",
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/darkblue"); //自定义的高德地图的样式，我选的是马卡龙
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.amap-box {
  width: 100%;
  height: 500px;
}
</style>
