<template>
  <div class="mock">
    <button @click="getRandom"> 生成数据 </button>
    <!-- <video
      controls="controls"
      width="100%"
    >
      <source
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        type="video/mp4"
      >
      <source
        src="1.ogg"
        type="video/ogg"
      >
      Your browser does not support the video tag.
    </video> -->
    <button @click="add">点击提示音</button>
    <audio
      id="audio"
      src="http://mp3.9ku.com/mp3/610/609411.mp3"
    />
  </div>
</template>

<script>
import Mock from "mockjs"; // node方式引入 (CommonJS)
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  watch: {
    errCount: function () {
      this.aplayAudio();
    },
  },
  methods: {
    /* 提示音 */
    add() {
      const audio = document.getElementById("audio");
      audio.play();
    },
    getRandom() {
      this.mockData = Mock.mock({
        //生成数据规则
        "list|1-10": [
          {
            "id|+1": 1,
          },
        ],
      });
      document.body.innerHTML +=
        "<pre>" + JSON.stringify(this.mockData, null, 4) + "</pre>"; // 展示到页面中
    },
    getData() {
      this.$axios.post("/list").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
