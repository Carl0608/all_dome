<template>
  <div id="cavs">
    <div class="item_all">
      <!-- <img
        class="item_img"
        src="../assets/test.png"
        alt=""
        :style="`left:${index*10}%`"
        v-for="(item,index) in imgList"
        :key="index"
      > -->
      <!-- <div class="item bd_top">
      </div>
      <div class="item bd_top bd_right">
      </div>
      <div class="item ">
      </div>
      <div class="item bd_right">
      </div>
      <div class="item bd_left bd_top">
      </div>
      <div class="item bd_top">
      </div>
      <div class="item bd_left ">
      </div>
      <div class="item ">
      </div>
      <div class="item  bd_top">
      </div>
      <div class="item  bd_right bd_top">
      </div>
      <div class="item">
      </div>
      <div class="item bd_right">
      </div>
      <div class="item bd_top bd_left">
      </div>
      <div class="item bd_top ">
      </div>
      <div class="item bd_left bd_bottom">
      </div>
      <div class="item">
      </div> -->
      <div
        class="item"
        v-for="(item,index) in itemList"
        :key="index"
        :class="{bd_top:topList.includes(item.num),bd_right:rightList.includes(item.num),bd_left:leftList.includes(item.num),bd_bottom:bottomList.includes(item.num),bd_color:item.grade&&(currentNum>=item.grade)}"
      >
        <div
          class="item_img"
          :class="{pos_img:pos_img_list.includes(item.num)}"
          v-show="item.img"
        >
          <img
            src="../assets/test.png"
            alt=""
          >
          <div>A1-1</div>
          <div>
            {{item.num}}
          </div>
        </div>

      </div>
    </div>
    <!-- <canvas
      id="myCanvas"
      width="200"
      height="100"
    >
    </canvas> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNum: 400,
      topList: [2, 3, 4, 5, 6, 7, 8, 9],
      rightList: [2,6, ],
      leftList: [3,7, ],
      bottomList: [],
      pos_img_list: [3, 7, 11, 15],
      itemList: [
        { num: 1, img: true },
        { num: 2, img: false },
        { num: 3, img: true, gradeNum: 12, grade: 1200 },
        { num: 4, img: true, gradeNum: 9, grade: 900 },
        { num: 5, img: true, gradeNum: 10, grade: 1000 },
        { num: 6, img: true, gradeNum: 11, grade: 1100 },
        { num: 7, img: true, gradeNum: 8, grade: 800 },
        { num: 8, img: true, gradeNum: 7, grade: 700 },
        { num: 9, img: true, gradeNum: 6, grade: 600 },
        { num: 10, img: true, gradeNum: 3, grade: 300 },
      ],
    };
  },
  mounted() {
    // let cnv = document.getElementById("myCanvas");
    // let cxt = cnv.getContext("2d");
    // cxt.moveTo(0, 0);
    // cxt.lineTo(100, 0);
    // cxt.moveTo(100, 0);
    // cxt.lineTo(200, 0);
    // cxt.stroke();
  },
};
</script>

<style lang="scss" scoped>
.item_all {
  width: 760px;
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
}
.item {
  width: 49%;
  height: 202px;
  display: flex;

  position: relative;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
.item_img {
  width: 49px;
  height: 56px;
  text-align: center;
  position: absolute;
  top: -30px;
  right: 100px;
  z-index: 1;
}
.bd_left {
  border-left: 2px solid #999999;
}
.bd_right {
  border-right: 2px solid #999999;
}
.bd_top {
  border-top: 2px solid #999999;
}
.bd_bottom {
  border-bottom: 2px solid #999999;
}
.bd_color {
  border-color: #1795eb !important;
}
.pos_img {
  // left: -24px !important;
  // top: 70px;
}
</style>
