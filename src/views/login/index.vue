<template>
  <div class="fill-wrapper login-wrapper">
    <section>
      <el-form label-position="right" label-width="100px" :model="loginForm">
        <el-form-item label="账号">
          <el-input v-model="loginForm.account" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" />
        </el-form-item>
      </el-form>
    </section>
    <footer>123</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "platform-login",
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
