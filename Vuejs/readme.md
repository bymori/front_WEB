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



