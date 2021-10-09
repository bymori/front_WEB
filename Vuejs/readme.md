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

  

