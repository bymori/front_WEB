## Vue3组件化开发

### 认识组件的嵌套

- **前面我们是将所有的逻辑放到一个App.vue中：**
  - 在之前的案例中，我们只是`创建了一个组件App`
  - 如果我们一个应用程序`将所有的逻辑都放在一 个组件中`，那么这个组件就会变`成非常的臃肿和难以维护`；
  - 所以组件化的核心思想应该是`对组件进行拆分`，拆分成`一个个小的组件`；
  - 再`将这些组件组合嵌套在一起`，最终形成`我们的应用程序`；
- 我们来分析一下"下面代码的嵌套逻辑，假如我们将所有的代码逻辑都放到一一个App.vue
  组件中：
  - 我们会发现，将所有的代码逻辑全部放到一一个组件中，代码是非常的臃肿和难以维
    护的。
  - 并且在真实开发中，我们会有更多的内容和代码逻辑，对于扩展性和可维护性来说都是非常差的。
  - 所以，在真实的开发中，我们会对组件进行拆分，拆分成一一个功能的小组件。

### 组件的拆分

- 我们可以按照如下的方式进行拆分：

  ![image-20211011194820607](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011194820607.png)

- 按照如上的拆分方式后，我们开发对应的逻辑只需要去对应的组件编写就可。

### 组件的css作用域

![image-20211011204034178](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011204034178.png)

- ！style中 添加了scoped 但是还是被加入了样式 

- 解决方法 

1. 添加class 不对HTML 标签定义属性
2. Hello World组件 外层添加一层div



### 组件的通信

- **上面的嵌套逻辑如下，它们存在如下关系：**
  - App组件是Header、Main、 Footer组件的父组件；
  - Main组件是Banner、ProductList 组件的父组件；
- 在开发过程中，我们会经常遇到到需要**组件之间相互进行通信：**
  - 比如`App可能使用了多个Header`,每个地方的`Header展示的内容不同`，那么我们就需要使用者`传递给Header一些数据`，让其进行展示；
  - 又比如我们在Main中一次性`请求了Banner数据和ProductList数据`，那么就需要`传递给它们`来进行展示；
  - 也可能是`子组件中发生了事件`，需要`由父组件来完成某些操作`，那就需要`子组件向父组件传递事件`；
- 总之，在一个Vue项目中，组件之间的通信是非常重要的环节，所以接下来我们就具体学习一下组件之间是如何相，互之间传递数据的；

#### 父子组件之间通信的方式

- 父子组件之间如何进行通信呢？

  - 父组件传递给子组件：通过props属性；

  - 子组件传递给父组件：通过$emit触发事件

    ![image-20211011204932346](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011204932346.png)

##### 父组件传递给子组件

- 在开发中很常，见的就是**父子组件之间通信**，比如父组件有一-些数据，需要子组件来进行展示：
  - 这个时候我们可以`通过props来完成组件之间的通信`；
- **什么是Props呢？**
  - Props是你可以在组件上`注册一些自定义的attribute`;
  - 父组件给`这些attribute赋值`，`子组件通过attribute的名称获取到对应的值`；
- **Props有两种常见的用法**：

  - `方式一：字符串数组`，数组中的字符串就是attribute的名称；

    ![image-20211011211024902](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011211024902.png)

    

  - `方式二：对象类型`,对象类型我们可以在指定attribute名称的同时，指定它需要传递的类型、是否是必须的、默认值等等；

    

##### Props的对象用法

- 数组用法中我们**只能说明传入的attribute的名称**，并**不能对其进行任何形式的限制**，接下来我们来看一下**对象的写法**是如何让我们的props变得更加完善的。

- **当使用对象语法的时候，我们可以对传入的内容限制更多：**

  - 比如指定传入的`attribute的类型；`

  - 比如指定传，入的`attribute是否是必传的；`

  - 比如指定没有传入时，`attribute的默认值；`

    ```js
    props: {
        title: String,
        content: {
          type: String,//类型
          required: true,//必传参数
          default: '123'//默认值 和上面必传冲突
        }
      }
    ```

- 那么type的类型都可以是哪些呢？

  - String
  - Number
  - Boolean
  - Array
  - Object
  - Date
  - Function
  - Symbol

- 对象类型的其他写法

  ![image-20211011212334444](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011212334444.png)

  - **Prop的大小写命名(camelCase vs kebab-case)**

    - HTML中的attribute名是大小写不敏感的，所以浏览器：会把所有大写字符解释为小写字符

    - 这意味着当你使用DOM中的模板时，camelCase (驯驼峰命名法）的prop名需要使用其等价的kebab-case(短横线分隔命名）命名

      ![image-20211011212850316](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011212850316.png)

  - **非Prop的Attribute**

    - 当我们`传递给一个组件某个属性`，但是`该属性并没有定义对应的props或者emits`时，就称之为`非Prop的Attribute`;
    - 常见的包括`class、style、id属性`等；

  - **Attribute继承**

    - 当`组件有单个根节点`时，`非Prop的Attribute将自动添加到根节点的Attribute`中：

  - **禁用Attribute继承和多根节点**

  - 如果我们**不希望组件的根元素继承attribute**，可以在组件中设置**inheritAttrs: false**

    - 禁用attribute继承的`常见情况`是`需要将attribute应用于根元素之外的其他元素`

    - 我们可以通过`$attrs来访问所有的非props的attribute`;

      ```html
      <h2 :class="$attrs.class">{{title}}</h2>
      <h2 v-bind="$attrs">{{title}}</h2>
      ```

      

  - **多个根节点的attribute**

    - `多个根节点的attribute如果没有显示的绑定`，那么会报警告，我们`必须手动的指定要绑定到哪一个属性`上：

      ```html
      <template>
        <h2>MultiRootElement11</h2>
        <h2 :id="$attrs.id">MultiRootElement22</h2>
        <h2>MultiRootElement33</h2>
      </template>
      ```

      

- [Vue.js #  Prop 验证](https://v3.cn.vuejs.org/guide/component-props.html#prop-%E9%AA%8C%E8%AF%81)



##### 子组件传递给父组件

- **什么情况下子组件需要传递内容到父组件呢？**
  - 当`子组件有一些事件发生`的时候，比如在组件中发生了点击，父组件需要切换内容；
  - 子组件`有一些内容想要传递给父组件`的时候；
- **我们如何完成上面的操作呢？**
  - 首先，我们需要在`子组件中定义好在某些情况下触发的事件名称`；
  - 其次，在`父组件中以v-on的方式传入要监听的事件名称`，并且绑定到对应的方法中；
  - 最后，在子组件中发生某-个事件的时候，`相根据事件名称触发对应的事件`；

##### 自定义事件的流程

- 我们封装一个CounterOperation.vue的组件：

  - 内部其实是监听两个按钮的点击，点击之后通过this.$emit的方式发出去事件；

- 自定义事件的时候，我们也可以传递一些参数给父组件：

  ```js
  incrementN () {
        console.log(`+${this.num}`);
        this.$emit('addN', this.num, '沫沫', 19)
      }
  ```

  

  - 在vue3当中，我们可以对传递的参数进行验证：

    ```js
    emits: {
        add: null,
        sub: null,
        addN: (num, name, age) => {
          console.log(num, name, age);
          if (num > 10) return true
          return false
        }
      },
    ```

  


## 非父子组件的通信

- 在开发中，我们构建了组件树之后，除了**父子组件之间的通信**之外，还会有**非父子组件之间**的通信。
- **这里我们主要讲两种方式：**
  - `Provide/Inject`
  - `Mitt全局事件总线`

### Provide/Inject

- Provide/Inject用于**非父子组件之间共享数据**：
  - 比如有`一些深度嵌套的组件，子组件想要获取父组件的部分内容`；
  - 在这种情况下，如果我们仍然`将props沿着组件链逐级传递`下去，就会非常的麻烦；
- 对于这种情况下，**我们可以使用Provide和Inject** :
  - 无论层级结构有多深，父组件都可以作为其所有子组件的`依赖提供者`；
  - 父组件有一个`provide选项`来提供数据；
  - 子组件有一个`inject选项`来开始使用这些数据；
- 实际上，你可以将依赖注入看作是**"long range props”**
  - 父组件不需要知道哪些子组件使用它provide的property
  - 子组件不需要知道inject的property来自哪里

![image-20211011232930551](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011232930551.png)

### Provide和Inject基本使用

- 我们开发一个这样的结构：

  ![image-20211011233208206](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211011233208206.png)

![image-20211012002333844](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012002333844.png)

#### Provide和Inject函数的写法

- 如果Provide中提供的一些数据是来自data，那么我们可能会想要通过this来获取
- 需要把 provide 写成函数形式 

#### 处理响应式数据

- 我们先来验证一个结果：**如果我们修改了this.names的内容，那么使用length的子组件会不会是响应式的？**
- 我们会发现对应的子组件中是**没有反应的**：
  - 这是因为当我们`修改了names之后`，之前在provide中引入的`this.names.length本身并不是响应式`的；
- **那么怎么样可以让我们的数据变成响应式的呢？**
  - 非常的简单，我们可以使用`响应式的一些API`来完成这些功能，比如说`computed函数`；
  - 这个computed是`vue3的新特性`
- **注意：我们在使用length的时候需要获取其中的value**
  - 这是因为`computed返回的是一个ref对象`，需要取出其中的` .value来使用`

### 全局事件总线mitt库

- Vue3从实例中移除了$on、$off和$once;方法，所以我们如果希望**继续使用全局事件总线**，**要通过第三方的库**：

  - Vue 3官方有推荐一些库，`例如，mitt或tiny-emitter;`
  - 下面主要是`mitt库`的使用；

- 首先，我们需要先安装这个库：

  ```bash
  npm install mitt
  ```

- 其次，我们可以封装一个工具eventbus.js

  ```js
  import mitt from 'mitt';
  
  const emitter = mitt();
  
  export default emitter;
  ```

#### 使用事件总线工具

- 在项目中可以使用它们：

  - 我们在HomeContent.vue中监听事件；

  - 我们在About.vue中触发事件；

    ```vue
    // About.vue
    btnClick () {
          console.log('About按钮点击了');
          emitter.emit('ioinn', { name: 'io小栈', age: 19 })
          emitter.emit('momo', { name: '沫沫', age: 19 })
        }
    
    // HomeContent.vue
    created () {
        emitter.on('ioinn', (info) => {
          console.log('ioinn:', info);
        })
        emitter.on('momo', (info) => {
          console.log('momo:', info);
        })
        emitter.on('*', (type, info) => {
          console.log('* listenr:', type, info);
        })
      },
    ```



#### Mitt的事件取消

- 在某些情况下我们可能希望**取消掉之前注册的函数监听**：

  ```js
  //取消 emitter 中所有的监听
        emitter.all.clear()
  
  // 定义一个函数
  function onFoo() {}
  emitter.on('foo', onFoo)   // 监听
  emitter.off('foo', onFoo)  // 取消监听
  ```





## 认识插槽Slot

- **在开发中，我们会经常封装一一个个可复用的组件：**

  - 前面我们会`通过props传递`给组件一些数据，让组件来进行展示；
  - 但是为了让这个组件具备`更强的通用性`，我们`不能将组件中的内容限制为固定的div、span`等等这些元素；
  - 比如某种情况：下我们使用组件，希望组件显示的是`一个按钮`，某种情况下我们使用组件希望显示的是`一张图片`；
  - 我们应该让使用者可以决定`某一块区域到底存放什么内容和元素`；

- **举个栗子：假如我们定制一一个通用的导航组件-NavBar**

  - 这个组件分成三块区域：`左边-中间-右边`，每块区域的内容是不固定；

  - 左边区域可能显示一个菜单图标，也可能显示一个返回按钮，可能什么都不显示；

  - 中间区域可能显示一个搜索框，也可能是一 个列表，也可能是一个标题，等等；

  - 右边可能是一个文字，也可能是一 个图标，也可能什么都不显示；

    ![image-20211012153023488](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012153023488.png)

#### 如何使用插槽slot?

- **这个时候我们就可以来定义插槽slot:**
  - 插槽的使用过程其实是`抽取共性、预留不同`
  - 我们会将`共同的元素、内容依然在组件内`进行封装；
  - 同时会将`不同的元素使用slot作为占位`，让外部决定到底显示什么样的元素；
- **如何使用slot呢？**
  - Vue中将`<slot>元素作为承载分发内容`的出口；
  - 在封装组件中，使用`特殊的元素<slot>`就可以为封装组件`开启一个插槽`
  - 该插槽`插入什么内容取决于父组件`如何使用；

#### 插槽的基本使用

- 我们一个组件MySlotCpn.vue:该组件中有一个插槽，我们可以在插槽中放入需要显示的内容；
- 我们在App.vue中使用它们：我们可以插入普通的内容、html元素、组件元素，都可以是可以的；



#### 插槽的默认内容

- 有时候我们希望在使用插槽时，如果**没有插入对应的内容**，**那么我们需要显示一个`默认的内容`**

  - 当然这个默认的内容只会在没有提供插入的内容时，才会显示；

    ```vue
    // App.vue
    <!-- 默认内容 -->
        <my-slot-cpn>
        </my-slot-cpn>
    
    // MySlotCpn.vue
    <template>
      <div>
        <h2>组件开始</h2>
        <slot>
          <i>这里是默认显示的i元素</i>
        </slot>
        <h2>组件结束</h2>
      </div>
    </template>
    ```



#### 具名插槽的使用

- 事实上，我们希望达到的效果是插槽对应的显示，这个时候我们就可以使用**具名插槽**：

  - 具名插槽顾名思义就是给`插槽起一个名字`,<slot>元素有一个`特殊的attribute:name;`

  - 一个`不带name的slot`，`会带有隐含的名字default`

    ![image-20211012161308055](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012161308055.png)



#### 动态插槽名

- **什么是动态插槽名呢？**

  - 目前我们使用的插槽名称都是固定的；

  - 比如v-slot:left、v-slot:center等等；

  - 我们可以通过` v-slot:[dynamicSlotName] `方式动态绑定一 个名称；

    ![image-20211012162742005](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012162742005.png)



##### 具名插槽使用的时候缩写

- 跟v-on和v-bind一样，`v-slot也有缩写`；

- 即把参数之前的`所有内容(v-slot:)替换为字符#;`

  ```html
  <!-- 具名插槽使用的时候缩写 # -->
        <template #left>
          <button>左边的按钮</button>
        </template>
  ```

  

### 渲染作用域

- **在Vue中有渲染作用域的概念：**

  - 父级模板里的所有内容都是`在父级作用域中编译`的；，
  - 子模板里的所有内容都是`在子作用域中编译`的；

- 如何理解这句话呢？我们来看一个案例：

  - 在我们的案例中ChildCpn自然是可以让问自己作用域中的title内容的；

  - 但是在App中，是访问不了ChildCpn中的内容的，因为它们是跨作用域的访问；

    ![image-20211012164554645](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012164554645.png)



#### 认识作用域插槽

- https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD

- 但是有时候我们希望插槽**可以访问到子组件中的内容**是非常重要的：

  - 当一个组件被用来渲染一个`数组元素`时，我们`使用插槽`，并且希望`插槽中没有显示每项的内容`
  - 这个Vue给我们提供了`作用域插槽`

- 我们来看下面的一个案例：

  1. 在App.vue中定义好数据

  2. 传递给ShowNames组件中

  3. ShowNames组件中遍历names数据

  4. 定义插槽的prop

  5. 通过V-slot:default的方式获取到slot的props

  6. 使用slotProps中的item和index

     ![image-20211012172212151](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012172212151.png)



##### 独占默认插槽的缩写

- 如果我们的插槽是默认插槽default，那么在使用的时候v-slot:default="slotProrps"可以简写为v-slot="slotProps"

  ```vue
  <show-names :names="names">
        <template v-slot='soltProps'>
          <button>{{soltProps.item}}--{{soltProps.index}}</button>
        </template>
      </show-names>
  ```

  

- 并且如果我们的插槽只有默认插槽时，组件的标签可以被当做插槽的模板来使用，这样，我们就可以将v-slot直接用在组件上：

  ```vue
  <show-names :names="names"
                  v-slot='soltProps'>
        <strong>{{soltProps.item}}--{{soltProps.index}}</strong>
      </show-names>
  ```

  

##### 默认插槽和具名插槽混合

- 但是，如果我们有默认插槽和具名插槽，那么按照完整的template来编写

  ```vue
  <show-names :names="names"
                  v-slot='soltProps'>
        <strong>{{soltProps.item}}--{{soltProps.index}}</strong>
  
        <template>
          <h2>哈哈</h2>
        </template>
      </show-names>
  ```

  

- 只要出现多个插槽，请始终为所有的插槽使用完整的基于<template>的语法

  ```vue
  <show-names :names="names">
        <!-- <template v-slot:ioinn='soltProps'> -->
        <template v-slot='soltProps'>
          <div>{{soltProps.item}}--{{soltProps.index}}</div>
        </template>
      <template>
          <h2>哈哈</h2>
        </template>
      </show-names>
  ```

  

#### 切换组件案例

- **比如我们现在想要实现了一个功能：**

  - 点击一个tab-bar,切换不同的组件显示；

    ![image-20211012174425228](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012174425228.png)

- 这个案例我们可以通过两种不同的实现思路来实现：

  - `方式一`：通过v-if来判断，显示不同的组件；

    ```vue
    <template v-if="currentTab ==='home'">
          <home></home>
        </template>
        <template v-else-if="currentTab ==='about'">
          <about></about>
        </template>
        <template v-else>
          <category></category>
        </template>
    ```

    

  - `方式二`：动态组件的方式；

    - 动态组件是使用`component组件`，通过一个`特殊的attribute is`来实现：

      ```vue
      <button v-for="(item, index) in tabs"
                  :key="index"
                  @click="itemClick(item)"
                  :class="{active:currentTab === item}">
            {{item}}
          </button>
      
      <component :is="currentTab"></component>
      ```

      

    - **这个currentTab的值需要是什么内容呢？** 

      - 可以是通过`component函数注册`的组件；
      - 在一个`组件对象的components对象中注册的组件`；

##### 如果是动态组件我们可以给它们传值和监听事件吗？

- 也是一样的；

- 只是我们需要将`属性和监听事件`放到component_上来使用；

  ```vue
  <component :is="currentTab"
                 name='ioinn'
                 :age='19'
                 @pageClick='pageClick'></component>
  ```

  

### 认识keep-alive

- 我们先对之前的案例中About组件进行改造：

  - 在其中增加了一一个按钮，点击可以递增的功能；

    ![image-20211012194007559](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012194007559.png)

- 比如我们将counter点到10，那么生切换到home再切换回来about时，**状态是否可以保持呢**？

  - 答案是否定的；
  - 这是因为默认情况下，我们在`切换组件后`，`about组件会被销毁掉`，再次回来时`会重新创建组件`；

- 但是，在开发中某些情况我们希望继续保持组件的状态，而不是销毁掉，这个时候我们就可以**使用一个内置组件**：**keep-alive**



#### keep-alive属性

- **keep-alive有一些属性：**

  - `include` - string|RegExp|Array. 只有名称匹配的组件会被缓
    存；
  - `exclude` - string|Reg Exp|Array. 任何名称匹配的组件都不
    会被缓存；
  - `max` - number|string. 最多可以缓存多少组件实例，一旦达
    到这个数字，那么缓存组件中最近没有；被访问的实例会被销毁；

- **include和exclude prop允许组件有条件地缓存：**

  - 二者都可以用`逗号分隔字符串、正则表达式或一个数组`来表示；

  - 匹配首先检查组件自身的`name选项`；

    ![image-20211012195108421](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012195108421.png)



### Webpack的代码分包

- **默认的打包过程：**

  - 默认情况下，在构建整个组件树的过程中，因为组件和组件之间是`通过模块决化直接依赖`的，那么`webpack在打包时就会将组件模块打包到一起`(比如一个app.js文件中)；
  - 这个时候随着`项目的不断庞大`，`app.js文件的内容过大`，会造成`首屏的渲染速度变慢`；

- **打包时，代码的分包：**

  - 所以，对于一些`不需要立即使用的组件`，我们可以`单独对它们进行拆分`，拆分成一些`小的代码块chunk.js;`
  - 这些chunk.js会在需要时`从服务器加载下来`，并且`运行代码`，显示对应的内容；

- **那么webpack中如何可以对代码进行分包呢？**

  ![image-20211012201403952](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211012201403952.png)



#### Vue中实现异步组件

- 如果我们的项目过大了，对于**某些组件**我们希望**通过异步的方式来进行加载**（目的是可以对其进行分包处理），那么Vue中给我们提供了一个函数：**defineAsyncComponent**

- *defineAsyncComponent 接受两种类型的参数：*

  - `类型一`：工厂函数，该工厂函数需要返回一个Promise对象；

    ```js
    import { defineAsyncComponent } from 'vue'
    const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))
    ```

    

  - `类型二`：接受一个对象类型，对异步函数进行配置；

    ```js
    import { defineAsyncComponent } from 'vue'
    const AsyncCategory = defineAsyncComponent({
      loader: () => import('./AsyncCategory.vue'),
      // 加载过程中显示的组件
      loadingComponent: Loading,
      //   errorComponent //加载失败时显示的组件
      //在显示 loadingComponent 之前的延迟 默认值 200(ms)
      delay: 2000,
      // 如果提供了timeout 并且加载组件的时间超过了设定值，将显示错误组件
      // 默认值：Infinity 即永不超时，单位ms
      // timeout: o,
      // 定义组件是否可挂起 默认值：true
      /*
      * err  错误信息
      * retry  函数，调用retry尝试重新加载
      * * attempts  记录尝试的次数
      */
      onError: function (err, retry, attempts) { }
    })
    ```

    https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent

    

### 异步组件和Suspense

- 注意：**目前 Suspense 显示的是一个实验性的特性，API随时可能会修改。**

- **Suspense是一个内置的全局组件，该组件有两个插槽：**

  - `default`:如果default可以显示，那么显示default的内容；

  - `fallback` :如果default无法显示，那么会显示fallback插槽的内容；

    ```vue
    <suspense>
          <template #default>
            <async-category></async-category>
          </template>
          <template #fallback>
            <loading></loading>
          </template>
        </suspense>
    ```

    

### $refs的使用

- 某些情况下，我们在组件中想要**直接获取到元素对象或者子组件实例**：
  - 在Vue开发中我们是`不推荐进行DOM操作`的；
  - 这个时候，我们可以给`元素或者组件绑定一个ref的attribute属性`；

- **组件实例有一个$refs属性：**

  - 它一个对象Object，持有`注册过ref attribute的所有DOM元素和组件实例`。

    ```js
    btnClick () {
          // 访问元素
          console.log(this.$refs.title);
          console.log(this.$refs.title.innerHTML);
          // 访问组件实例
          console.log(this.$refs.navBar.msg);
          //   调用组件实例的方法
          this.$refs.navBar.sayHello()
        }
    ```

    

### `$parent和$root`

- 我们可以通过$parent来访问父元素。

- 也可以通过$root来实现，因为App是我们的根组件；

  ```js
  getParentAndRoot () {
        // 访问父组件实例
        console.log(this.$parent);
        console.log(this.$parent.mm);
        // 调用父组件 btnClick 方法
        this.$parent.btnClick()
  
        // 访问根组件
        console.log(this.$root);
      }
  ```

  

- 注意：在Vue 3中已经移除了$children的属性，所以不可以使用了。



## 认识生命周期

- **什么是生命周期呢？**
  - 每个组件都可能会经历从`创建、挂载、更新、卸载`等一系列的过程；
  - 在这个过程中的`某一个阶段`，用于可能会想要添`加一些属于自己的代码逻辑`（比如组件创建完后就请求一些服务器数据）；
  - 但是我们`如何可以知道目前组件正在哪一个过程`呢？Vue给我们提供了`组件的生命周期函数`；
- **生命周期函数：**
  - 生命周期函数是`一些钩子函数`，在`某个时间会被Vue源码内部进行回调；`
  - 通过对生命周期函数的回调，我们可以`知道目前组件正在经历什么阶段；`
  - 那么我们就可以`在该生命周期中编写属于自己的逻辑代码`了；



### 生命周期的流程

![生命周期的流程](https://gitee.com/bymori/pic-go-core/raw/master/img/lifecycle_zh.svg)

- 在线编辑svg http://www.zuohaotu.com/svg/
- https://blog.csdn.net/q915730058/article/details/108943024



#### 缓存组件的生命周期

- 对于缓存的组件来说，再次进入时，我们是**不会执行created或者mounted等生命周期函数的**：

  - 但是有时候我们确实希望监听到何时重新进入到了组件，何时离开了组件；

  - 这个时候我们可以使用`activated和deactivated`这两个生命周期钩子函数来监听；

    ```js
    activated () {
        console.log("About activated 已激活");
      },
      deactivated () {
        console.log("About deactivated 停用");
      },
    ```

    

#### 组件的v-model

- [多个 v-model 绑定](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%9A%E4%B8%AA-v-model-%E7%BB%91%E5%AE%9A)





## Vue3过渡&动画实现

- [过渡 & 动画概述](https://v3.cn.vuejs.org/guide/transitions-overview.html)

### 认识动画

- 在开发中，我们想要给一个组件的**显示和消失添加某种过渡动画**，可以很好的**增加用户体验**：
  - React框架本身并`没有提供任何动画相关的API`，所以在在React中使用过渡动画我们需要使用一个`第三方库react-transition-group`;
  - Vue中为我们提供`一些内置组件和对应的API`来完成动画，利月驼们我们可以`方便的实现过渡动画效果`；

- **我们来看一个案例：**

  - Hello World的显示和隐藏；

  - 通过“下面的代码实现，是不会有任何动画效果的；

    ![image-20211013000932071](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013000932071.png)

- 没有动画的情况下，**整个内容的显示和隐藏会非常的生硬**：

  - 如果我们希望给`单元素或者组件实现过渡动画`，可以`使用transitiorn 内置组件`来完成动画；

### Vue的transition动画

- **Vue提供了transition的封装组件**，在下列情形中，可以给任何元素和组：件添加进入/离开过渡：

  - 条件渲染 (使用 `v-if`)

  - 条件展示 (使用 `v-show`)

  - 动态组件

  - 组件根节点

    ```vue
    <transition name="ioh2">
          <h2 v-if="isShow">hello</h2>
        </transition>
    
    <style scoped>
    .ioh2-enter-from,
    .ioh2-leave-to {
      opacity: 0;
    }
    .ioh2-enter-to,
    .ioh2-leave-from {
      opacity: 1;
    }
    .ioh2-enter-active,
    .ioh2-leave-active {
      transition: opacity 1s ease;
    }
    </style>
    ```

    

### Transition组件的原理

- **我们会发现，Vue自动给h2元素添加了动画，这是什么原因呢？**
- **当插入或删除包含在transition组件中的元素时，Vue将会做以下处理：**
  1. 自动嗅探`目标元素是否应用了CSS过渡或者动画`，如果有，那么在`恰当的时机添加/删除CSS类名`
  2. 如果transition组件提供了`JavaScript钩子函数`，这些钩子函数将在恰当的时机被调用；
  3. 如果`没有找到JavaScript钩子并且也没有检测到CSS过渡/动画`，`DOM插入`、`删除操作将会立即执行`；
- 过渡动画class
  - **我们会发现上面提到了很多个class，事实上Vue就是帮助我们在这些class之间来回切换完成的动画**：
  - `v-enter-from` :定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
  - `v-enter-active`:定义进，入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进，入过渡的过程时间，延迟和曲线函数。
  - `v-enter-to`:定义进入过渡的结束状态。在元素被插入之后下一帧生效(与此同时v-enter-from被移除)，在过渡/动画完成之后移除。
  - `v-leave-from` :定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下-一帧被移除。
  - `v-leave- active`:定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
  - `v-leave-to`:离开过渡的结束状态。在离开过渡被触发之后下一帧生效(与此同时v-leave-from被删除)，在过渡/动画完成之后移除。

#### class添加的时机和命名规则

![过渡class](https://gitee.com/bymori/pic-go-core/raw/master/img/transitions.svg)

- **class的name命名规则如下**
  - 如果我们使用的是一个没有name的transition，那么月有的class是以 v- 作为默认前缀；
  - 如果我们添加了一个name属性，比如<transition name="ioh2">，那么所有的class会以 ioh2- 开头；



#### 过渡css动画

- 前面我们是**通过transition来实现的动画效果**，另外我们也**可以通过animation来实现**

  ```vue
  <transition name="ioh2">
        <h2 class="title"
            v-if="isShow">hello</h2>
      </transition>
  
  <style scoped>
  .ioh2-enter-active {
    animation: bounce 1s ease;
  }
  
  .ioh2-leave-active {
    animation: bounce 1s ease reverse;
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  ```

  

#### 同时设置过渡和动画

- Vue为了知道过渡的完成，内部是在监听transitionend或animationend，到底使用哪一个取决于元素应用的CSS规则：

  - 如果我们`只是使用了其中的一个`，那么`Vue能自动识别类型并设置监听`；

- **但是如果我们同时使用了过渡和动画呢？**

  - 并且在这个情况下可能某一个动画执行结束时，另外一个动画还没有结束；

  - 在这种情况下，我们可以设置type属性为animation或者transition 来明确的告知Vue监听的类型；

    ```vue
    <transition name="ioh2"
                    type="animation">
          <h2 class="title"
              v-if="isShow">hello</h2>
        </transition>
    ```

    

#### 显示的指定动画时间

- 我们也可以显示的来**指定过渡的时间**，通过**duration属性**。

- **duration可以设置两种类型的值**：

  - `number类型`：同时设置进，入和离开的过渡时间；

  - `Object类型`：分别设置进入和离开的过渡时间；

    ```vue
    <transition name="ioh2"
                    type="animation"
                	:duration="1000"
                	// OR
                    :duration="{enter:800,leave:100}">
          <h2 class="title"
              v-if="isShow">hello</h2>
        </transition>
    ```



#### 过渡的模式mode

- [多个元素的过渡](https://v3.cn.vuejs.org/guide/transitions-enterleave.html#%E5%A4%9A%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E8%BF%87%E6%B8%A1)

- 我们来看当前的动画在两个元素之间切换的时候存在的问题： 

  ![image-20211013010429206](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013010429206.png)

- 我们会发现 hello 和 沫沫 是同时存在的：

  - 这是因为默认情况下`进入和离开动画`是同时发生的；
  - 如果确实我们希望达到这个的效果，那么是没有问题；



#### appear初次渲染

- 默认情况下，首次渲染的时候是没有动画的，如果我们希望给他添加_上去动画，那么就可以增加另外一个属性 appear

  ```vue
  <transition name="ioh2"
                  mode="out-in"
                  appear>
        <component :is="isShow ? 'home' : 'about'"></component>
      </transition>
  ```

  

### 认识animate.css

- 如果我们手动一 个个来编写这些动画，那么效率是比较低的，所以在开发中我们可能会引用一些**第三方库的动画库，比如animate.css**

- **什么是animate.css呢？**

  - **Animate.css** is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages,sliders, and attention-guiding hints.
  - **Animate.css**是一个已经准备好的、跨平台的动画库为我们的web项目，对于强调、主页、滑动、注意力引导非常有用；

- **如何使用Animate库呢？**

  - 第一步：需要`安装animate.css`库；

    ```bash
    npm install animate.css
    ```

    

  - 第二步：导入`animate.css`库的样式；

    ```js
    // main.js
    import 'animate.css';
    ```

    

  - 第三步：使用`animation动画或者 animate提供的类`；

    - 用法一：直接使用animate库中定义的keyframes动画；
      用法二：直接使用animate库提供给我们的类；

      ```vue
      //用法一
      .ioh2-enter-active {
        animation: bounceInUp 1s ease;
      }
      .ioh2-leave-active {
        animation: bounceInUp 1s ease reverse;
      }
      
      //用法二
      <transition name="ioh2"
                      enter-active-class="animate__animated animate__fadeInDown"
                      leave-active-class="animate__animated animate__flipInY">
            <h2 v-if="isShow">Hello</h2>
          </transition>
      ```

      



#### 自定义过渡class

- 我们可以通过以下attribute来自定义过渡类名：
  - enter-from-class
  - enter-active-class
  - enter-to-class
  - leave-from-class
  - leave-active-class
  - leave-to-class
- 他们的**优先级高于普通的类名**，这对于Vue的过渡系统和其他第三方CSS动画库，如 Animate.css 结合使用十分有用。



### 认识gsap库

- 某些情况下我们希望**通过JavaScript来实现一 些动画的效果**，这个时候我们可以选择使用**gsap库**来完成。

- **什么是gsap呢？**

  - GSAP是The GreenSock Animation Platform(GreenSock动画平台)的缩写；
  - 它可以`通过Java Script为CSS属性、 SVG、Canvas等`设置动画，并且是浏览器兼容的；

- **这个库应该如何使用呢？**

  - 第一步：需要`安装gsap`库；

    ```bash
    npm install gsap
    ```

    

  - 第二步：导入`gsap库`；

    ```js
    // typical import
    import gsap from "gsap";
    ```

    

  - 第三步：使用`对应的api`即可；



### JavaScript钩子

- https://v3.cn.vuejs.org/guide/transitions-enterleave.html#javascript-%E9%92%A9%E5%AD%90

- 在使用动画之前，我们先来看一下transition组件给我们提供的Java Script钩子，这些钩子可以帮助：我们监听动画执行到什么阶段了。

```html
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false"
>
  <!-- ... -->
</transition>
```

- 当我们使用JavaS cript来执行过渡动画时，需要`进行done回调`，！！！否则它们将会被同步调用，过渡会立即完成。
- 添加 ` :css="false"` ,也会让Vue会`跳过CSS的检测`，除了性能略高之外，这可以避免过渡过程中（CSS规则的影响。

##### gsap库的使用

```vue
<transition @enter="enter"
                @leave="leave" :css="false">
      <h2 class="title"
          v-if="isShow">Hello</h2>
    </transition>

enter (el, done) {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    },
    leave (el, done) {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    },
```



### 认识列表的过渡

- 目前为止，过渡动画我们只要是**针对单个元素或者组件**的：
  - 要么是`单个节点`； 
  - 要么是`同一时间渲染多个节点中的一个`； 

- 那么如果希望渲染的是**一个列表**，并且**该列表中添加删除数据也希望有动画执行**呢？
  - 这个时候我们要`使用 <transition-group> 组件`来完成；

- **使用<transition-group> 有如下的特点：**
  - 默认情况下，它`不会渲染一个元素的包裹器`，但是你可以`指定一个元素并以 tag attribute 进行渲染`； 
  - `过渡模式不可用`，因为我们不再相互切换特有的元素；
  - 内部元素总是`需要提供唯一的 key attribute 值`； 
  - `CSS 过渡的类将会应用在内部的元素`中，而`不是这个组/容器本身`；

#### **列表过渡的移动动画**

- 在上面的案例中**虽然新增的或者删除的节点是有动画**的，但是**对于哪些其他需要移动的节点是没有动画**的：
  - 我们可以通过使用一个`新增的 v-move 的class`来完成动画；
  - 它会`在元素改变位置的过程`中应用；
  - 像之前的名字一样，我们可以`通过name来自定义前缀`；



# **Composition API**

### **认识Mixin**

- 目前我们是使用组件化的方式在开发整个Vue的应用程序，但是**组件和组件之间有时候会存在相同的代码逻辑**，我们希望对**相同的代码逻辑进行抽取**。 

- 在Vue2和Vue3中都支持的一种方式就是**使用Mixin来完成**： 
  - Mixin提供了一种非常灵活的方式，来`分发Vue组件中的可复用功能`； 
  - 一个Mixin对象可以包含`任何组件选项`
  - 当组件使用Mixin对象时，所有`Mixin对象的选项将被 混合 进入该组件本身的选项`中；

#### **Mixin的基本使用**

![image-20211013150945494](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013150945494.png)



#### **Mixin的合并规则**

- **如果Mixin对象中的选项和组件对象中的选项发生了冲突，那么Vue会如何操作呢？**
  - 这里`分成不同的情况`来进行处理；

- **情况一：如果是data函数的返回值对象**
  - 返回值对象默认情况下会`进行合并`； 
  
  - 如果data返回值对象的属性发生了冲突，那么会`保留组件自身的数据`； 
  
- **情况二：如何生命周期钩子函数**

  - 生命周期的钩子函数`会被合并到数组`中，都会被调用；

- **情况三：值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。**
- 比如都有`methods选项`，并且都定义了方法，那么`它们都会生效`； 
  
- 但是如果`对象的key相同`，那么`会取组件对象的键值对`；

#### **全局混入Mixin**

- **如果组件中的某些选项，是所有的组件都需要拥有的，那么这个时候我们可以使用`全局的mixin`：** 

  - 全局的Mixin可以使用` 应用app的方法 mixin` 来完成注册；

  - 一旦注册，那么`全局混入的选项将会影响每一个组件`；

    ```js
    const app = createApp(App);
    
    app.mixin({
      data() {
        return {};
      },
      methods: {},
      created() {
        console.log('全局的created生命周期');
      },
    });
    
    app.mount('#app');
    ```

    

#### **extends**

- 另外一个类似于Mixin的方式是**通过extends属性**： 

  - 允许声明扩展另外一个组件，`类似于Mixins`；

    ![image-20211013153338307](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013153338307.png) 

- 在开发中**extends用的非常少**，在Vue2中比较**推荐大家使用Mixin**，而在Vue3中**推荐使用Composition API**。

### **Options API的弊端**

- 在Vue2中，我们**编写组件的方式是Options API**： 

  - Options API的一大特点就是在`对应的属性`中编写`对应的功能模块`； 

  - 比如`data定义数据`、`methods中定义方法`、`computed中定义计算属性`、`watch中监听属性改变`，也包括`生命周期钩子`； 

- **但是这种代码有一个很大的弊端：**

  - 当我们`实现某一个功能`时，这个`功能对应的代码逻辑`会被`拆分到各个属性`中；

  - 当我们`组件变得更大`、`更复杂`时`，逻辑关注点的列表`就会增长，那么`同一个功能的逻辑就会被拆分的很分散`； 

  - 尤其对于那些一开始`没有编写这些组件的人`来说，这个组件的代码是`难以阅读和理解的`（阅读组件的其他人）；

- **下面我们来看一个非常大的组件，其中的逻辑功能按照颜色进行了划分：**

  - 这种`碎片化的代码`使用`理解和维护这个复杂的组件`变得异常困难，并且`隐藏了潜在的逻辑问题`； 

  - 并且当我`们处理单个逻辑关注点`时，需要不断的`跳到相应的代码块`中；



#### **大组件的逻辑分散**



<center>
    <img src="https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013155750180.png"/>
    <img src="https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013155838114.png"/>
</center>



- 如果我们能将`同一个逻辑关注点相关的代码`收集`在一起`会更好。 

- **这就是Composition API想要做的事情，以及可以帮助我们完成的事情。**

- 也有人把Vue CompositionAPI简称为**VCA**。



### **认识Composition API**

- 那么既然知道Composition API想要帮助我们做什么事情，接下来看一下**到底是怎么做**呢？
  - 为了开始使用Composition API，我们需要有一个可以实际使用它`（编写代码）的地方`； 

  - 在Vue组件中，这个位置就是` setup 函数`； 

- **setup其实就是组件的另外一个选项：**

  - 只不过这个选项强大到我们可以`用它来替代之前所编写的大部分其他选项`； 

  - 比如`methods、computed、watch、data、生命周期等`等； 

- **接下来我们一起学习这个函数的使用：**
- 函数的参数 
  
- 函数的返回值

#### **setup函数的参数**

- 我们先来研究一个setup函数的参数，它主要**有两个参数**： 
  - 第一个参数：`props`

  - 第二个参数：`context`

- props非常好理解，它其实就是**父组件传递过来的属性**会被**放到props对象**中，我们在**setup中如果需要使用**，那么就可以直接**通过props参数获取：**

    - 对于`定义props的类型`，我们还是`和之前的规则是一样的，在props选项中定义`； 

    - 并且在`template中`依然是可以`正常去使用props中的属性`，比如message； 

    - 如果我们`在setup函数中想要使用props`，那么`不可以通过 this 去获取`

    - 因为props有直接`作为参数传递到setup函数`中，所以我们可以`直接通过参数`来使用即可；

- 另外一个参数是context，我们也称之为是一个**SetupContext**，它里面**包含三个属性**： 

  - `attrs`：所有的非prop的attribute； 

  - `slots`：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）；

  - `emit`：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）；

##### **setup函数的返回值**

- setup既然是一个函数，那么它也可以有**返回值**，**它的返回值用来做什么呢？**
  - setup的返回值可以在`模板template中被使用`； 

  - 也就是说我们可以`通过setup的返回值来替代data选项`； 

- 甚至是我们可以**返回一个执行函数**来**代替在methods中定义的方法**： 

- 但是，如果我们将 counter 在 increment 或者 decrement进行操作时，**是否可以实现界面的响应式呢？**

  - 答案是`不可以`； 

  - 这是因为对于一个`定义的变量`来说，默认情况下，`Vue并不会跟踪它的变化，来引起界面的响应式操作`；

#### **setup不可以使用this**

- **官方关于this有这样一段描述**

  - 表达的含义是`this并没有指向当前组件实例`； 

  - 并且`在setup被调用之前，data、computed、methods`等都没有被解析； 

  - 所以`无法在setup中获取this`； 

    ![image-20211013182223998](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013182223998.png)

### **Reactive API**

- 如果想为在setup中定义的数据提供响应式的特性，那么我们可以**使用reactive的函数**： 

  ```js
  const state = reactive({
        counter: 100
      })
  ```

  

- **那么这是什么原因呢？为什么就可以变成响应式的呢？**
  
  - 这是因为当我们`使用reactive函数处理我们的数据之后`，数据`再次被使用时`就会`进行依赖收集`； 
  
  - 当`数据发生改变时`，所有`收集到的依赖`都是`进行对应的响应式操作`（比如更新界面）；
  
  - 事实上，我们编写的`data选项`，也是在内部`交给了reactive函数`将其编程响应式对象的；

### **Ref API**

- reactive API对**传入的类型是有限制的**，它要求我们必须传入的是**一个对象或者数组类型**： 
  - 如果我们传入一个`基本数据类型（String、Number、Boolean）会报一个警告`； 

    ![image-20211013182437657](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211013182437657.png)

- 这个时候Vue3给我们提供了**另外一个API：ref API**

  - ref 会返回一个`可变的响应式对象`，该对象作为一个 **响应式的引用** 维护着它`内部的值`，这就是`ref名称的来源`； 

  - 它内部的值是`在ref的 value 属性中`被维护的；

- **这里有两个注意事项：**

  - 在`模板中引入ref的值`时，Vue会`自动帮助我们进行解包`操作，所以我们`并不需要在模板中通过 ref.value` 的方式来使用；

  - 但是在` setup 函数内部`，它依然是一个` ref引用`， 所以对其进行操作时，我们依然需要`使用 ref.value的方式`；

#### **Ref自动解包**

- **模板中的解包是浅层的解包**，如果我们的代码是下面的方式：

  - 如果我们**将ref放到一个reactive的属性**当中，那么**在模板中使用时，它会自动解包**：

    ```vue
    <template>
      <div>
        Home Page
        <h2>{{message}}</h2>
    
        <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
        <h2>当前计数: {{counter}}</h2>
        <button @click="increment">+1</button>
    
        <!-- ref的解包只能是一个浅层解包(info是一个普通的JavaScript对象) -->
        <h2>当前计数: {{info.counter.value}}</h2>
    
        <!-- 当如果最外层包裹的是一个reactive可响应式对象, 那么内部的ref可以解包 -->
        <h2>当前计数: {{reactiveInfo.counter}}</h2>
    
        <show-message :message="counter"></show-message>
      </div>
    </template>
    
    <script>
    import { ref, reactive } from "vue";
    export default {
      props: {
        message: {
          type: String,
          required: true
        }
      },
      setup () {
        // counter编程一个ref的可响应式的引用
        // counter = 100;
        let counter = ref(100)
    
        const info = {
          counter
        }
    
        const reactiveInfo = reactive({
          counter
        })
    
        // 局部函数
        const increment = () => {
          counter.value++;
          console.log(counter.value);
        }
        return {
          counter,
          info,
          reactiveInfo,
          increment
        }
      },
    }
    </script>
    ```



### **认识readonly**

- 我们通过**reactive或者ref可以获取到一个响应式的对象**，但是某些情况下，我们**传入给其他地方（组件）**的这个响应式对象希望**在另外一个地方（组件）被使用**，但是**不能被修改**，这个时候**如何防止这种情况的出现**呢？
  - Vue3为我们提供了`readonly的方法`； 

  - `readonly会返回原生对象的只读代理`（也就是它依然是一个Proxy，这是一个`proxy的set方法被劫持`，并且不能对其进行修改）；

- **在开发中常见的readonly方法会传入三个类型的参数：**

  - 类型一：`普通对象`； 

  - 类型二：`reactive返回的对象`； 

  - 类型三：`ref的对象`；

#### **readonly的使用**

- **在readonly的使用过程中，有如下规则：** 

  - readonly`返回的对象都是不允许修改的`；

  - 但是经过readonly处理的`原来的对象`是允许被修改的；

    - 比如 const info = readonly(obj)，`info对象是不允许被修改`的；

    - 当`obj被修改时`，`readonly返回的info对象`也会被修改；

    - 但是我们`不能去修改readonly返回的对象info`； 

  - 其实本质上就是`readonly返回的对象的setter方法被劫持`了而已；

    ```js
     setup () {
        // 1.普通对象
        const info1 = { name: "沫沫" };
        const readonlyInfo1 = readonly(info1);
    
        // 2.响应式的对象reactive
        const info2 = reactive({
          name: "沫沫"
        })
        const readonlyInfo2 = readonly(info2);
    
        // 3.响应式的对象ref
        const info3 = ref("沫沫");
        const readonlyInfo3 = readonly(info3);
    
    
        const updateState = () => {
          readonlyInfo3.value = "ioinn"
          info3.value = "ioinn";
        }
    
        return {
          updateState,
        }
      },
    ```

- **那么这个readonly有什么用呢？**

  - 在我们传递给其他组件数据时，往往希望其他组件使用我们传递的内容，但是不允许它们修改时，就可以使用readonly了；

#### **Reactive判断的API**

- **isProxy**
  - 检查对象`是否是由 reactive 或 readonly创建的 proxy`。 

- **isReactive**

  - 检查对象`是否是由 reactive创建的响应式代理`： 

  - 如果`该代理是 readonly 创建的`，但`包裹了由 reactive 创建的另一个代理`，它也会返回 true； 

- **isReadonly**
  - 检查对象`是否是由 readonly 创建的只读代理`。 
  
- **toRaw**
  - 返回 `reactive 或 readonly 代理的原始对象`（**不**建议保留对原始对象的持久引用。请谨慎使用）。
  
- **shallowReactive**
  - 创建一个响应式代理，它跟踪其自身 property 的响应性，但`不执行嵌套对象的深层响应式转换` (深层还是原生对象)。 
  
- **shallowReadonly**

  - 创建一个 proxy，使其自身的 property 为只读，但`不执行嵌套对象的深度只读转换`（深层还是可读、可写的）。

### **toRefs**

