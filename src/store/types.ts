import { UserState } from "../types/store"

// 声明并暴露 RootState 类型
export default interface RootState {
  user: UserState
}
