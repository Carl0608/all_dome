<template>
  <div>
    <div
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClik: false,
      X: "",
      y: "",
    };
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
</style>
