# Vue 3 + Typescript + Vite + Pinia

## Vue3.2后台管理系统

创建并启动项目

```shell
yarn create vite

Project name: » 23_vue_3.2_pinia_admin
√ Select a framework: » vue
√ Select a variant: » vue-ts

Scaffolding project in ...\23_vue_3.2_pinia_admin...

Done. Now run:

  cd 23_vue_3.2_pinia_admin
  yarn
  yarn dev
```

安装项目所依赖的库

vue-router@4 Vue.js 的官方路由 使用4版本
sass 本项目使用sass设置样式
axios 网络请求需要
element-plus 这里使用^1.3.0-beta.5" 版本
vue-i18n i18n相关
pinia 状态管理

```shell
yarn add vue-router@4 sass axios vue-i18n pinia element-plus@1.3.0-beta.5

├─ axios@0.25.0
├─ element-plus@1.3.0-beta.5
├─ pinia@2.0.10
├─ sass@1.49.0
├─ vue-i18n@8.27.0
└─ vue-router@4.0.12
```

### 按需导入 element-plus

