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

### 自动导入 element-plus

[element-plus 官方文档](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5-%E6%8E%A8%E8%8D%90)

首先需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```shell
yarn add unplugin-vue-components unplugin-auto-import -D
```

然后把下列代码插入到 `Vite` 的配置文件中

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

### 配置Vue Router

在 `src` 目录下创建 `router` 文件夹 用以存储路由相关配置

```ts
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！
```

### 别名配置

许多项目脚手架默认就会把`src`目录添加一个`@`别名，项目中实际引入时，虽然可以精简路径，但也带来一个很麻烦的问题：
`IDE`无法识别这些别名，因此导致无法自动完成路径、无法识别引用资源的输出、出现不必要的告警等情况。

解决办法 在项目根目录下创建 `jsconfig.json` 或 `tsconfig.json` 文件 根据自己项目使用创建

```ts
// vite.config.ts
export default defineConfig({
// ...
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: {
      '@': '/src',
    },
  },
});

// tsconfig.json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
  },
}
```

保存并重新打开项目以后，别名就可以被正常识别了

## 初始化项目

- 引入scss文件

### 引入scss文件

将写好的style文件导入src目录文件下
在 main.ts文件中进行使用

```ts
// main.ts

// ...
import './styles/index.scss';
```

### 静态登录界面

使用element-plus 的 Icon 图标

```shell
yarn add @element-plus/icons-vue 

# 使用方式

<el-icon class="svg-container">
  <avatar />
</el-icon>

<script>
  import { Avatar } from '@element-plus/icons-vue';
</script>
```

登录布局页面

```vue
<template>
  <div class="login-container">
    <el-form class="login-form" ref="formRef" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">用户登录-i18n</h3>
      </div>
      <el-form-item prop="username">
        <el-icon class="svg-container">
          <avatar />
        </el-icon>
        <!-- <svg-icon icon="user" class="svg-container"></svg-icon> -->
        <el-input v-model="form.username"> </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="svg-container">
          <avatar />
        </el-icon>
        <el-input v-model="form.password" show-password> </el-input>
      </el-form-item>
      <el-button
        type="primary"
        round
        class="login-button"
        @click="submitForm(formRef)"
        >登录-i18n</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Avatar } from '@element-plus/icons-vue';
import { submitForm } from './utils'; // 封装一个工具函数 用以登录
import type { ElForm } from 'element-plus'; // ts 使用类型

const form = ref({
  username: 'admin',
  password: '123456',
});

const rules = ref({
  username: [
    {
      required: true,
      message: '请输入名字',
      trigger: 'blur',
    },
  ],
  password: [
    // ...
  ],
});

const formRef = ref<InstanceType<typeof ElForm>>();
</script>

<style lang="scss" scoped>
/* 相关样式具体查看文件 */
</style>
```

