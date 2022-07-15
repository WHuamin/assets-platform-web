import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/views/layout/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "wel",
        meta: {
          name: "首页"
        },
        component: () => import("@/views/HomeView.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
