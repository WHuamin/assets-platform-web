import { InjectionKey } from "vue"
import { createStore, Store, useStore as baseUseStore } from "vuex"
import RootState from "./types"

export default createStore<RootState>({
  // state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

// 需要一个唯一的key，该key在注册store时需要用到
export const key: InjectionKey<Store<RootState>> = Symbol("vue-store")

/**
 * 在页面中使用，推荐使用 Composition API，在vue组件setup中使用
 * import { useStore } from 'vuex';
 * const store = useStore(key); // 便可实现调用
 * 但是每次都要引入key，很麻烦
 * 可以在 store/index.ts中统一导出，使用就可以直接调用了。
 */
export function useStore() {
  return baseUseStore
}
