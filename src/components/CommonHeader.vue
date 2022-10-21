<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <span class="text"></span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img src="../assets/images/user1.png" alt="" class="The-avatars" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancel">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookie from "js-cookie";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    handleClick(command) {
      // 清空cookie中的token信息
      if (command === "cancel") {
        Cookie.remove("token");
        // 清楚cookie中的menu
        Cookie.remove("menu");
        // 跳转到登录页面
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  mounted() {
    console.log(this.tags, "tags");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    margin-left: 14px;
    color: #fff;
    font-size: 14px;
    overflow: hidden;
  }
  .r-content {
    .The-avatars {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    /deep/ .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: 400;
        &.is-link {
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
      .el-breadcrumb__inner:hover {
        color: skyblue;
      }
    }
  }
}
</style>
