// 每个state 都有对应的interface,用于明确该state的类型
// 声明并暴露 UserState 类型
export interface UserState {
  firstName: string
  lastName: string
  mobile: string
  token: string
}
