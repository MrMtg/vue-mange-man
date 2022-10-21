<template>
  <div>
    <el-container>
      <el-aside width="auto" style="background-color: rgb(84, 92, 100)">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <Common-Header />
        </el-header>
        <common-tag />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>
>
