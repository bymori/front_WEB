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