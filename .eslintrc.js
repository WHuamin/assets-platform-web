module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended" // 新增，必须放在最后面
  ],
  parser: "vue-eslint-parser", // parser用来解析.vue后缀文件
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-var-requires": 0
  }
}
