# Vue 3 + Vite

## Vue3+threejs打造沉浸式商城企业项目实战

- 使用 Vite 创建项目后需要先`install`一下

### 按需加载

Vite 按需

需要提前安装 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 库 [^unplugin-vue-components]

```shell
npm install unplugin-vue-components -D
# OR
yarn add unplugin-vue-components
```

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    /* ... */
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
};
```

### unplugin-vue-components

[^unplugin-vue-components]:unplugin-vue-components

On-demand components auto importing for Vue.  组件按需加载自动导入 Vue

**Features**

- 💚 Supports both Vue 2 and Vue 3 out-of-the-box. 支持 Vue2 和 Vue3 开箱即用
- ✨ Supports both components and directives. 同时支持组件和指令
- ⚡️ Supports Vite, Webpack, Vue CLI, Rollup, esbuild and more, powered by unplugin. 支持 Vite, Webpack, Vue CLI, Rollup, esbuild 等, 由 [unplugin](https://github.com/unjs/unplugin) 提供支持
- 🏝 Tree-shakable, only registers the components you use. **Tree shaking(摇树优化)**，仅注册您使用的组件
- 🪐 Folder names as namespaces. 文件夹名称作为命名空间
- 🦾 Full TypeScript support. 完整的 TypeScript 支持
- 🌈 Built-in resolvers for popular UI libraries. 适用于常用 UI 库的内置解析器
- 😃 Works perfectly with unplugin-icons. 与`unplugin-icons`图标完美配合
