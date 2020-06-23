<template>
  <div>
    <h1>测试</h1>
    <!-- <div class="myClass">
    </div> -->
    <!-- <div style="width:405px;height:305px">
      <videoPlayer
        class="vjs-custom-skin videoPlayer"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></videoPlayer>
    </div> -->
    <!-- <svg>
      <rect width="300" height='200' style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
    </!-->
    <!-- <VueEditor v-model="value" @change="aaA"></VueEditor>
    </div> -->
    <!-- <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      style="height:1080px"
      @click="getClickInfo"
      :scroll-wheel-zoom='true'
    >
    </baidu-map> -->
    <!-- <video
      id="myplayer"
      src="ezopen://open.ys7.com/D80826857/1.hd.live"
      width="200"
      height="200"
      poster="[这里可以填入封面图片URL]"
      [autoplay]
      controls
      playsInline
      webkit-playsinline
    >
    </video> -->

    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange"
    >
    </el-cascader>

    <el-row>
      <div style="width:173px;heihgt:71;background:rgba(0,58,166,.8);padding:10px;font-size:14px">
        <p>编号：143456</p>
        <p>所属支队：滨江长河支队</p>
        <p>出警状态：出警中</p>
      </div>
    </el-row>
  </div>
</template>
<script>
//富文本
// import { VueEditor } from "vue2-editor";
//直播
// import "video.js/dist/video-js.css";
// import { videoPlayer } from "vue-video-player";
// import "videojs-flash";
import { regionDataPlus } from "element-china-area-data";
export default {
  components: {
    // videoPlayer
    // VueEditor
  },

  data() {
    return {
      value: "",
      playerOptions: {
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        height: "300",
        language: "zh-CN",
        aspectRatio: "16:9",
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          currentTimeDisplay: false, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: false, // 暂停和播放键
          progressControl: false, // 进度条
          fullscreenToggle: false // 全屏按钮
        },
        sources: [
          {
            type: "rtmp/mp4",
            src:
              "rtmp://rtmp01open.ys7.com/openlive/933b365272af4240aeed5ef125f0aaf6.hd"
          }
        ],
        techOrder: ["flash"],
        autoplay: true,
        controls: true
      },
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
      options: regionDataPlus,
      selectedOptions: []
    };
  },
  mounted() {
    // var map = new BMap.Map("container");
    // var point = new BMap.Point(116.404, 39.915);
    // map.centerAndZoom(point, 15);
    // let player;
    // setTimeout(() => {
    //   player = new EZUIKit.EZUIPlayer("myPlayer");
    // }, 2);
    // player.play();
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handler({ BMap, map }) {
      var point = new BMap.Point(120.219375416, 30.2592444615);
      map.centerAndZoom(point, 13);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中

      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03"
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>

<style >
.myClass {
  width: 100px;
  height: 100%;
}
.map {
  width: 100%;
  height: 300px;
}
</style>
