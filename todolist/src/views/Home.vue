<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-row>
      <el-col>
        <el-form label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="名称"  prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="ruleForm.confirmPassword"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    var validatePass = (rule, value, callback) => {
      console.log(value)
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        name: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  }
};
</script>
