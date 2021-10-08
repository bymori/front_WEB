# vue3

## 如何使用VUE

- 方式一：在页面中通过CDN的方式来引入；

```vue
# Vue的CDN引入
<script src="https://unpkg.com/vue@next"></script>

<div id="app"></div>

<script src="https://unpkg.com/vue@next"></script>
<script>
    //vue相关的代码
  const mo = {
    template: `<h2>Hello World</h2>`,
  };
  const app = Vue.createApp(mo);
    //将app挂载到id为app的div上
  app.mount('#app');
</script>
```



- 方式二：下载Vue的Java Script文件，并且自己手动引入；

```vue
# 通过script标签引入本地vuejs文件
<script src="../js/vue.js"></script>

<div id="app"></div>
    
    <script src="../js/vue.js"></script>
    <script>
      Vue.createApp({
        template: `<h2>Hello World!!!</h2>`,
      }).mount('#app');
    </script>
```



- 方式三：通过npm包管理工具安装使用它(webpack再讲) ;
- 方式四：直接通过Vue CLI创建项目，并且使用它；



## 声明式和命令式

- 原生开发和Vue开发的模式和特点，我们会发现是完全不同的，这里其实涉及到**两种不同的编程范式**：
  - `命令式编程`和`声明式编程`；
  - 口命令式编程关注的是 "`how to do`”，声明式编程关注的是 "`what to do`”，由`框架（机器）完成“how” `的过程；
- 在原生的实现过程中，我们是如何操作的呢？
  - 我们每完成一个操作，都需要通过`JavaScript编写一 条代码`，来`给浏览器一个指令`；
  - 这样的编写代码的过程，我们称之为`命令式编程`；
  - 在早期的原生JavaScript和jQuery开发的过程中，我们都是通过这种命令式的方式在编写代码的；
- 在Vue的实现过程中，我们是如何操作的呢？
  - 我们会在createA pp传入的对象中声明需要的内容，模板template、 数据data、方法methods ;
  - 这样的编写代码的过程，我们称之为是`声明式编程`；
  - 目前Vue、React、 Angular的编程模式，我们称之：为声明式编程；



## MVVM模型

- MVC和MVVM都是一种软件的体系结构

  - MVC是Model-View-Controller的简称，是在前期被使用非常框架的架构模式，比如iOS、前端

  - MVVM是Model-View-ViewModel的简称，是目前非常流行的架构模式；

- 通常情况下，我们也经常称Vue是一 一个MVVM的框架。

  - Vue官方其实有说明，Vue虽然并没有；完全遵守MVVM的模型，但是整个设计是受到它的启发的。

![image-20211008142709271](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211008142709271.png)

## template属性

- 方式一：使用script标签

```vue
<script type="x-template" id="mo">
  <div>
      <h2>{{counter}}</h2>
      <button @click='increment'>+1</button>
      <button @click='decrement'>-1</button>
  </div>
</script>

<script>
Vue.createApp({
	template: `#mo`,
})
</script>
```



- 方式二：使用template

```vue
<template id="mo">
      <div>
        <h2>{{counter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
      </div>
    </template>
```



- 这个时候，在createA pp的对象中，我们需要传入的template以 # 开头：
  - 如果字符串是以#开始，那么它将被用作 querySelector ,并且使用匹配元素的innerHTML作为模板字符串；



## data属性

- data属性是传入一个函数，并且该函数需要返回一一个对象：

  - 在Vue2.x的时候，也可以传入一个对象（虽然官方推荐是一个函数）
  - 在Vue3.x的时候，比如传入一个函数，否则就会直接在浏览器中报错

- data中返回的对象会被`Vue的响应式系统劫持`，之后对该`对象的修改或者访问`都会在劫持中被处理：
  - 所以我们在template中通过{{counter}}访问counter,可以从对象中获取到数据；
  - 所以我们修改counter的值时，template中的{{counter}}也会发生改变；



## methods属性

- **methods属性**是一个对象，通常我们会在这个对象中定义很多的方法：
  - 这些方法可以被绑定到template模板中；
  - 在该方法中，我们可以使用this关键字来F直接访问到data中返回的对象的属性；
- 问题，官方文档有这么一段描述：
  - 问题一：为什么不能使用箭头函数（官方文档有给出解释）？
  - 问题二：不使用箭头函数的的情况下，this到底指向的是什么？ （可以作为一道面试题）

> 注意，**不应该使用箭头函数来定义method函数**(例如plus: （）= this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以`this`将不会按照期望指向组件实例，`this.a`将是`undefined`。

## 其他属性

- 例如 props 、computed、watch、emits、setup等
- 生命周期函数等等



## vue3源码

- 第一步：在GitHub上搜索vue-next，下载源代码；
  - 这里推荐通过git clone的方式下载

- 第二步：安装Vue源码项目相关的依赖；

  - 执行yarn install

- 第三步：对项目执行打包操作

  - 执行yarn dev（执行前修改脚本）

  ```json
  "scripts": {
      "dev": "node scripts/dev.js --sourcemap",
  }
  ```

- 第四步：通过packages/vue/dist/vue.global.js调试代码



## Vue基础-模板语法

### methods方法绑定this

- 我们在methods中要使用data返回对象中的数据：
  - 那么这个`this是必须有值`的，并且应该可以`通过this获取到data返回对象中的数据`
- **那么我们这个this能不能是`window`呢？**
  - `不可以是window`,因为window中我们无法获取到data返回对象中的数据；
  - 但是如果我们使用`箭头函数`，那么这`个this就会是window`了；
- **为什么是window呢？**
  - 这里涉及到箭头函数使用`this的查找规则`，它会在自己的`上层作用域中来查找this`;
  - 最终刚好找到的是script作用于中的this，所以就是window;
- this到底是如何查找和绑定的呢？
  - https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA
  - https://mp.weixin.qq.com/s/vMSkb5OYvJOzfgTI2V5oyg

## vscode代码片段

### Snippet generator

代码片段很好用，可是生成它们却很麻烦，这个网站可以根据代码一键生成。支持 `VSCode`，`Sublime Text`，`Atom`。

https://snippet-generator.app/



## 模板语法

- React的开发模式：
  - React使用的jsx，所以对应的代码都是`编写的类似于js的-种语法`；
  - 之后通过Babel将jsx编译成React.create Element函数调用；
- Vue也支持jsx的开发模式（后续有时间也会讲到） :
  - 但是大多数情况下，使用`基于HTML的模板语法`；
  - 在模板中，允许开发者以声明式的方式将`DOM`和`底层组件实例的数据`绑定在一起；
  - 在底层的实现中，Vue将模板编译成虚拟DCIM渲染函数，这个我会在后续给大家讲到；

### Mustache双大括号语法

- 如果我们希望把数据显示到模板(template)中，使用最多的语法是"Mustache”语法（双大括号）的文本插值。
  - 并且我们前端提到过，`data返回的对象`是有添加到`Vue的响应式系统`中；
  - 当`data中的数据发生改变`时，`对应的内容也会发生更新`。
  - 当然，Mustache中不仅仅可以是data中的属性，也可以是一 个`JavaScript的表达式`。

```vue
 <template id="mo">
      <div>
        <!-- 1.Mustache基本使用 -->
        <h2>{{message}}</h2>

        <!-- 2.{{}} 里面写表达式 -->
        <h2>{{counter * 10}}</h2>
        <h2>{{message.split(" ").reverse().join(" ")}}</h2>

        <!-- 3.调用函数 -->
        <!-- 可以使用计算属性 computed -->
        <h2>{{getReverseMessage()}}</h2>

        <!-- 4.三元运算符 -->
        <h2>{{ isShow ? '沫沫' : '' }}</h2>
        <button @click="toggle">切换</button>

        <!-- 错误语法 -->
        <!-- var name='momo' 不能使用赋值语句-->
        <!-- <h2>{{var name='momo'}}</h2> -->
        <!-- <h2>{{ if(isShow){return '沫沫'} }}</h2> -->
      </div>
    </template>

<script>
      const App = {
        template: `#mo`,
        data() {
          return {
            message: 'hello World',
            counter: 100,
            isShow: true,
          };
        },
        methods: {
          getReverseMessage() {
            return this.message.split(' ').reverse().join(' ');
          },
          toggle() {
            this.isShow = !this.isShow;
          },
        },
      };
      Vue.createApp(App).mount('#app');
    </script>
```

### 基本指令



### v-once

- v-once用于指定元素或者组件只渲染一次：

  - 当数据发生变化时，`元素或者组件以及其所有的子元素`将视为`静态内容`并且跳过；

  - 该指令可以用于`性能优化`；

    ```vue
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    ```

    

- 如果是子节点，也是只会渲染一次：

  ```vue
  <div v-once>
    <h2>{{counter}}</h2>
    <h2>{{message}}</h2>
    <button @click="increment">+1</button>
  </div>
  ```

  

### v-text

用于更新元素的textCountent

```vue
<h2 v-text="message"></h2>
        <!-- 等价于 -->
        <h2>{{message}}</h2>
```

### v-html

- 默认情况下，如果我们展示的内容本身是html的，那么vue并不会对其进行特殊的解析。

  - 如果我们希望这个内容被Vue可以解析出来，那么可以使用v-html来展示；

    ```vue
    <div>
            <h2>{{message}}</h2>
            <h2 v-html='message'></h2>
          </div>
    
    data() {
              return {
                message: '<span style="color:red;background:blue;">沫沫</span>',
              };
            },
    ```

    

### v-pre

- v-pre用于跳过元素和它的子元素的编译过程，显示原始的Mustache标签：

  - 跳过不需要编译的节点，加快编译的速度；

    ```vue
    <template id="mo">
          <div>
            <h2>{{message}}</h2>
            <h2 v-pre>{{message}}</h2>
          </div>
        </template>
    ```

    

### v-cloak

当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码。

这样直至div内变量编译完毕后才会显示。

```vue
<style>
      [v-cloak] {
        display: none;
      }
    </style>

<template id="mo">
      <div>
        <h2>{{message}}</h2>
        <h2 v-cloak>{{message}}</h2>
      </div>
    </template>
```



### v-bind的属性绑定

- 前端讲的一 系列指令，主要是将值插入到`模板内容`中。
- 但是，除了内容需要动态来决定外，**某些`属性`我们也希望动态来绑定**。
  - 比如动态绑定a元素的href属性；
  - 比如动态绑定img元素的src属性；
- 绑定属性我们使用v-bind :
  - 缩写：：
  - 预期：any(with argument)|Object (without argument)
  - 参数：attrOrProp (optional)
  - 修饰符：
    		v.camel- 将kebab-case attribute名转换为camelC ase.
  - 用法：动态地绑定一个或多个attribute，或一个组件prop到表达式。



### 绑定class

- 对象语法：我们可以传给：class(v-bind:class的简写)一个对象，以动态地切换class。
- 数组语法：我们可以把一个数组传给：class，以应用一一个class列表；

### 绑定style

- 我们可以利用`v-bind:style`来绑定一 些`CSS内联样式`
  - 这次因为某些样式我们需要根据`数据`动态来决定；
  - 比如某段文字的`颜色`，`大小`等等；
- CSS property名可以用`驼峰式(camelCase)`或`短横线分隔(kebab-case，记得用引号括起来)`来命名；
  Case)
- 绑定class有两种方式：
  - 对象语法：
  - 数组语法：

### 动态绑定属性

- 在某些情况下，我们`属性的名称`可能也不是固定的：，
  - 前端我们无论绑定src、href、class. style，属性名称都是固定的；
  - 如果`属性名称不是固定`的，我们可以使用`:[属性名]='值'`的格式来定义；
  - 这种绑定的方式，我们称之为`动态绑定属性`

### 绑定一个对象

- 如果我们希望将一 个对象的所有属性，绑定到元素。上的所有属性，应该怎么做呢？
  - 非常简单，我们可以直接使用v-bind绑定一个对象；
  - info对象会被拆解成div的各个属性





### v-on绑定事件

- 前面我们绑定了元素的`内容和属性`，在前端开发中另外一一个非常重要的特性就是`交互`。
- **在前端开发中，我们需要经常和用户进行各种各样的交互：**
  - 这个时候，我们就必须监听用户发生的事件，比如`点击、拖拽、键盘事件`等等
  - 在Vue中如何监听事件呢？使用`v-on指令`。

### v-on的用法

