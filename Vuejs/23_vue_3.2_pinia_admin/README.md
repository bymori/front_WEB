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



```ts
// utils.ts

import type { ElForm } from 'element-plus';

export const submitForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
```



### 登录逻辑

定义登录api

在项目根目录下创建`api`文件夹 用以存储网络请求相关

```ts
// config.ts // 定义配置
const devBaseURL = 'https://lianghj.top:8888/api/private/v1/';
const proBaseURL = 'https://api.ioinn.cn';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

// request.ts // 请求相关
import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作
    // console.log('请求被拦截')

    return config;
  },
  (err) => {
    return Promise.reject(new Error(err));
  }
);

instance.interceptors.response.use(
  (res) => {
    const { data, meta } = res.data;
    if (meta.status === 200 || meta.status === 201) {
      return data;
    } else {
      ElMessage.error(meta.msg);
      return Promise.reject(new Error(meta.msg));
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  }
);

export default instance;
```



```ts
// src/api/login/index.ts
import request from '@/api/request';

export const login = (data = {}) => {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
};
```



router 添加主页面配置

```ts
const routes = [
  // ...
  {
    path: '/',
    name: '/',
    component: () => import('@/views/layout/index.vue'),
  },
];
```



Pinia定义store 在根目录创建一个`store`文件夹  存放相关配置

```ts
// store/login.ts

import { defineStore } from 'pinia'; // 引入 pinia
import { login as loginApi } from '@/api/login'; // 使用刚才定义好的登录api
import router from '@/router'; // 由于登录后需要进行页面跳转 所以需要引入router 用于跳转

export const useLoginStore = defineStore('login', {
  actions: {
    login(useInfo: {}) {
      return new Promise((resolve, reject) => {
        loginApi(useInfo)
          .then((res) => {
            router.replace('/');
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
```



在`login`页面中  `submitForm `登录参数中 把 `form` 传递过去

```vue
<!-- src/views/login/utils.ts -->
<template>
<!-- ... -->
<el-button
        type="primary"
        round
        class="login-button"
        @click="submitForm(formRef, form)"
        >登录-i18n</el-button
</template>
```



由于上一步  `submitForm `定义为`utils` 所以 在这个文件中做一些修改

```ts
// src/views/login/utils.ts

import { useLoginStore } from '@/store/login'; // 使用定义的 useLoginStore 相当于vuex中的actions

const useLogin = useLoginStore();

export const submitForm = (
  formEl: InstanceType<typeof ElForm> | undefined,
  form: {}
) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      useLogin.login(form);
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

```



最后 在 `main.ts`中 使用 `pinia`

```ts
// main.ts

import { createPinia } from 'pinia';
import 'element-plus/dist/index.css'; // 解决 element-plus 部分样式丢失

// 创建 Pinia 实例
const pinia = createPinia();

createApp(App).use(pinia).***
```



至此 完成在 pinia中 定义登录方法 登陆后跳转到主页面



