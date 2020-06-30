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
  methods: {
    getRandom() {
      this.mockData = Mock.mock({
        //生成数据规则
        "list|1-10": [
          {
            "id|+1": 1
          }
        ]
      });
      document.body.innerHTML +=
        "<pre>" + JSON.stringify(this.mockData, null, 4) + "</pre>"; // 展示到页面中
    },
    getData() {
      this.$axios.post("/list").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
