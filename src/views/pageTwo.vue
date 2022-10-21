<template>
  <div>
    <h3>如果图片紊乱，请刷新一下页面</h3>
    <div class="content">
      <div v-for="(i, index) in item" :key="index">
        <img :src="i.img_pic" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          id: 1,
          img_pic: require("../assets/images/1-1.png"),
        },
        {
          id: 2,
          img_pic: require("../assets/images/1-7.png"),
        },
        {
          id: 3,
          img_pic: require("../assets/images/1-9.png"),
        },
        {
          id: 4,
          img_pic: require("../assets/images/1-4.png"),
        },
        {
          id: 5,
          img_pic: require("../assets/images/1-5.png"),
        },
        {
          id: 6,
          img_pic: require("../assets/images/1-6.png"),
        },
        {
          id: 7,
          img_pic: require("../assets/images/1-2.png"),
        },
        {
          id: 8,
          img_pic: require("../assets/images/1-8.png"),
        },
        {
          id: 9,
          img_pic: require("../assets/images/1-3.png"),
        },
        {
          id: 10,
          img_pic: require("../assets/images/1-10.png"),
        },
        {
          id: 11,
          img_pic: require("../assets/images/1-11.png"),
        },
        {
          id: 12,
          img_pic: require("../assets/images/1-12.png"),
        },
        {
          id: 13,
          img_pic: require("../assets/images/1-13.png"),
        },
        {
          id: 14,
          img_pic: require("../assets/images/1-14.png"),
        },
        {
          id: 15,
          img_pic: require("../assets/images/1-15.png"),
        },
        {
          id: 16,
          img_pic: require("../assets/images/1-16.png"),
        },
        {
          id: 17,
          img_pic: require("../assets/images/1-1.png"),
        },
        {
          id: 18,
          img_pic: require("../assets/images/1-7.png"),
        },
        {
          id: 19,
          img_pic: require("../assets/images/1-9.png"),
        },
        {
          id: 20,
          img_pic: require("../assets/images/1-4.png"),
        },
        {
          id: 21,
          img_pic: require("../assets/images/1-5.png"),
        },
        {
          id: 22,
          img_pic: require("../assets/images/1-6.png"),
        },
        {
          id: 23,
          img_pic: require("../assets/images/1-2.png"),
        },
        {
          id: 24,
          img_pic: require("../assets/images/1-8.png"),
        },
        {
          id: 25,
          img_pic: require("../assets/images/1-3.png"),
        },
        {
          id: 26,
          img_pic: require("../assets/images/1-10.png"),
        },
        {
          id: 27,
          img_pic: require("../assets/images/1-11.png"),
        },
        {
          id: 28,
          img_pic: require("../assets/images/1-12.png"),
        },
        {
          id: 29,
          img_pic: require("../assets/images/1-13.png"),
        },
        {
          id: 30,
          img_pic: require("../assets/images/1-14.png"),
        },
        {
          id: 31,
          img_pic: require("../assets/images/1-15.png"),
        },
        {
          id: 32,
          img_pic: require("../assets/images/1-16.png"),
        },
        {
          id: 33,
          img_pic: require("../assets/images/1-1.png"),
        },
        {
          id: 34,
          img_pic: require("../assets/images/1-7.png"),
        },
        {
          id: 35,
          img_pic: require("../assets/images/1-9.png"),
        },
        {
          id: 36,
          img_pic: require("../assets/images/1-4.png"),
        },
        {
          id: 37,
          img_pic: require("../assets/images/1-5.png"),
        },
        {
          id: 38,
          img_pic: require("../assets/images/1-6.png"),
        },
        {
          id: 39,
          img_pic: require("../assets/images/1-2.png"),
        },
        {
          id: 40,
          img_pic: require("../assets/images/1-8.png"),
        },
        {
          id: 41,
          img_pic: require("../assets/images/1-3.png"),
        },
        {
          id: 42,
          img_pic: require("../assets/images/1-10.png"),
        },
        {
          id: 43,
          img_pic: require("../assets/images/1-11.png"),
        },
        {
          id: 44,
          img_pic: require("../assets/images/1-12.png"),
        },
        {
          id: 45,
          img_pic: require("../assets/images/1-13.png"),
        },
        {
          id: 46,
          img_pic: require("../assets/images/1-14.png"),
        },
        {
          id: 47,
          img_pic: require("../assets/images/1-15.png"),
        },
        {
          id: 48,
          img_pic: require("../assets/images/1-16.png"),
        },
        {
          id: 49,
          img_pic: require("../assets/images/1-1.png"),
        },
        {
          id: 50,
          img_pic: require("../assets/images/1-7.png"),
        },
        {
          id: 51,
          img_pic: require("../assets/images/1-9.png"),
        },
        {
          id: 52,
          img_pic: require("../assets/images/1-4.png"),
        },
        {
          id: 53,
          img_pic: require("../assets/images/1-5.png"),
        },
        {
          id: 54,
          img_pic: require("../assets/images/1-6.png"),
        },
        {
          id: 55,
          img_pic: require("../assets/images/1-2.png"),
        },
        {
          id: 56,
          img_pic: require("../assets/images/1-8.png"),
        },
        {
          id: 57,
          img_pic: require("../assets/images/1-3.png"),
        },
        {
          id: 58,
          img_pic: require("../assets/images/1-10.png"),
        },
        {
          id: 59,
          img_pic: require("../assets/images/1-11.png"),
        },
        {
          id: 60,
          img_pic: require("../assets/images/1-12.png"),
        },
        {
          id: 61,
          img_pic: require("../assets/images/1-13.png"),
        },
        {
          id: 62,
          img_pic: require("../assets/images/1-14.png"),
        },
        {
          id: 63,
          img_pic: require("../assets/images/1-15.png"),
        },
        {
          id: 64,
          img_pic: require("../assets/images/1-16.png"),
        },
        {
          id: 65,
          img_pic: require("../assets/images/1-16.png"),
        },
      ],
    };
  },
  created() {
    this.waterfall();
  },
  methods: {
    waterfall() {
      window.onload = function () {
        // 1获取主容器的宽度
        let content = document.getElementsByClassName("content")[0];
        let contentWidth = content.offsetWidth;
        /* console.log(contentWidth); */
        // 2获取单个图片的宽度
        let imgs = content.children;
        let imgsWidth = imgs[0].offsetWidth;
        /*  console.log(imgsWidth); */
        // 3.得出一行可以排列多少图片
        let nums = Math.floor(contentWidth / imgsWidth);
        /* console.log(nums); */
        // 4.收集第一排的所有高度
        let arrHeight = [];
        for (let i = 0; i < imgs.length; i++) {
          if (i < nums) {
            //这里都是第一行的元素
            arrHeight.push(imgs[i].offsetHeight);
          } else {
            // 先创建第一个元素的对象
            let obj = {
              minH: arrHeight[0],
              minI: 0,
            };
            for (let j = 0; j < arrHeight.length; j++) {
              if (arrHeight[j] < obj.minH) {
                obj.minH = arrHeight[j];
                obj.minI = j;
              }
            }
            /* console.log(obj); */
            imgs[i].style.position = "absolute";
            imgs[i].style.left = imgs[obj.minI].offsetLeft + "px";
            imgs[i].style.top = obj.minH + "px";
            arrHeight[obj.minI] = arrHeight[obj.minI] + imgs[i].offsetHeight;
          }
        }
        /* console.log(arrHeight); */
      };
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin-left: 465px;
  color: red;
}
.content {
  position: relative;
  left: 80px;
  width: 100%;
  height: 2000%;
  h3 {
    margin: 0 auto;
  }
  div {
    float: left;
    border: 1px solid #ccc;
    padding: 10px;
    img {
      width: 140px;
    }
  }
}
</style>
