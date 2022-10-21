<template style="background-color: pink">
  <el-form
    ref="form"
    label-width="70px"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名"
        >用户名</el-input
      >
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码" type="password"
        >密码</el-input
      >
    </el-form-item>
    <el-form-item>
      <el-button
        @keyup.enter="enter1"
        @click="submit"
        style="margin-left: 35px"
        type="primary"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.keyupSubmit();
    // 调用监听回车函数
  },
  methods: {
    // 登录
    submit() {
      // token信息
      /* const token = Mock.Random.guid();
      // token信息存入cookie用于不同页面间的通信
      Cookie.set("token", token); */
      // 校验通过
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              Cookie.set("token", data.data.token);
              // 获取菜单的数据，存入store中
              this.$store.commit("setMenu", data.data.menu);
              this.$store.commit("addMenu", this.$router);
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
      /*  getMenu(); */
      this.$router.push("/home");
    },
    keyupSubmit() {
      document.onkeydown = (e) => {
        // 获取当前窗口键盘敲击
        let key_enter = window.event.keyCode;
        // 与code值比较，enter 为 13
        if (key_enter === 13) {
          this.submit();
        }
      };
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 165px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .el-unput {
    width: 198px;
  }
  h3 {
    text-align: center;
    margin-bottom: 25px;
    font-weight: 400;
    color: #505458;
  }
}
</style>
