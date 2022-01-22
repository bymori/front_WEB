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

### 为什么是 Pinia

Pinia (在英语中的发音类似于`/peenya/`)是与`piña`(西班牙语中的菠萝)最接近的单词，这是一个有效的包名。菠萝实际上是一组独立的花，它们汇合在一起形成一个多个果实。与`stores`相似，每个`stores`都是单独诞生的。但最终都联系在一起。。它也是一种原产于南美洲的美味热带水果。

### 一个更实际的示例

下面是一个更完整的API示例，您将在`Pinia`中使用该API，**即使在JavaScript中也是如此**。对于某些人来说，不需要进一步阅读就可以开始使用，但我们仍然建议您查看文档，或者甚至跳过此示例，在阅读完所有核心概念后再回来。

```js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 类型将自动推断为数字
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动补全! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        //调用其他 getter 自动补全 ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // 无论有多少参数, 返回一个 promise 或者不返回
    addTodo(text) {
      // 你可以直接改变 state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```

### Pinia vs Vuex

`Pinia` 试图尽可能贴近 `Vuex` 的设计理念。它的设计是为了 Vuex 下一次迭代的提案，并且取得了成功，因为我们目前有一个针对 `Vuex5` 的开放式 RFC，其 API 与Pinia 使用的 API 非常相似。请注意，Pinia 的作者 (`Eduardo`) 是 Vue.js 核心团队的一员，并积极参与 Router 和 Vuex 等 API 的设计。我个人对这个项目的意图是重新设计使用全局 `Store` 的体验，同时保持 `Vue` 平易近人的哲学。我让 `Pania` 的 API 与 Vuex一样接近，因为它不断向前发展，使人们可以轻松地迁移到 Vuex，甚至在未来融合这两个项目（在Vuex下）。

#### 与Vuex 3.x/4.x的比较

> `Vuex 3.x` 是Vue 2的Vuex， 而`Vuex 4.x` 是Vue 3的Vuex

`Pinia` API 与 Vuex ≤4 有很大不同，即：

- 没有 `mutations` `。mutations` 被认为是非常冗长的。最他们最初带来了DevTools集成，但这不再是问题。
- 更好的 typescript 支持。无需创建自定义的复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能地利用 TS 类型推断。
- 不再需要注入、导入函数、调用它们，享受自动补全！
- 无需动态添加`stores`，默认情况下它们都是动态的，您甚至不会注意到。您仍然可以随时手动使用`stores`进行注册，但是因为它是自动的，所以您不必担心。
- 不再嵌套构建模块。您仍然可以通过在另一个`stores`中导入和使用一个`stores`来隐式嵌套`stores`，但是Pinia在设计上提供了扁平的结构，同时仍然支持`stores`之间的交叉组合方式。**您甚至可以拥有`stores`的循环依赖关系**。
- 没有命名空间模块。考虑到`stores`的平面体系结构，“命名空间”是`stores`定义它们的固有方式，您可以说所有`stores`都是命名空间的。

有关如何将现有 `Vuex ≤4` 项目转换为使用 `Pinia` 的详细说明，请参阅[VUEX迁移指南](https://pinia.vuejs.org/cookbook/migration-vuex.html)。

## Pinia 基础应用

### 安装

```shell
yarn add pinia
# OR
npm install pinia
```

**!Tip** 如果你的应用使用的是 `Vue 2`，你还需要安装composition api：如果您使用的是`Nuxt`，则应按照[以下说明进行操作](https://pinia.vuejs.org/ssr/nuxt.html)。`@vue/composition-api`

如果你使用的是`Vue CLI`，你可以尝试一下这个[非官方的插件](https://github.com/wobsoriano/vue-cli-plugin-pinia)。

### 初始化配置

```js
import { createPinia } from 'pinia'
app.use(createPinia())
```

如果您使用的是`Vue 2`，您还需要安装一个插件并注入在应用程序根目录创建的：`pinia`

```js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // 其他 options...
  // ...
  // 注意：同一个 pinia 实例可以跨同一页面上的多个Vue应用程序使用
  pinia,
})
```

这也将添加 devtools 支持。在 Vue 3 中，仍然不支持 time travel 和编辑等一些功能，因为 vue-devtools 还没有公开必要的 API，但是 devtools 有更多的功能，并且开发人员的整体体验要好得多。在Vue 2 中，`Pania` 使用 Vuex 的现有接口（因此不能与它一起使用）。

### 定义和使用 Store

在深入研究核心概念之前，我们需要知道一个`store`是如何定义使用`fineStore()`的，它需要一个唯一的名字, 作为第一个参数传递：

```js
// 定义一个 store
import { defineStore } from 'pinia'

// useStore可以是类似 useUser、useCart
//   参数1: 容器的 ID, 必须唯一, 将来 Pinia 会把所有的容器挂载到根容器
//   参数2: 选项对象
export const useStore = defineStore('main', {
  // 其他 options...
})
```

可以根据需要定义任意数量的 `Store`
并且最好将不同的 `Store` 放到不同的模块中方便管理

#### 使用 Store

我们之所以定义`store`，是因为只有在`setup()`内部调用`useStore()`之后才会创建`store`：

```js
//  使用 store
import { useStore } from '@/stores/counter'

export default {
  setup() {
    const store = useStore()

    return {
      // 您可以返回整个store实例 以在模板中使用它
      store,
    }
  },
}
```

`Store` 是一个 `reactive` 包裹的对象，所有访问其中的成员不需要 `.value` 。

```js
// 不能直接解构使用 Store 中的数据，这样拿到的数据不是响应式的。
export default defineComponent({
  setup() {
    const store = useStore()
    // ❌ 这是行不通的，因为它破坏了响应式
    // 这与从`props`进行解构是一样的。
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // 将永远是 "eduardo"
      name,
      // 将永远是 2
      doubleCount,
      // 是一次性的 结构会造成响应式的丢失
      doubleValue: computed(() => store.doubleCount),
      }
  },
})
```

#### 使用 storeToRefs 解构 Store 数据

为了从`Store`中提取属性，同时保持其响应式，您需要使用`storeToRefs()`。当您只使用`Store`中的状态，而不调用任何操作时，这很有用：

```js
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()
    // `name` and `doubleCount` 是 reactive refs
    // 这还将为插件添加的属性创建refs
    // 但跳过任何 action 或非reactive (非 ref/reactive)属性
    const { name, doubleCount } = storeToRefs(store)

    return {
      name,
      doubleCount
    }
  },
})
```

## State

### 定义State

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  /**
   * 类似于组件的 data, 用来存储全局状态的
   *   1. 必须是函数: 这样是为了在服务端渲染的时候避免交叉请求导致的数据污染
   *   2. 必须是箭头函数, 这样是为了更好的 TS 类型推导
   */
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

**!TIP** 如果您使用的是`Vue 2`，则在`state`中创建的数据与在Vue实例中创建的数据遵循相同的规则，即`state`对象必须是纯粹的对象，并且在向其添加新属性时需要调用`Vue.set()`。另请参阅：[VUE#data](https://cn.vuejs.org/v2/api/index.html#data)。

### 访问State

默认情况下，您可以通过`store`实例访问State，从而直接对其进行读写：

```js
const store = useStore()

store.counter++
```

### 重置State

您可以通过调用`store`上的`$Reset()`方法将State重置为其初始值：

```js
const store = useStore()

store.$reset()
```

### 与 options API 一起使用

如果您没有使用 composition API, 而使用的是 `computed` , `methods` , ...，则可以使用 `mapState()` 帮助程序将State属性映射为只读计算属性：

```js
import { mapState } from 'pinia'

export default {
  computed: {
    // 提供对该组件内部的 this.counter 的访问
    // 与从 store.counter 读取相同的
    ...mapState(useStore, ['counter'])
    // 与上面相同，但将其注册为this.myOwnName
    ...mapState(useStore, {
      myOwnName: 'counter',
      // 您还可以编写访问store的函数
      double: store => store.counter * 2,
      // 它可以访问‘this’，但它的类型将无法推导出来
      magicValue(store) {
        return store.someGetter + this.counter + this.double
      },
    }),
  },
}
```

如果您希望能够写入这些状态属性（例如，如果您有一个表单），您可以使用 `mapWritableState()` 。注意：不能传递与`mapState()`类似的函数：

```js
import { mapWritableState } from 'pinia'

export default {
  computed: {
    // 允许访问组件内的 this.counter 并允许设置它
    // this.counter++
    // 与从 store.counter 读取相同的
    ...mapWritableState(useStore, ['counter'])
    // 与上面相同，但将其注册为this.myOwnName
    ...mapWritableState(useStore, {
      myOwnName: 'counter',
    }),
  },
}
```

### 改变状态

除了直接使用 `store.counter++` 改变 `store` 之外，您还可以调用该 `$patch` 方法。它允许您对部分`state` 对象同时应用多个更改：

```js
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
```

然而，使用这种语法应用某些改变确实很困难或成本很高：任何集合修改(例如，元素从数组中 pushing, removing, splicing)都需要创建一个新的集合。正因为如此，`$patch`方法还接受一个函数来对这种难以应用于Patch对象的突变进行分组：

```js
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

这里的主要区别是`$patch()`允许您将多个更改组合到`DevTools`中的一个条目中。
**注意，对`state`和`$patch()`的直接更改将出现在`DevTools`中**，并且可以进行 time-travel（尚未在Vue 3 中实现）。

### 替换state

您可以通过将`store`的 `$state` 属性设置为新对象来替换`store`的整个状态：

```js
store.$state = { counter: 666, name: 'Paimon' }
```

您还可以通过更改`Pinia`实例的`$state`来替换应用程序的整个状态。这是在以下过程中使用的  [SSR for hydration](https://pinia.vuejs.org/ssr/#state-hydration)

```js
pinia.state.value = {}
```

### 订阅state

您可以通过`store`的`$Subscribe()`方法查看状态及其变化，类似于`Vuex`的`Subscribe`方法。与常规`Watch()`相比，使用`$SUBSCRIBE()`的优势在于，订阅只会在补丁之后触发一次(例如，当使用上面的函数版本时)。

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 等同于 cartStore.$id
  mutation.storeId // 'cart'
  // 仅适用于 mutation.type === 'patch object'
  mutation.payload // 传递给的 Patch 对象 cartStore.$patch()

  // 只要 state 发生更改，就将整个 state 保存到本地存储中
  localStorage.setItem('cart', JSON.stringify(state))
})
```

默认情况下，`state`订阅绑定到添加`state`订阅的组件(如果`store`在组件的`setup()`中)。这意味着，当卸载组件时，它们将被自动删除。如果要在卸载组件后保留它们，请将`{Detached：true}`作为第二个参数传递，以从当前组件分离`state`订阅：

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 卸载组件后将保留此订阅
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```

你也可以监视整个 `Pinia` 容器状态：

```js
watch(
  pinia.state,
  (state) => {
    // 只要 state 发生更改，就将整个 state 保存到本地存储中
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

## Getters

- `getter`完全等同于`Store`状态的[`计算值`](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%A1%E7%AE%97%E5%92%8C%E4%BE%A6%E5%90%AC)。
- 可以使用`fineStore()`中的`getters`属性定义它们。
- `Getters` 函数的第一个参数是 `state` 对象，推荐使用箭头函数：

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
})
```

大多数情况下，`getter`只依赖于`state`，但是，他们可能需要使用其他`getter`。正因为如此，在定义常规函数时，我们可以通过它访问整个`store`实例，**但有必要定义返回类型的类型(在TypeScript中)**。这是由于TypeScript中的已知限制，**不会影响使用箭头函数定义的`getter`，也不会影响不使用以下内容的`getter`：**

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter * 2
    },
    // 必须显式设置返回类型
    doublePlusOne(): number {
      // 整个 store 的自动完成和排版 ✨
      return this.counter * 2 + 1
    },
  },
})
```

然后，您可以直接访问`store`实例上的`getter`

```vue
<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>

<script>
export default {
  setup() {
    const store = useStore()

    return { store }
  },
}
</script>
```

### 访问其他 getters

与计算属性一样，您可以组合多个`getter`。通过这个访问任何其他的`getter`。即使您没有使用TypeScript，您也可以提示您的IDE使用 [JSDoc](https://jsdoc.app/tags-returns.html)：

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // 类型是自动推断的，因为我们没有使用`this`
    doubleCount: (state) => state.counter * 2,
    // 在这里，我们需要自己添加类型(在JS中使用JSDoc)。我们还可以使用它来记录getter
    /**
     * 返回 counter 值乘以 2 加1 
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // 自动完成 ✨
      return this.doubleCount + 1
    },
  },
})
```

### 将参数传递给 getters

`getter`只是幕后计算的属性，因此无法向它们传递任何参数。但是，您可以从`getter`返回函数以接受任何参数：

```js
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
```

并在组件中使用：

```vue
<script>
export default {
  setup() {
    const store = useStore()

    return { getUserById: store.getUserById }
  },
}
</script>

<template>
User 2: {{ getUserById(2) }}
</template>
```

注意，执行此操作时，**不再缓存getter**，它们只是您调用的函数。但是，您可以在`getter`本身中缓存一些结果，这并不常见，但应该会证明性能更高

```js
export const useStore = defineStore('main', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
```

### 访问其他stores的getter

要使用另一个store getter，您可以直接在`getter`中使用它：

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

### 与 setup() 一起使用

您可以将任何`getter`作为`store`的属性直接访问(与`state`属性完全相同)：

```js
export default {
  setup() {
    const store = useStore()

    store.counter = 3
    store.doubleCount // 6
  },
}
```

### 与 Options API 一起使用

您可以使用与上一节`state`中使用的相同的`mapState()`函数来映射到`getter`：

```js
import { mapState } from 'pinia'

export default {
  computed: {
    // 提供对组件内部的 this.doubleCounter 的访问
    // 与从 store.counter 读取相同的
    ...mapState(useStore, ['doubleCount'])
    // 与上面相同，但将其注册为this.myOwnName
    ...mapState(useStore, {
      myOwnName: 'doubleCounter',
      // 您还可以编写访问 store 的函数
      double: store => store.doubleCount,
    }),
  },
}
```

## Actions

`Actions` 等同于组件中的 `methods`。它们可以用`fineStore()`中的`Actions`属性定义，非常适合定义业务逻辑

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})
```

与`getter`一样，`actions`通过完全输入(和自动完成✨)支持来访问整个`store`实例。与它们不同的是，`actions`可以是异步的，您可以在它们内部`await`任何API调用，甚至其他`actions`！

下面是一个使用`Mande`的示例。请注意,您使用的库并不重要，只要您得到`Promise`，您甚至可以使用原生`fetch`函数(仅限浏览器)：

```js
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },
})
```

您还可以完全自由地设置您想要的任何参数并返回任何内容。调用`actions`时，一切都会自动推断出来！

调用`Actions`的方式与`methods`类似：

```js
export default defineComponent({
  setup() {
    const main = useMainStore()
    // 将 action 作为 store 的方法调用
    main.randomizeCounter()

    return {}
  },
})
```

### 访问其它容器的 actions

要使用其他`store`，您可以在`action`内部直接使用它：

```js
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // ...
  }),
  actions: {
    async fetchUserPreferences(preferences) {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be 通过身份验证')
      }
    },
  },
})
```

### 和 setup() 一起使用

您可以直接调用任何`action`作为`store`的方法：

```js
export default {
  setup() {
    const store = useStore()

    store.randomizeCounter()
  },
}
```

### 和 Options API 一起使用

如果您没有使用composition API，而使用的是Computed、Methods等 则可以使用 `mapActions()` 助手将 `actions` 属性映射为组件中的方法：

```js
import { mapActions } from 'pinia'

export default {
  methods: {
    // 提供对组件内的this.increase()的访问
    // 等同于 store.increment()
    ...mapActions(useStore, ['increment'])
    // 同上 但将其注册为 this.myOwnName()
    ...mapActions(useStore, { myOwnName: 'doubleCounter' }),
  },
}
```

### 订阅 actions

可以使用`Store.$onAction()`观察`action`及其结果。传递给它的回调在`action`本身之前执行。在处理 `Promise` 之后并允许您更改`action`的返回值。`onError`允许您停止错误传播。这些对于在运行时跟踪错误非常有用，类似于Vue文档中的这个技巧。 [跟踪运行时错误](https://v3.cn.vuejs.org/guide/tooling/deployment.html#%E8%B7%9F%E8%B8%AA%E8%BF%90%E8%A1%8C%E6%97%B6%E9%94%99%E8%AF%AF)

下面是一个在运行`action`之前和成功/失败操作之后记录日志的示例。

```js
const unsubscribe = someStore.$onAction(
  ({
    name, //  action的名称
    store, // store实例，与`omeStore`相同
    args, // 传递给 action 的参数数组
    after, // action 返回或 resolves 的钩子
    onError, // action 引发或 rejects 的钩子
  }) => {
    // 特定action调用的共享变量
    const startTime = Date.now()
    // 这将在执行对`store`的 action 之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 如果 action 成功并在其完全运行之后，将触发此action
    // 它等待任何返回的 promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回拒绝的 promise ，则会触发此操作
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动删除监听器
unsubscribe()
```

默认情况下，`action`订阅绑定到添加它们的组件(如果存储在组件的`setup()`中)。这意味着，当卸载组件时，它们将被自动删除。如果要在卸载组件后保留它们，请将`true`作为第二个参数传递，以将`action`订阅从当前组件分离：

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 卸载组件后将保留此订阅
    someStore.$onAction(callback, true)

    // ...
  },
}
```

## Plugins

由于API级别较低，`Pinia stores` 可以完全扩展。以下是您可以执行的操作列表：

- 将新属性添加到`stores`
- 定义`stores`时添加新选项
- 向`stores`添加新方法
- 包装现有方法
- 更改甚至取消`actions`
- 实现本地存储等副作用
- 仅适用于特定`stores`

使用`pinia.use()`将插件添加到`pinia`实例。最简单的示例是通过返回一个对象向所有Store添加一个静态属性

```js
import { createPinia } from 'pinia'

// 向安装此插件后创建的每个 store 添加名为`Secret`的属性
// 此文件可能位于不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// 将插件交给 pinia
pinia.use(SecretPiniaPlugin)

// 在另一个文件中使用
const store = useStore()
store.secret // 'the cake is a lie'
```

这对于添加全局对象(如 `router`、`modal`, 或 `toast` )很有用。

### Plugins 引言

Pinia插件是一个函数，它可以选择性地返回要添加到`store`的属性。它需要一个可选参数，即上下文：

```js
export function myPiniaPlugin(context) {
  context.pinia // 使用`createPinia()`创建的Pinia
  context.app // 当前使用`createApp()`创建的应用(仅限Vue 3)
  context.store // plugin store 的规模正在扩大
  context.options // 定义存储的Options对象传递给`fineStore()`
  // ...
}
```

然后使用`pinia.use()`将此函数传递给`pinia`：

```js
pinia.use(myPiniaPlugin)
```

插件只应用于在`Pinia`传递给应用程序之后创建的`store`，否则它们将不会被应用。

### 扩展 Store

您只需在 plugin 中返回属性的一个对象，即可将属性添加到每个store ：

```js
pinia.use(() => ({ hello: 'world' }))
```

您也可以直接在`store`上设置该属性，但**如果可能，请使用 return 的版本，以便DevTools可以自动跟踪它们：**

```js
pinia.use(({ store }) => {
  store.hello = 'world'
})
```

plugin 返回的任何属性都将由`DevTools`自动跟踪，因此，为了使`hello`在`DevTools`中可见，请确保仅当您想要在`DevTools`中调试它时，仅在开发模式下将其添加到`store._customProperties`

```js
// 从上面的示例可以看出
pinia.use(({ store }) => {
  store.hello = 'world'
  // 一定要让你的打包程序处理好这件事。默认情况下，webpack和 vite 应该这样做
  if (process.env.NODE_ENV === 'development') {
    // 添加您在 store 上设置的任何密钥
    store._customProperties.add('hello')
  }
})
```

请注意，每个`store`都用[`reactive`](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)包装，自动展开任何`Ref`(`ref()`、`Computed()`，...)

```js
const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // 每个store都有其各自的'hello`属性
  store.hello = ref('secret')
  // 它会自动展开
  store.hello // 'secret'

// 所有stores都共享`shared`属性值
  store.shared = sharedRef
  store.shared // 'shared'
})
```

这就是您可以在没有`.value`的情况下访问所有计算属性的原因，也是它们具有响应式的原因。

### 添加新的 state

如果要将新的`state`属性添加到`store`或要在 `hydration` 过程中使用的属性，则必须将其添加到两个位置：

- 在 store 上，以便您可以使用 `store.myState` 访问它
- 在 `store.$state`上，这样它就可以在DevTools中使用，**并且在SSR期间被序列化**

请注意，这允许您共享`ref`或`computed`

```js
const globalSecret = ref('secret')
pinia.use(({ store }) => {
  // 'secret' 在所有 stores 之间共享
  store.$state.secret = globalSecret
  store.secret = globalSecret
  // 它会自动展开
  store.secret // 'secret'

  const hasError = ref(false)
  store.$state.hasError = hasError
  // 必须始终设置此选项
  store.hasError = toRef(store.$state, 'hasError')

  // 在这种情况下，最好不要返回`hasError`
  // 因为它将显示在DevTools的`state`部分中
  // 无论如何，如果我们返回它，DevTools会显示它两次
})
```

**WARNING**:

如果您使用的是`Vue 2`，`Pinia`将受到与Vue相同的`reactivity`警告。在创建新的状态属性(如`Secret`和`hasError`)时，您将需要使用`@VUE/Compostion-API`中的 `Set`

```js
import { set } from '@vue/composition-api'
pinia.use(({ store }) => {
  if (!store.$state.hasOwnProperty('hello')) {
    const secretRef = ref('secret')
    // 如果数据要在SSR期间使用，您应该
    // 在`$state`属性上设置它，以便将其序列化
    // 在 hydration 过程中被吸收
    set(store.$state, 'secret', secretRef)
    // 也可以直接在 store 上设置，这样您就可以访问它
    // 两种方式都有: `store.$state.secret` / `store.secret`
    set(store, 'secret', secretRef)
    store.secret // 'secret'
  }
})
```

### 添加新的外部属性

当添加外部属性、来自其他库的类实例，或者仅仅是非`reactive`的东西时，您应该在将对象传递给`pinia`之前用`markRaw()`对其进行包装。以下是将`router`添加到每个`store`的示例

```js
import { markRaw } from 'vue'
// 根据您的router所在位置调整此设置
import { router } from './router'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
```

### 在插件内部调用 `$subscribe`

您也可以在插件中使用 [`store.$subscribe`](#订阅state) 和[`store.$onAction`](#订阅-actions)

```js
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 对 store 更改做出反应
  })
  store.$onAction(() => {
    // 对store actions 做出反应
  })
})
```

### 添加新选项

可以在定义`stores`时创建新的选项，以便以后从插件使用它们。例如，您可以创建一个`debounce`选项，允许您对任何 `action` 进行 `debounce`

```js
defineStore('search', {
  actions: {
    searchContacts() {
      // ...
    },
  },

  // 这将在稍后由插件读取
  debounce: {
    // debounce the action searchContacts by 300ms
    searchContacts: 300,
  },
})
```

然后，插件可以读取该选项来包装 `actions` 并替换原始`actions`

```js
// 使用任何 debounce 的库
import debounce from 'lodash/debunce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // 我们正在用新的 actions 覆盖于 actions 之上。
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})
```

请注意，使用`setup`语法时，自定义选项作为第三个参数传递

```js
defineStore(
  'search',
  () => {
    // ...
  },
  {
    // 这将在稍后由插件读取
    debounce: {
      // debounce the action searchContacts by 300ms
      searchContacts: 300,
    },
  }
)
```

### TypeScript 支持

上面显示的所有内容都可以通过键入支持来完成，因此您永远不需要使用 `any` 或 `@ts-ignore`

#### Typing plugins

`Pinia`插件的类型如下所示：

```ts
import { PiniaPluginContext } from 'pinia'

export function myPiniaPlugin(context: PiniaPluginContext) {
  // ...
}
```

#### 录入新的store属性

向`stores`添加新属性时，还应该扩展`PiniaCustomProperties`接口

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // 通过使用setter，我们可以同时允许 strings 和 refs
    set hello(value: string | Ref<string>)
    get hello(): string

    // 您也可以定义更简单的值
    simpleNumber: number
  }
}
```

然后可以安全地写入和读取：

```ts
pinia.use(({ store }) => {
  store.hello = 'Hola'
  store.hello = ref('Hola')

  store.number = Math.random()
  // @ts-expect-error: we haven't typed this correctly
  store.number = ref(Math.random())
})
```

`PiniaCustomProperties`是一种泛型类型，允许您引用`store`的属性。设想以下示例，其中我们将初始选项复制为`$options`(这仅适用于选项 `store` )

```ts
pinia.use(({ options }) => ({ $options: options }))
```

我们可以通过使用`PiniaCustomProperties`的4种泛型类型来正确键入：

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties<Id, S, G, A> {
    $options: {
      id: Id
      state?: () => S
      getters?: G
      actions?: A
    }
  }
}
```

**!TIP** 在泛型中扩展类型时，它们的命名必须与源代码中的完全相同。`ID`不能命名为`id`或`I`，`S`不能命名为`State`。以下是每个字母的含义：

- S: State
- G: Getters
- A: Actions
- SS: Setup Store / Store

#### 新 state 的类型

当添加新的`state`属性(同时添加到`store`和`store.$state`)时，您需要将类型添加到`PiniaCustomStateProperties`。与`PiniaCustomProperties`不同，它只接收通用的`State`

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomStateProperties<S> {
    hello: string
  }
}
```

#### 创建新的 creation 选项

在为`fineStore()`创建新选项时，您应该扩展`DefineStoreOptionsBase`。与`PiniaCustomProperties`不同，它只公开两个泛型：`State`和`Store`类型，允许您限制可以定义的内容。例如，您可以使用操作的名称：

```ts
import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // 允许为任何 actions 定义 number of ms
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}
```

**!TIP** 还有一个`StoreGetters`类型用于从`Store`类型提取`getter`。也只能通过分别扩展类型`DefineStoreOptions`和`DefineSetupStoreOptions`来扩展`setup` `stores` 或选项`stores`的选项

### Nuxt.js

当与`Nuxt`一起使用`Pinia`时，首先您必须创建一个`Nuxt`插件。这将为您提供对`Pinia`实例的访问权限：

```ts
// plugins/myPiniaPlugin.js
import { PiniaPluginContext } from 'pinia'
import { Plugin } from '@nuxt/types'

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // 对`store`更改做出反应
    console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
  })

  return { creationTime: new Date() }
}

const myPlugin: Plugin = ({ pinia }) {
  pinia.use(MyPiniaPlugin);
}
export default myPlugin
```

注意: 以上示例使用的是`TypeScript`，如果您使用的是`.js`文件，则必须删除类型注释`PiniaPluginContext`和`Plugin`以及它们的导入

测试 actions