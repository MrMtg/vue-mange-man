<template>
  <div class="head_box">
    <el-carousel ref="card" indicator-position="outside" height="500px" type="">
      <el-carousel-item v-for="(i, index) in item" :key="index">
        <img :src="i.imgSrc" alt="图片丢失" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          id: "1",
          imgSrc: require("../assets/images/1.png"),
        },
        {
          id: "2",
          imgSrc: require("../assets/images/2.png"),
        },
        {
          id: "3",
          imgSrc: require("../assets/images/3.png"),
        },
        {
          id: "4",
          imgSrc: require("../assets/images/4.png"),
        },
        {
          id: "5",
          imgSrc: require("../assets/images/5.png"),
        },
      ],
    };
  },
};
/*   created() {
    this.handle_switch();
  },
  methods: {
    handle_switch() {
      if (this.$refs.form === "card") {
        this.form.type = "";
        this.form.ref = "";
      } else {
        this.form.type = "card";
        this.form.ref = "card";
      }
    },
  }, */
</script>

<style lang="less" scoped>
.head_box {
  margin: 0 auto;
  width: 80%;
  .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    :nth-child(2n) {
      background-color: #99a9bf;
    }
    :nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    img {
      width: 1040px;
      height: 504px;
    }
  }
}
</style>
