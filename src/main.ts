import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import store, { key } from "@/store"
import ElementPlus from "element-plus" // 引入element-plus
import "@/assets/css/index.scss"

createApp(App)
  .use(store, key)
  .use(router)
  .use(ElementPlus, { zIndex: 3000, size: "small" })
  .mount("#app")
