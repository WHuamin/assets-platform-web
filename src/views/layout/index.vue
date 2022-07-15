<template>
  <div class="fill-wrapper flex-row-box">
    <el-container>
      <el-aside class="layout-aside">
        <layout-aside />
      </el-aside>
      <el-container>
        <el-header class="layout-header">
          <layout-header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer class="layout-footer">
          <layout-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import layoutAside from "./layoutAside.vue"
import layoutHeader from "./layoutHeader.vue"
import layoutFooter from "./layoutFooter.vue"

export default defineComponent({
  name: "platform-layout",
  components: { layoutAside, layoutHeader, layoutFooter }
})
</script>
<style lang="scss" scoped>
.layout-aside {
  min-width: 180px;
  max-width: 260px;
  background: rgba(255, 0, 0, 0.1);
}
.layout-header {
  min-height: 60px;
  max-height: 120px;
  background: rgba(0, 255, 0, 0.1);
}
.layout-footer {
  min-height: 20px;
  max-height: 40px;
  background: rgba(0, 255, 0, 0.1);
}
</style>
