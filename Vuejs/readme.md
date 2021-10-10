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

**v-on的使用：**

- 缩写：@
- 预期：Function | Inline Statement | Object
- 参数：event
- **修饰符**：
  - .stop - 调用event.stopPropagation（）
  - .prevent - 调用event.preventDefault（）
  - .capture - 添加事件侦听器时使用capture模式
  - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调
  - .{keyAlias} - 仅当事件是从特定键触发时才触发回调
  - .once - 只触发一次回调
  - .left - 只当点击鼠标左键时触发
  - .right - 只当点击鼠标右键时触发
  - .middle - 只当点击鼠标中键时触发
  - .passive - {passive: true}模式添加侦听器
- 用法：绑定事件监听

### v-on参数传递

- 当通过methods中定，义方法，以供@click调用时，需要**注意参数问题**：
- 情况一：如果该方法不需要额外参数，那么方法后的（）可以不添加。。
  - 但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去
- 情况二：如果需要同时传，入某个参数，同时需要event时，可以通过$event传入事件。

### 条件渲染

- 在某些情况下，我们需要根据当前的条件决定某些当元素或组件是否渲染，这时候我们就需要进行条件判断了。
- Vue提供了下面的指令来进行条件判断:
  - v-if
  - v-else
  - v-else-if
  - v-show

### v-if、v-else、v-else-if

- v-if、v-else、 v-else-if用于根据条件来渲染某一 块的内容：

  - 这些内容只有在条件为true时，才会被渲染出来；
  - 这三个指令与Java Script的条件语句if、 else、else if类似；

  ```vue
  <template id="mo">
        <input type="text" v-model="score" />
        <h2 v-if="score>90">优秀-{{score}}</h2>
        <h2 v-else-if="score>60">良好-{{score}}</h2>
        <h2 v-else>不及格-{{score}}</h2>
      </template>
  ```

- v-if的渲染原理：

  - v-if是惰性的；
  - 当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉；
  - 当条件为true时，才会真正渲染条件块中的内容；

### template元素

- 因为v-if是一个指令，所以必须将其添加到一个元素上：
  - 但是如果我们希望切换的是多个元素呢？
  - 此时我们`渲染div`，但是我们`并不希望div这种元素被渲染`
  - 这个时候，我们可以选择使用`template`

- template元素可以当做不可见的包裹元素，并且在v-if上使用，但是最终template不会被渲染出来：
  - 有点类似于小程序中的block

```vue
<template id="mo">
      <template v-if="ifShowHA">
        <h2>哈哈沫沫</h2>
        <h2>哈哈沫沫</h2>
        <h2>哈哈沫沫</h2>
      </template>

      <template v-else>
        <h2>呵呵沫沫</h2>
        <h2>呵呵沫沫</h2>
        <h2>呵呵沫沫</h2>
      </template>
    </template>
```



### v-show

- v-show和v-if的用法看起来是一致的，也是根据条件决定是否显示元素或者组件：



### v-show和v-if的区别

- 首先，在用法上的区别：
  - v-show是不支持template ;
  - v-show不可以和v-else一起使用；
- 其次，本质的区别：
  - v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行切换；
  - v-if当条件为false时，其对应的元素压根不会被渲染到DOM中；

- 开发中如何进行选择呢？
  - 如果我们的元素需要在显示和隐藏之间频繁的切换，那么使用v-show;,
  - 如果不会频繁的发生切换，那么使用v-if;



### 列表渲染

- 在真实开发中，我们往往会从服务器拿到一组数据，并且需要对其进行渲染。
  - 这个时候我们可以使用`v-for`来完成；
  - v-for类似于Java Script的for循环，可以用于遍历一组数据；

### v-for基本使用

- v-for的基本格式是`"item in 数组"`:
  - 数组通常是来自`data或者prop`，也可以是其他方式；，
  -  item是我们给每项元素起的一个`别名`，这个别名可以自定来定义；
- 我们知道，在遍历一个数组的时候会经常需要拿到`数组的索引`：
  - 如果我们需要索引，可以使用格式： "(item, index) in 数组";
  - 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的；

### v-for支持的类型

- v-for也支持遍历对象，并且支持有一 二三个参数：
  - 一个参数："value in object";
  - 二个参数："(value, key) in object";
  - 三个参数："(value, key, index) in object";
- v-for同时也支持数字的遍历：
  - 每一个item都是一个数字；



### template元素

- 类似于v-if,你可以使用template元素来循环渲染一 段包含多个元素的内容：
  - 我们使用template来对多个元素进行包裹，而不是使用div来完成；

### 数组更新检测

- Vue将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

	- push（）
	- pop（）
	- ishift（）
	- lunshift（）
	- splice（）
	- sort（）
	- reverse（）

- 替换数组的方法
  - 上面的方法会直接修改原来的数组，但是某些方法不会替换原来的数组，而是会生成新的数组，比如filter（）、concat（）和slice（）。

### v-for中的key是什么作用？

- 在使用v-for进行列表渲染时，我们通常会给元素或者组件绑定一个`key属性`。
- 这个key属性有什么作用呢？我们先来看一下`官方的解释`：
  - key属性主要用在Vue的`虚拟DOM算法`，在`新旧nodes`对比时辨识`VNodes`;,
  - 如果`不使用key`,Vue会使用一种最大限度减少动态元素并且尽可能的尝尝试就地`修改/复用相同类型元素`的算法；，
  - 而`使用key`时，它会基于key的变化`重新排列元素顺序`，并f且会`移除/销毁key`不存在的元素；，
- 官方的解释对于初学者来说并不好理解，比如下面的问题：
  - 什么是新旧nodes,什么是VNode?
  - 没有key的时候，如何尝试修改和复用的？
  - 有key的时候，如何基于key重新排列的？

### 认识VNode

- VNode的概念：
  - 因为目前我们还没有比较完整的学习组件的概念，所以目前我们先理解HTML元素创建出来的VNode ;
  - VNode的全称是Virtual Node，也就是虚拟节点；
  - 事实上，无论是组件还是元素，它们最终在Vue中表示出来的都是一 个个VNode;
  - VNode的本质是个Java Script的对象；

![image-20211009002456193](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009002456193.png)



### 虚拟DOM

- 如果我们不只是一个简单的div，而是有一大堆的元素，那么他们应该会形成一个VNode Tree：

![image-20211009002739563](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009002739563.png)

### [diff算法]()

#### 没有key的过程如下

- 我们会发现上面的diff算法效率并不高：
  - c和d来说它们事实。上并不需要有任何的改动；
  - 但是因为我们的c被f所使用了，所有后续所有的内容都要一次进行改动，并且最后进行新增；

![image-20211009010046365](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009010046365.png)

#### 有key的diff算法如下 一

- 第一步的操作是从头开始进行遍历、比较：
  - a和b是一致的会继续进行比较；
  -  c和f因为key不一致，所以就会break跳出循环；

![image-20211009011849837](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009011849837.png)

- 第二步的操作是从尾部开始进行遍历、比较：

![image-20211009011949673](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009011949673.png)

#### 有key的diff算法如下（二）

- 第三步是如果旧节点遍历完毕，但是依然有新的节点，那么就新增节点：

![image-20211009012316166](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009012316166.png)

- 第四步是如果新的节点遍历完毕，但是依然有旧的节点，那么就移除旧节点：

![image-20211009012400437](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009012400437.png)

#### 有key的diff算法如下（三）

- 第五步是最特色的情况，中间还有很多未知的或者乱序的节点：

![image-20211009012641073](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009012641073.png)

- 所以我们可以发现，Vue在进行diff算法的时候，会尽量利用我们的key来进行优化操作：
  - 在没有key的时候我们的效率是非常低效的；
  - 在进行插入或者重置顺序的时候，保持相同的key可以让diff算法更加的高效；



### 复杂data的处理方式

- 我们知道，在模板中可以直接通过**插值语法**显示一些**data中的数据**。
- 但是在某些情况，我们可能需要对**数据进行一些转化后**再显示，或者需要**将多个数据结合起来**进行显示；
  - 比如我们需要对`多个data数据进行运算、三元运算符来决定结果、数据进行某种转化`后显示；
  - 在模板中使用`表达式`，可以非常方便的实现，但是设计它们的初衷是用于`简单的运算`；
  - 在模板中放入太多的逻辑会让`模板过重和难以维护`；
  - 并且如果多个地方都使用到，那么会有大量重复的代码；
- 我们有没有什么方法可以将逻辑抽离出去呢？ .
  - 可以，其中一种方式就是将逻辑抽取到一一个`method`中，放到methods的options中；
  - 但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成了一个`方法的调用`；
  - 另外一种方式就是使用计算属性`computed `;



### 计算属性computed

- **什么是计算属性呢？**
  - 官方并没有给出直接的概念解释；
  - 而是说：对于任何包含响应式数据的复杂逻辑，你都应该使用`计算属性`；
  - `计算属性`将被混入到组件实例中。所有getter和setter的this. 上下文自动地绑定为组件实例；
- 计算属性的用法：
  - **选项**：computed
  - **类型**：{[key: string]: Function|{get: Function, set: Function}}



#### 实现思路一：模板语法

- 缺点一：模板中存在大量的复杂逻辑，不便于维护（模板中表达式的初衷是用于简单的计算）。
- 缺点二：当有多次一样的逻辑时，存在重复的代码；
- 缺点三：多次使用的时候，很多运算也需要多次执行，没有缓存；

#### 实现思路二：method实现

- 缺点一：我们事实上先显示的是一 个结果，但是都变成了一种方法的调用；
- 缺点二：多次使用方法的时候，没有缓存，也需要多次计算；

#### 思路三的实现：computed实现

- 注意：计算属性看起来像是一个函数，但是我们在使用的时候不需要加（），这个后面讲setter和getter时会讲到；
- 我们会发现无论是直观上，还是效果上计算属性都是更好的选择；
- 并且计算属性是有缓存的；

### 计算属性 vs methods

- 在上面的实现思路中，我们会发现计算属性和methods的实现看起来是差别！是不大的，而且我们多次提到计算属性`有缓存`的。
- 接下来我们来看一下同一一个计算多次使用，计算属性和methods的差异：

#### 计算属性的缓存

- 这是因为计算属性会基于它们的`依赖关系进行缓存`。
- 在`数据不发生变化`时，计算属性是`不需要重新计算`的；
- 但是如果`依赖的数据发生变化`,在使用时，计算属性依然`会重新进行计算`；

#### 计算属性的getter和setter方法

- 计算属性在大多数情况下，只需要个getter方法即可，所以我们会将计算属性直接写成一个函数。
- 但是，如果我们确实想设置计算属性的值呢？ 
  - 这个时候我们也可以给计算属性设置一个setter的方法；

```vue
computed: {
          //  FullName的getter和setter方法
          FullName: {
            get: function () {
              return `${this.firstName} ${this.lestName}`;
            },
            set: function (newValue) {
              console.log(newValue);
              const names = newValue.split(' ');
              this.firstName = names[0];
              this.lestName = names[1];
            },
          },
        },
```



### 认识侦听器watch

- **什么是侦听器呢？**
  - 开发中我们在data返回的对象中定义了数据，这个数据通过`插值语法等方式绑定到template`中；
  - 当数据变化时，template会自动进行更新来显示最新的数据；
  - 但是在某些情况下，我们希望在`代码逻辑`中监听某个数据的变化，这个时候就需要用`侦听器watch`来完成了；

- 侦听器的用法如下：
  - 选项：watch
  - 类型：{[key: string]: string | Function | Object | Array}

#### 侦听器watch的配置选项

- 我们先来看一个例子：
  - 当我们点击按钮的时候会修改`info.name`的值；
  - 这个时候我们使用`watch来侦听info，可以侦听到`吗？答案是`不可以`。
- 这是因为默认情况下，**watch只是在侦听info的引用变化**，对于**内部属性的变化是不会做出响应**的：
  - 这个时候我们可以使用一个`选项deep`进行更深层的侦听；
  - 注意前面我们说过watch里面侦听的属性对应的也可以是一个Object;
- 还有**另外一个属性**，是**希望一开始的就会立即执行一次**：
  - 这个时候我们使用`immediate选项`；
  - 这个时候无论后面数据是否有变化，侦听的函数都会有限执行一次；

#### 侦听器watch的其他方式（一）

![image-20211009195358971](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009195358971.png)

#### 侦听器watch的其他方式（二）

- 另外一个是Vue 3文档中没有提到的，但是Vue 2文档中有提到的是侦听对象的属性：

```vue
'info.name': function (newValue, oldValue) {
            console.log(newValue, oldValue);
          },
```

- **还有另外一种方式就是使用 $watch的API**:
  我们可以在created的生命周期（后续会讲到）中，使用this.$watchs来侦听；

  - 第一个参数是要侦听的源；
  - 第二个参数是侦听的回调函数callback;
  - 第三个参数是额外的其他选项，比如deep、immediate;

  ```vue
  this.$watch(expOrFn, callback, [options])
  
  created() {
            const unwatch = this.$watch(
              'info',
              (newValue, oldValue) => {
                console.log('$watch', newValue, oldValue);
              },
              { deep: true, immediate: true }
            );
  
            //取消侦听
            // unwatch();
          },
  ```

  

#### 综合案例

- 现在我们来做一个相对综合一 点的练习：书籍购物车

![image-20211009201221475](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009201221475.png)

- 案例说明：
  1. 在界面上以表格的形式，显示一些书籍的数据；
  2. 在底部显示书籍的总价格；
  3. 点击+或者-可以增加或减少书籍数量(如果为1，那么不能继续-) ;
  4. 点击移除按钮，可以将书籍移除（当所有的书籍移除完毕时，显示：购物车为空~) ;



### 浅拷贝

![image-20211009224926314](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009224926314.png)



### v-model的基本使用

- **表单提交**是开发中非常常见的功能，也是和用户交互的重要手段：
  - 比如用户在`登录`、`注册`时需要提交账号密码；
  - 比如用户在`检索`、`创建`、`更新`信息时，需要提交一些数据；
- 这些都要求我们可以在**代码逻辑中获取到用户提交的数据**，我们通常：会使用**v-model指令**来完成：
  - `v-model指令`可以在表单input、textarea以及select元素。上创建`双向数据绑定`；
  - 它会根据`控件类型`自动选取正确的方法来更新元素；
  - 尽管有些神奇，`但v-model本质上不过是语法糖`，它`负责监听用户的输入事件来更新数据`，并在某种极端场景下进行一些特殊处理；

#### v-model的原理

- 官方有说到，**v-model的原理**其实是背后有两个操作：
  - v-bind绑定value属性的值；
  - v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中；

```html
<input v-model="searchText" />
```

等价于

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```

#### 事实上v-model更加复杂

![image-20211009232134361](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211009232134361.png)



#### v-model绑定其他表单

- textarea

  ```vue
  <textarea
            name="intro"
            id="intro"
            cols="30"
            rows="10"
            v-model="intro"
          ></textarea>
  ```

  

- checkbox

  - 单个勾选框：
    - v-model即为布尔值。
    - 此时input的value并不影响v-model的值。
  - 多个复选框：
    - 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一 个数组。
    - 当选中某一 个时，就会将input的value添加到数组中。

- radio

  ```vue
  <label for="male">
          <input type="radio" id="male" v-model="gender" value="male" />男
        </label>
        <label for="female">
          <input type="radio" id="female" v-model="gender" value="female" />女
        </label>
  ```

  

- select

  - 和checkbox一样，select也分单选和多选两种情况。
  - 单选：只能选中一个值
    - v-model绑定的是一个值；
    - 当我们选中option中的一 个时，会将它对应的value赋值到fruit中；



### v-model的值绑定

- 目前我们在前面的案例中`大部分的值`都是`在template中固定好的`：
  - 比如gender的两个输入框值male、 female;
  - 比如hobbies的三个输入框值basketball、 football、tennis;
- 在真实开发中，我们的`数据可能是来自服务器`的，那么我们就可以先将值`请求下来`，`绑定到data返回的对象`中，再`通过v-bind来进行值`的绑定，这个过程就是`值绑定`。

#### v-model修饰符-Iazy

- **lazy修饰符是什么作用呢？**
  - 默认情况下，v-model在进行双向绑定时，绑定的是`input事件`，那么会在在每次内容输入后就将最新的值和绑定的属性进行同步；
  - 如果我们在v-model后跟。上lazy修饰符，那么会将绑定的事件切换为`change事件`，只有在提交时（比如回车）才会触发

#### v-model修饰符-number

- 我们先来看一下v-model绑定后的值是什么类型的：
  0 message总是`string类型`，即使在我们设置`type为number也是string类型`；

- 如果我们希望转换为`数字类型`，那么可以使用`.number修饰符`：

- 另外,在我们进行`逻辑判断`时，如果是一 个`string类型`，在可以转化的情况下`会进行隐式转换`的：

  - 下面的score在进行判断的过程中会进行隐式转化的；

  ```javascript
  const score = '10';
        if (score > 90) {
          console.log('优秀');
        }
        console.log(typeof score);
  ```

  

#### v-model修饰符-trim

如果要自动过滤用户输入的首尾空白字符，可以给v-model添加 `trim修饰符`：



#### v-mode组件上使用

V-model也可以使用在组件上



## 认识组件化开发

- 如果我们将`一个页面中所有的处理逻辑全部放在一起`，处理起来就会变得`非常复杂`，而且不利于`后续的管理以及扩展`；
- 但如果，我们讲`一个页面拆分成一个个小的功能块`，每个功能块完成属于`自己这部分独立的功能`，那么之后整个页面的`管理和维护`就变得非常容易了；
- 如果我们将一个个功能块拆分后，就可以像`搭建积木一下来搭建我们的项目`；

### 组件化开发

- **现在可以说整个的大前端开发都是组件化的天下**，无论从`三大框架（Vue, React、Angular),`还是跨平台方案的`Flutter`，甚至是`移动端`都在转向组件化开发，包括`小程序的开发`也是采用组件化开发的思想。。
- 所以，学习组件化最重要的是`它的思想`，每个框架或者平台可i能实现方法不同，但是思想都是一样的。
- 我们需要通过组件化的思想来思考整个应用程序：
  - 我们将一个`完整的页面`分成`很多个组件`；
  - `每个组件`都用于实现`页面的一个功能块`；
  - 而`每一个组件`又可以进行`细分`；
  - 而`组件本身`又可以在`多个地方进行复用`；

- **组件化是Vue、React、Angular的核心思想**

  - 前面我们的create App函数传入了一 个`对象App`，这个对象其实本质上就是`一个组件`，，也是我们应用程序的`根组件`；
  - 组件化提供了一种抽象，让我们可以开发出`一个个独立可复用的小组件`来构造我们的应用；
  - 任何的应用都会被抽象成一颗`组件树`；

  ![image-20211010003228497](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211010003228497.png)

### 注册组件的方式

- 如果我们现在有一部分**内容（模板、逻辑等）**，我们希望将这部分内容抽取到一个**独立的组件**中去维护，这个时候**如何注册一个组件**呢？
- 注册组件分成两种：
  - 全局组件：在任何其他的组件中都可以使用的组件；
  - 局部组件：只有在注册的组件中才能使用的组件；

#### 注册全局组件

- 全局组件需要使用我们全局创建的`app来注册组件`；
- 通过`component方法`传入`组件名称`、`组件对象`即即可注册一个全局组件了；
- 之后，我们可以在`App组件的ternplate中`直接`使用这个全局组件`：

#### 全局组件的逻辑

- **当然，我们组件本身也可以有自己的代码逻辑**：
  - 比如自己的data、computed、methods等等



#### 组件的名称

- 在通过app.component注册一个组件的时候，第一个参数是组件的名称，定义组件名的方式有两种：
- **方式一：使用ke bab-case（短横线分割符）**
  - 当使用kebab-case（短横线分隔命名）定义一个组件时，你也必须在引用这个自定义元素时使用kebab-case
  - 例如<my-component-name>;

- **方式二：使用PascalCase(驼峰标识符)**
  - 当使用PascalCase(首字母大写命名）定义-个组件时，你在引用这个自定义元素时两种命名法都可以使用。也
    就是说 <my-component-name> 和 <MyComponentName> 都是可接受的；

#### 注册局部组件

- 全局组件往往是在应用程序一开始就会`全局组件`完成，那么就意味着如果`某些组件我们并没有用到`，`也会一起被注册`：

  - 比如我们注册了`三个全局组件`：ComponentA、ComponentB、ComponentC;

  - 在开发中我们只使用了`ComponentA、Component B`，如果`ComponentC`没有用到但是我们依然在全局进行了注册，那么就意味着类似于`webpack这种打包工具在打包我们的项目`时，我们依然会`对其进行打包`；

  - 这样最终打包出的JavaScript包就会`有关于ComponentC的内容`，用户在下载对应的JavaS cript时也会`增加包的大小`；
- **所以在开发中我们通常使用组件的时候采用的都是局部注册**：
  - `局部注册`是在我们需要使用到的组件中，通过`components属性选项`来进行注册；
  - 比如之前的App组件中，我们有data、computed. methods等选项了，事实上还可以有一个`components选项`；
  - 该components选项对应的`是一个对象`，对象中的键值对是`组件的名称：组件对象；`

### Vue的开发模式

- 目前我们使用vue的过程都是**在html文件中**，通过`template编写自己的模板、脚本逻辑、样式`等。
- **但是随着项目越来越复杂，我们会采用组件化的方式来进行开发**：
  - 这就意味着每个组件都会有自己的`模板`、`脚本逻辑`、`样式`等；
  - 当然我们依然可以把它们`抽离到单独的js、css文件`中，但是`它们还是会分离开来`；
  - 也包括我们的script是在`一个全局的作用域下`，很容易出现`命名冲突的问题`；
  - 并且我们的代码为了适配一些浏览器，必须使用`ES5的语法`；
  - 在我们编写代码完成之后，依然需要`通过工具对代码进行构建、代码`；
- 所以在真实开发中，我们可以通过一个`后缀名为.vue`的**`single-file components （单文件组件）`**来解决，并且可以使用webpack或者vite或者rollup等构建工具来对其进行处理。。

#### 单文件的特点

- **在这个组件中我们可以获得非常多的特性**：
  - 代码的高亮；
  - ES6、CommonJS的模块化能力；
  - 组件作用域的CSS;
  - 可以使用预处理器来构建]更加丰富的组件，比如TypeScript、Babel、Less、Sass等；

#### 如何支持SFC

- 如果我们想要使用这一的SFC的.vue文件，比较**常见的是两种方式**：
  - 方式一：`使用Vue CLI来创建项目`，项目会默认帮助我们配置好所有的配置选项，可以在其中直接使用。vue文件
  - 口方式二：自己`使用webpack或rollup!或vite这类打包工具`，对其进行打包处理，
- 但是最终，无论是后期`我们做项目`，还是在`公司进行开发`，通常都会`采用Vue CLI的方式`来完成。

### Webpack的使用前提

- webpack的官方文档是https://webpack.js.org/
  - webpack的中文官方文档是https://webpack.docschina.org/
  - DOCUMENTATION:文档详情，也是我们最关注的

- Webpack的运行是依赖于`Node环境`的，所以我们电脑，上必须有Node环境
  - 所以我们需要先安装Nodejs，并且同时会安装npm;
  - Node官方网站：https://nodejs.org/

## Webpack基础打包

- **事实上随着前端的快速发展，目前前端的开发已经变的越来越复杂了：**
  - 比如开发过程中我们需要通过`模块化的方式`来开发；
  - 比如也会使用一 些`高级的特性来加快我们的开发效率或者安全性`，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码；
  - 比如开发过程中，我们还希望`实时的监听文件的变化`来并且`反映到浏览器上`，提高开发的效率；
  - 比如开发完成后我们还需要`将代码进行压缩`、`合并以及其他相关的优化`；
  - 等等。。..

- 但是对于很多的**前端开发者**来说，并不需要思考这些问题，日常的开发中根本就没有面临这些问题：
  - 这是因为目前前端开发我们通常都会直接使用三大框架来开发：`Vue、React、Angular;`
  - 但是事实上，这三大框架的创建过程我们都是`借助于脚手架(CLI)`的；
  - 事实上Vue-CLI、create-react-app、Angular-CLI都是`基于webpack`来帮助我们支持模块化、less、TypeScript、打包优化等的；

### Webpack到底是什么呢？

- 我们先来看一下官方的解释：
  **webpack** is a` static module bundler `for` modern ` JavaScript applications.
- **webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序**；
- 我们来对上面的解释进行拆解：
  - `打包bundler` : webpack可以将帮助我们进行打包，所以它是一 个打包工具
  - `静态的static`:这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
  - `模块化module` : webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等；
  - `现代的modern`: 我们前端说过，正是因为：现代前端开发面临各种各样的问题，才催生webpack的出现和发展；

### Vue项目加载的文件有哪些呢？

- **JavaScript的打包：**
  - 将ES6转换成ES5的语法；
  -  TypeS cript的处理，将其转换成Java Script;
- **Css的处理：**
  - CSS文件模块的加载、提取；
  -  Less、Sass等预处理器的处理；
- **资源文件img、font:**
  - 图片img文件的加载；
  - 字体font文件的加载；
- **HTML资源的处理：**
  - 打包HTML资源文件；

### Webpack的安装

- webpack的安装目前分为两个：`webpack、 webpack-cli`

- **那么它们是什么关系呢？**

  - 执行we bpack命令，会执行node_modules下的。bin目录下的webpack;
  - webpack在执行时是依赖webpack-cli的，如果没有安装就会报错；
  - 而we bpack- cli中代码执行时，才是真正利用vvebpack进行编译和打包的过程；
  - 所以在安装webpack时，我们需要同时安装webpack-cli(第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）

  ![image-20211010122050593](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211010122050593.png)
  
  ```shell
  npm install webpack webpack-cli -g #全局安装
  npm install webpack webpack-cli -D #局部安装
  ```
  
  

#### 创建局部的webpack

- 前面我们直接执行webpack命令使用的是全局弱的webpack,如果希望使用局部的可以按照下面的步骤来操作。

- 第一步：创建package.json文件，用于管理项目的信息、库依赖等

  ```shell
  npm init  //  npm init -y
  ```

  

- 第二步：安装局部的webpack

  ```shell
  npm install webpack webpack-cli -D #局部安装
  ```

  

- 第三步：使用局部的webpack

  ```shell
  npx webpack
  ```

  

- 第四步：在package.json中创建scripts脚本，执行脚本打包即可

  ```shell
  "scripts": {
      "build": "webpack"
    },
    npm run build
  ```



#### 指定配置文件

- 但是如果我们的配置文件并不是webpack.config.js的名字，而是其他的名字呢？

  - 比如我们将webpack.config.js修改成了Custom.cconfig.js ;

  - 这个时候我们可以通过--config来指定对应的配置文件；

    ```shell
    webpack  --config Custom.config.js
    ```

    

- 但是每次这样执行命令来对源码进行编译，会非常繁琐，所以我们可以在package.json中增加一 个新的脚本：

  ```shell
  {
  	"scripts": {
  		"build": "webpack --config Custom.config.js"
  	}
  }
  ```

  

  #### Webpack的依赖图

- webpack到底是如何对我们的项目进行打包的呢？
  - 事实。上webpack在处理应用程序时，它会根！据命令或者配置文件找到入口文件；
  
  - 从入口开始，会生成一个`依赖关系图`，这个`依赖关系图`会包含应用程序中所需的所有模块(比如：js文件、css文件、图片、字体等）；
  
  - 然后遍历图结构，打包一个个模块(根据文件的不同使用不同的loader来解析)
  
      ![image-20211010135924111](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211010135924111.png)





#### css-loader的使用

![image-20211010141019409](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211010141019409.png)

- 上面的错误信息告诉我们需要一个loader来加载这个css文件，但是`loader`是什么呢？
  - loader可以用于对`模块的源代码`进行转换；
  - 我们可以`将css文件也看成是一 个模块`，我们是`通过import来加载这个模块`的；
  - 在加载这个模块时，`webpack其实并不知道如何对其进行加载`，我们必须制定
    定对应的loader来完成这个功能；

#### css-loader的使用方案

- 如何使用这个loader来加载css文件呢？有三种方式：
  - 内联方式；
  - CLI方式(webpack5中不再使用)；
  - 配置方式；

- **内联方式**：内联方式使用较少，因为不方便管理

  - 在引入的样式前加上使用的loader，并且使用 ! 分割；

    ```css
    import 'css-loader!../css/style.css';
    ```

    

- **CLI方式**

  - 在webpack5的文档中已经没有了`--module-bind`;
  - 实际应用中也比较少使用，因为不方便管理；，

#### loader配置方式

- 配置方式表示的意思是在我们的web pack.config.js文件中写明配置信息：
  o module.rules中允许我们配置多个loader(因为我们也会继续使用其f怕的loader,来完成其他文件的加载)；
  0这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览；
- **module.rules的配置如下：**
- rules属性对应的值是一个数组：**[Rule]**
- 数组中存放的是一个个的Rule,Rule是一 个对象，对象中可以设置多个属性：
  - `test属性`：用于对resource（资源）进行匹配的，通常会设置成正则表达式；
  - `use属性`：对应的值时一 个数组：**[UseEntry]**
    - UseEntry是一个对象，可以通过对象的属性来设置一 -些其他属性
    - loader:必须有一个loader属性，对应的值是一个字符串；
    - options:可选的属性，值是一 个字符串或者对象，值会被传入到loader中；query:目前已经使用options来替代；
    - **传递字符串(如：use:['style-loader'])是loader属性的简写方式(如：use:[{loader: 'style-loader'}]);**
  - `loader属性`：Rule.use:[{ loader}]的简写。

#### 认识style-loader

- 我们已经可以通过css-loader来加载css文件了

  - 但是你会发现这个css在我们的代码中`并没有生效（页面没有效果）`。

- 这是为什么呢？

  - 因为css-loader只是`负责将 .css文件进行解析`，并不会将解析之后的`css插入到页面`中
  - 如果我们希望再完`成插入style的操作`，那么我们还需要另外一个loader，就`是style-loader;`

- 安装style-loader :

  ```shell
  npm install Style-loader -D
  ```

  

#### 配置style-loader

- 那么我们应该如何使用style-loader:

  - 在配置文件中，添加style-loader ;
  - 注意：因为loader的执行顺序是从右向左（或者i说从下到上，或者说从后到前的），所以我们需要将style-loader写到css-loader的前面；

  ```js
  use: [
            // { loader: 'css-loader' },
            // 注意 style-loader 需要在 css-loader 的前面
            'style-loader',
            'css-loader',
          ],
  ```

  

- 重新执行编译npm run build,可以发现打包后的css已经生效了：
  - 当前目前我们的css是通过页内样式的方式添加进来的；
  - 后续我们也会讲如何将css抽取到单独独的文件中，并且进行压缩等操作；

### 如何处理less文件？

- 在我们开发中，我们可能会使用`less、sass、stylus的预处理器`来编写css样式,效率会更高。

- 那么，如何可以让我们的`环境支持这些预处理器`呢？ 

  - 首先我们需要确定，less、sass等编写的css需要通过工具转换成普通的css ;

- 比如我们编写如下的less样式：

  ```less
  @bgColor: blue;
  @textDecoration: underline;
  
  .title {
    background-color: @bgColor;
    text-decoration: @textDecoration;
  }
  ```

  

#### Less工具处理

- 可以使用less工具来完成它的编译转换

  ```shell
  npm install less -D
  ```

- 执行命令如下：

  ```shell
  npx lessc ./src/css/title.less title.css
  ```

  

#### less-loader处理

- 但是在项目中我们会编写大量的css,它们如何可以自动转换呢？

  - 这个时候我们就可以使用less-loader，来自动使用less工具转换less到css;

    ```shell
    npm install less-loader -D
    ```

- 配置webpack.config.js

  ```js
  {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
  ```

- 执行npm run build
  - less就可以自动转换成css, 并且页面也会生效了

### 认识PostCSS工具

- 什么是PostCSS呢
  - D Post CSS是一 个通过JavaScript来转换样式的工具；
  - 这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置；
  - 但是实现这些功能，我们需要借助于Post CSS对应的插件；
- 如何使用PostCSS呢？主要就是两个步骤：
  - 第一步：查找Post CSS在构建工具中的扩展，比如webpack中的postcss-loader;
  - 第二步：选择可以添加你需要的PostCSS相关的插件；

#### 命令行使用postcss

- 当然，我们能不能也直接在终端使用PostCSS呢？ .

  - 也是可以的，但是我们需要单独安装一 个工具postcss-cli ;

- 我们可以安装一下它们：postcss、 postcss-cli

  ```shell
  npm install postcss postcss-cli -D
  ```

  

- 我们编写一个需要添加前缀的css:

  - https://autoprefixer.github.io/
  - 我们可以在上面的网站中查询-些添加css属性的样式；

#### 插件autoprefixer

- 因为我们需要添加前缀，所以要安装autoprefixer :

  ```shell
  npm install autoprefixer -D
  ```

  

- 直接使用使用postcss工具，并且制定使用autoprefixer

  ```shell
  npx postcss --use autoprefixer -o end.css ./src/css/style.css
  ```

  

#### postcss-loader

- 真实开发中我们必然不会直接使用命令行工具来对css进行处理，而是可以借助于构建工具：

  - 在webpack中使用postcss就是使用postcss-loader来处理的；

- 我们来安装postcss-loader:

  ```shell
  npm install postcss-loader -D
  ```

  

- 我们修改加载css的loader:(配置文件已经过多，给出一部分了）

  - 注意：因为postcss需要有对应的插件才会起效果，所以我们需要配置它的plugin;

    ```js
    {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [require('autoprefixer')],
                  },
                },
              },
    ```

    

#### 单独的postcss配置文件

- 当然，我们也可以将这些配置信息放到一个单独的文件中进行管理：

  - 在根目录下创建postcss.config.js

    ```js
    module.exports = {
      plugins: [require('autoprefixer')],
    };
    ```

    

#### postcss-preset-env

- 事实上，在配置postcss-loader时，我们配置插件并不需要使用autoprefixer
- 我们可以使用另外一个插件：postcss-preset-env
  - postcss-preset-env 也是一一个postcss的插件；
  - 它可以帮助我们将一 些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏器或者运行时环境添加所需的polyfill;
  - 也包括会自动帮助我们添加autoprefixer (所以相当于已经内置了autoprefixer) ;

- 首先，我们需要安装postcss-preset-env

  ```shell
  npm install postcss-preset-env -D
  ```

- 之后，我们直接修改掉之前的autoprefixer即可：

  ```js
  plugins: [
      require('postcss-preset-env'),
    ],
  ```

  - 注意：我们在使用某些postcss插件时， 也可以直接传入字符串

    ```js
    plugins: [
        "postcss-preset-env"
      ],
    ```



### 加载图片案例

- 为了演示项目中可以加载图片，我们需要在项目中使用图片，比较常见的使用图片的方式是两种：
  - img元素，设置src属性；
  - 其他元素(比如div),设置background-image的css属性



### file-loader

- 要处理jpg、png等格式的图片，我们也需要有对应的loader : file-loader
  - file-loader的作用就是帮助我们处理`import/require()方式`引入的一 个文件资源，并且会将它放到我们`输出的的文件夹`中； 

- 安装 file-loader

  ```shell
  npm install file-loader -D
  ```

- 配置处理图片的 Rule

  ```js
  {
          // test: /\.(jpg|jpeg|png|gif|svg)$/,
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
  ```

  

#### 解决 Automatic publicPath is not supported in this browser 错误

问题描述：webpack 打包出现 
Error: Automatic publicPath is not supported in this browser

解决方法：
在webpack.config.js文件中添加

```js
module.exports = 
{
    output: {
        publicPath: './'
    }
}
```

publicPath 属性，指的是打包后公共资源的一个路径，默认路径不是./，所以打包的时候会出现找不到路径的问题，具体属性的意义，可以查询webpack配置文件官方文档。



#### 文件的命名规则

- 有时候我们处理后的`文件名称`按照一一定的规则进行显示：

  - 比如保留原来的`文件名、扩展名`，同时为了防止重复，包含一一个`hash值`等；

- 这个时候我们可以使用`PlaceHolders`来完成，webpack给我们提供1了大量的PlaceHolders来显示不同的内容：

  - https://webpack.js.org/loaders/file-loader/#placeholders
  - 我们可以在文档中查阅自己需要的placeholder;

- 我们这里介绍几个最常用的placeholder :

  - [ext]:处理文件的扩展名；

  - [name]:处理文件的名称；

  - [hash]:文件的内容，使用MD4的散列函数处理，生成的一一个128位的hash值(32个十六进制)；

  - [contentHash]:在file-loader中和[hash]结果是一 致的(在webpack的一些其他地方不一样，后面会讲到)；

  - [hash:<ength>]:截图has h的长度，默认32个字符太长了；

  - [path]：文件件相对于webpack配置文件的路径；

#### 设置文件的存放路径

- 当然，我们刚才通过img/已经设置了文件夹，这个也是vue、react脚手架中常见的设置方式：

  - 其实按照这种设置方式就可以了；

  - 当然我们也可以通过`output Path`来设置输出的文件夹；

    ```js
    {
            // test: /\.(jpg|jpeg|png|gif|svg)$/,
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'img/[name]_[hash:6].[ext]',
                  // outputPath: 'img',
                  publicPath: './build',
                },
              },
            ],
          },
    ```

#### css url方式引入图片 加载失败解决办法

https://blog.csdn.net/w184167377/article/details/118930758



#### url-loader

- url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成`base64的URI`.

- 安装url-loader :

  ```shell
  npm install url-loader -D
  ```

  ```js
  {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'img/[name]_[hash:6].[ext]',
                publicPath: './build',
                limit: 700 * 1024, //小于700kb的图片 生成base64
                esModule: false,
              },
            },
          ],
          type: 'javascript/auto',
        },
  ```

  

### 认识asset moduletype

- https://webpack.docschina.org/guides/asset-modules/

- 我们当前使用的webpack版本是webpack5:
  - 在webpack5之前，加载这些资源我们需要`使用一些loader`,`比如raw--loader、url-loader, file-loader;`
  - 在webpack5开始，我们可以直接使用`资源模块类型(asset module type)`，来替代上面的这些loader;

- **资源模块类型(asset module type)**，通过添加4种新的模块类型，来替换所有这些loader:
  - **asset/resource** 发送一 个单独的文件并导出URL。之前通过使用file-loader实现；
  - **asset/inline** 导出一个资源的data URI。之前通过使用url-loader实现；
  - **asset/source** 导出资源的源代码。 之前通过使用raw-loader实现；
  - **asset ** 在导出一个data URI和发送一 个单独的文件之间自动选择。之前通过使用url-loader,并且配置资源体
    积限制实现；

#### asset module type的使用

- 比如加载图片，我们可以使用下面的方式：

  ```js
  {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
  }
  ```

  

- 但是，如何可以自定，义文件的输出路径和文件名呢？

  - 方式一：修改output，添加asset Module Filename属性；

  - 方式二：在Rule中，添加一一个generator属性，并且设置filename;

    ```js
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        assetModuleFilename: 'img/[name]_[hash:6].[ext]',
      },
    ```

    ```js
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'img/[name]_[hash:6].[ext]',
            },
    }
    ```

    

#### url-loader的limit效果

- 步骤一：将type修改为asset;

- 步骤二：添加一个parser属性，并且制定dataUrl的条件，添加maxSize属性；

  ```js
  {
          test: /\.(jpe?g|png|gif|svg)$/,
          type: 'asset',
          generator: {
            filename: 'img/[name]_[hash:6].[ext]',
            publicPath: './build/',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 700 * 1024,
            },
          },
        },
  ```

  

### 加载字体文件

- 如果我们需要使用身其些`特殊的字体或者字体图标`，那么我们会引入很多`字体相关的文件`，这些文件的处理也是一样的。

- 在component中引入，并且添加一个i元素用于显示字体图标：

  ```js
  import '../font/iconfont.css';
  
  //i元素
  const iEl = document.createElement('i');
  iEl.className = 'iconfont icon-dingyuezhe';
  
  document.body.appendChild(iEl);
  ```
  
- 这个时候打包会报错，因为无法正确的处理`eot、ttf、woff等`文件
  
  - 我们可以选择使用file-loader来处理，也可以选择直接使用welbpack5的资源模块-类型来处理；
  
  ```js
  {
          test: /\.(eot|ttf|woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'font/[name]_[hash:6].[ext]',
                publicPath: './build',
                esModule: false,
              },
            },
          ],
          type: 'javascript/auto',
        },
            
            //webpack5
            {
          test: /\.(eot|ttf|woff2?)$/,
          type: 'asset/resource',
          generator: {
            filename: 'font/[name]_[hash:6].[ext]',
            publicPath: './build/',
          },
        },
  ```
  
  

## 认识Plugin

- **Webpack的另一个核心是Plugin，官方有这样- -段对Plugin的描述**：

  - While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

- 上面表达的含义翻译过来就是：

  - Loader是用于`特定的模块类型`进行转换；

  - Plugin可以用于`执行更加广泛的任务`，比如打包优化、资源管理、环境变量注入等；

    ![image-20211010192446011](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20211010192446011.png)

#### CleanWebpack Plugin

- 前面我们演示的过程中，每次修改了一些当配置，重新打包时，都需要`手动删除dist文件夹`：
  - 我们可以借助于一个插件来帮助我们完成，这个插件就是`CleanWebpackPlugin`

npm install clean-webpack-plugin -D
