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

    
