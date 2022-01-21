# Vue 3 + Typescript + Vite + Pinia

<p align="center">
  <a href="https://pinia.vuejs.org" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/pinia"><img src="https://badgen.net/npm/v/pinia" alt="npm package"></a>
  <a href="https://github.com/vuejs/pinia/actions/workflows/test.yml?query=branch%3Av2"><img src="https://github.com/vuejs/pinia/workflows/test/badge.svg?branch=v2" alt="build status"></a>
  <a href="https://codecov.io/github/vuejs/pinia"><img src="https://badgen.net/codecov/c/github/vuejs/pinia/v2" alt="code coverage"></a>
</p>
<br/>

> 一个全新的用于 Vue 的状态管理库。下一个版本的 Vuex，也就是 Vuex 5.0。

## 引言

`Pinia`最初作为一个实验 在2019年11月左右重新设计`Vue`的`Store`使用`Compostion API`会是什么样子。 从那时起，最初基本原理都是一样的，但是`Pinia`同时适用于Vue 2和Vue 3，并且不需要您使用 `composition API`。 除了初始化安装和 SSR 配置之外，两者的 API 都是相同的, 官方文档中主要针对 Vue 3 进行说明，必要的时候会提供 Vue 2 的注释，以便Vue 2和Vue 3用户可以阅读！


### 为什么要用Pinia呢？

Pinia是一个Vue的状态管理工具, 它允许您`跨组件/页面`共享状态。如果您熟悉`Composition API`，你可以认为你已经可以简单的使用`export const state = reactive({})`。这对于一个单页应用是正确的，但是如果您的程序是在服务器端运行的`则会使您的应用程序面临安全漏洞`。但是，即使是在小型的单页面应用程序中，您也可以从使用Pinia中获益良多：

- 支持 `Vue DevTools`
  - 跟踪 `actions`、`mutations` 的时间线
  - 在使用容器的组件中就可以观察到容器本身
  - 支持 `time travel` 更容易的调试功能
- 模块热更新
  - 无需重新加载页面即可修改您的容器
  - 热更新的时候保持任何现有状态
- 支持使用插件扩展 Pinia 功能
- 相比 `Vuex` 有更好完美的 `TypeScript` 支持
- 支持服务器端渲染

### 核心概念

`Pinia` 从使用角度和之前的 `Vuex` 几乎是一样的，但比 `Vuex` 更简单了。

在 `Vuex` 中有四个核心概念：

- State
- Getters
- Mutations
- Actions

在 `Pinia` 中：

- State
- Getters
- Actions：同步异步都支持

`Store`（如 `Pinia`）是一个保存状态和业务逻辑的实体，它不绑定到您的组件树。换句话说，`它承载全局state`。有点像一个始终存在的组件，每个组件都可以读取和写入。它有**三个核心概念**。

- **state**：类似组件的 `data` ，用来存储全局状态

```json
{
  "todos": [
    { "id": 1, "title": "吃饭", "done": false },
    { "id": 1, "title": "吃饭", "done": true },
    { "id": 1, "title": "吃饭", "done": false }
  ]
}
```

- **getters**：类似于组件的 `computed`, 用来封装计算属性, 有缓存的功能

```js
doneCount() {
    return todos.filter((item) => item.done).length;
  },
```

- **actions**：类似于组件的 `methods`, 封装业务逻辑, 修改 `state`，同步异步都可以
  - 在 `Vuex` 中同步操作用 `mutations`，异步操作用 `actions`

**!Tip** Pinia 中没有 mutations

### 基本示例

这就是在 API 方面使用 `pinia` 的样子（请务必查看入门指南以了解完整的说明）。首先创建一个 `store`

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

然后在组件中使用它

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // 使用 $patch 进行处理 ✨
    counter.$patch({ count: counter.count + 1 })
    // 或者使用一个 action 进行替代
    counter.increment()
  },
}
```

您甚至可以使用函数（类似于 component  `setup()` ）作为更高级的方式来定义 `Store`

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

如果您仍然不熟悉 `setup()` 和 `Composition API`，那也别担心，`Pania` 也支持类似`Vuex` 的**单一状态树**。您以
相同的方式`Store`，但随后使用 `mapStores()` , `mapState()`, 或 `mapActions()` ：

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // 其他的 computed properties
    // ...
    // 提供对 this.CounterStore 和 this.userStore 的访问权限
    ...mapStores(useCounterStore, useUserStore)
    // 提供对 this.count 和 this.Double 的读取访问权限
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // 映射 this.increment() 到 useCounterStore.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```

您将在核心概念中找到有关每个单一状态树的更多信息。

## Pinia vs Vuex
