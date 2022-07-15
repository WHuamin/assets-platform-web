# assets-platform-web

## 项目结构
```
|-- public //无需打包的静态资源文件
|-- src //项目源代码目录
|-- types //存放项目中类型声明文件
|-- assets //需要打包的静态资源
|-- css //样式
|-- components //公共组件
|-- main.ts //项目入口文件
|-- shims-vue.d.ts //声明文件
|-- .browserslistrc //兼容目标浏览器范围的配置文件
|-- .eslintrc.js //eslint 配置文件
|-- .prettierrc.js //prettier 配置文件
|-- babel.config.js //babel 配置文件
|-- tsconfig.json //ts 配置文件
```

### 配置 eslint，保证项目的质量

```
1. npm add eslint -D
2. npx eslint --init
3. 依赖安装完成后，会生成.eslintrc.js 配置文件
4. .eslintrc.js 配置文件会出现一个报错，需要再 env 字段中增加 node: true 配置以解决 eslint 找不到 module 的报错
5. 在 package.json 文件中的 script 中添加 lint 命令
   {
   "scripts": {
   // eslint . 为指定 lint 当前项目中的文件
   // --ext 为指定 lint 哪些后缀的文件
   // --fix 开启自动修复
   "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
   }
   }
6. npm run lint
7. .eslintrc.js 配置文件配置： "parser": "vue-eslint-parser",
8. npm run lint 控制台报错 The template root requires exactly one element
   rules: {
   "vue/no-multiple-template-root":'off'
   }
9. npm run lint 控制台报错 Require statement not part of import statement.(@typescript-eslint/no-var-requires)
   rules: {
   '@typescript-eslint/no-var-requires': 0
   }

https://juejin.cn/post/7118294114734440455
```

### 配置 prettier，保证项目的统一格式、风格

```
1. npm add prettier -D
2. 在根目录下新建.prettierrc.js
   module.exports = {
   // 一行的字符数，如果超过会进行换行，默认为 80
   printWidth: 80,
   // 一个 tab 代表几个空格数，默认为 80
   tabWidth: 2,
   // 是否使用 tab 进行缩进，默认为 false，表示用空格进行缩减
   useTabs: false,
   // 字符串是否使用单引号，默认为 false，使用双引号
   singleQuote: true,
   // 行位是否使用分号，默认为 true
   semi: false,
   // 是否使用尾逗号，有三个可选值"<none|es5|all>"
   trailingComma: "none",
   // 对象大括号直接是否有空格，默认为 true，效果：{ foo: bar }
   bracketSpacing: true
   }
3. 在 package.json 中的 script 中添加以下命令,运行该命令，会将我们项目中的文件都格式化一遍.
   {
   "scripts": {
    "format": "prettier --write ./**/*.{html,vue,ts,js,json,md}",
   }
   }
4. 安装 vscode 的 Prettier - Code formatter 插件
   安装该插件的目的是，让该插件在我们保存的时候自动完成格式化
   在.vscode/settings.json 中添加一下规则
   {
   // 保存的时候自动格式化
   "editor.formatOnSave": true,
   // 默认格式化工具选择 prettier
   "editor.defaultFormatter": "esbenp.prettier-vscode"
   }

5. 解决 eslint 与 prettier 的冲突
   npm add eslint-config-prettier eslint-plugin-prettier -D
   在  .eslintrc.json 中 extends 的最后添加一个配置
   {
   extends: [
   // 新增，必须放在最后面
   'plugin:prettier/recommended'
   ],
   }
```

### 配置 husky

```
husky 是一个用来管理 git hook 的工具，git hook 即在我们使用 git 提交代码的过程中会触发的钩子。

1. npm add husky -D
2. 在 package.json 中的 script 中添加一条脚本命令
   {
   "scripts": {
   "prepare": "husky install"
   },
   } 3.执行 npm run prepare,根目录下产生.husky 目录
   使用 husky 命令添加 pre-commit 钩子，运行
   npx husky add .husky/pre-commit "npm run lint && npm run format"（没反应，因为系统是 window，不支持）
   npm run lint && npm run format
   因此，添加一个文件 pre-commit 在.husky 文件夹下, 执行下面命令
   npx husky add .husky/pre-commit
   打开 pre-commit 文件
   npm run lint && npm run format
```

### CSS 初始化

```
CSS初始化是指重设浏览器的样式。不同的浏览器默认的样式可能不尽相同，所以开发时的第一件事可能就是如何把它们统一。如果没对CSS初始化往往会出现浏览器之间的页面差异。
```
### 分环境
```
1. 在根目录下新建 .env.xx (xx可以是自己取的用来区分这三个环境），如：
.env.development     // 开发
.env.test			// 测试
.env.production		// 正式

注意：全局变量仅除NODE_ENV和BASE_URL这两个保留变量外，其余自定义变量都需使用VUE_APP开头。

1. package.json中打包命令：

{
  "scripts": {
    "serve": "vue-cli-service serve", //本地运行，会把process.env.NODE_ENV设置为‘development‘
    "test": "vue-cli-service build --mode test",//设置第二部的文件之后运行此命令会把process.env.NODE_ENV设置为‘production‘
    "build": "vue-cli-service build --mode build"//设置第二部的文件之后运行此命令会把process.env.NODE_ENV设置为‘production‘
  },
}

2. 在项目根目录添加文件“.env.alpha”和“.env.build”，其内容分别为：
```

### 页面响应式

```
当屏幕分辨率大于 1024px 时，网页宽度将会是 980px 。用 CSS3 媒体查询（Media query）来检验屏幕分辨率，如果小于 980px ，页面宽度将会用自适应来取代固定宽度；如果小于 650px ，主题和边栏（content container and sidebar）将会撑满屏幕并一列显示。
响应式布局原理:使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。
超小屏幕（手机）	< 768px
小屏设备（平板）	>= 768px ~ < 992px
中等屏幕（桌面显示器）	>= 992px ~ <1200px
宽屏设备（大桌面显示器）	>= 1200px

/*当页面大于 1200px 时，大屏幕，主要是 PC 端*/
@media (min-width: 1200px) {
}

/*在 992 和 1199 像素之间的屏幕里，中等屏幕，分辨率低的 PC*/
@media (min-width: 992px) and (max-width: 1199px) {
}

/*在 768 和 991 像素之间的屏幕里，小屏幕，主要是 PAD*/
@media (min-width: 768px) and (max-width: 991px) {
}

/*在 480 和 767 像素之间的屏幕里，超小屏幕，主要是手机*/
@media (min-width: 480px) and (max-width: 767px) {
}

/*在小于 480 像素的屏幕，微小屏幕，更低分辨率的手机*/
@media (max-width: 479px) {
}
```

### 
```
npm install element-plus --save
vue add element-plus
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
