<template>
  <div>
    <!-- <div
      id="box"
      @click="dow"
    >
      <img
        v-if="isClik"
        class="img_l"
        :style="`left:${x}%;top:${y}%`"
        src="../assets/map_d.png"
        alt=""
      >
    </div> -->
    <div
      id="demoCanvas"
      ref="demoCanvas"
    >

    </div>
    <Alarm
      :imgList="list"
      :time="300"
    />
    <!-- <img
      :src="imgSrc"
      alt=""
    > -->
    <img
      style="width:100px;height:100px"
      src="http://aifire.oss-cn-hangzhou.aliyuncs.com/data/svga/108(1).png"
      alt=""
    >
  </div>
</template>

<script>
import SVGA from "svgaplayerweb";
import Alarm from "./component/sequenceAnimation"; //序列帧组件
export default {
  components: {
    Alarm,
  },
  data() {
    return {
      isClik: false,
      X: "",
      y: "",
      bgImg: "http://aifire.oss-cn-hangzhou.aliyuncs.com/data/svga/alarm.svga",
      imgSrc: "",
      list: [
        require("../assets/alarm/_00000.png"),
        require("../assets/alarm/_00001.png"),
        require("../assets/alarm/_00002.png"),
        require("../assets/alarm/_00003.png"),
        require("../assets/alarm/_00004.png"),
        require("../assets/alarm/_00005.png"),
        require("../assets/alarm/_00006.png"),
        require("../assets/alarm/_00007.png"),
        require("../assets/alarm/_00008.png"),
        require("../assets/alarm/_00009.png"),
      ],
    };
  },
  mounted() {
    // this.setFill();
    // this.SVGA();
    // let num = 0;
    // this.imgSrc = this.list[num];
    // setInterval(() => {
    //   num++;
    //   // for(let i =0;i<this.list.length;i++){
    //   this.imgSrc = this.list[num];
    //   if (num > 9) {
    //     num = 0;
    //   }
    //   // }
    // }, 50);
  },
  methods: {
    dow(e) {
      console.log(e);
      this.x = ((e.offsetX - 10) / 500) * 100;
      this.y = ((e.offsetY - 10) / 500) * 100;
      this.isClik = true;
      console.log(this.x, this.y);
      this.$forceUpdate();
    },
    SVGA() {
      let player = new SVGA.Player("#demoCanvas");
      let parser = new SVGA.Parser("#demoCanvas");
      parser.load(
        "http://aifire.oss-cn-hangzhou.aliyuncs.com/data/svga/alarm.svga",
        function (videoItem) {
          //this.bgImg，图片路径需要线上地址，本地引用会报错
          player.setVideoItem(videoItem);
          player.startAnimation();
        }
      );
    },
    setFill() {
      //适配不同屏
      var $_canvas = document.getElementById("demoCanvas"),
        w = window.innerWidth,
        h = window.innerHeight,
        screen_proportion = h / w,
        svga_proportion = 16 / 9;
      if (screen_proportion > svga_proportion) {
        //长屏幕
        $_canvas.style.width = h / svga_proportion + "px";
        $_canvas.style.left = (w - h / svga_proportion) / 2 + "px";
      } else {
        $_canvas.style.height = w * svga_proportion + "px";
        $_canvas.style.top = (h - w * svga_proportion) / 2 + "px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#box {
  margin: 10%;
  width: 500px;
  height: 500px;
  border: 1px solid #333;
  position: relative;
}
.img_l {
  width: 20px;
  height: 20px;
  position: absolute;
}
#demoCanvas {
  //因需求背景为动态图
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
