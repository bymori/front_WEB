<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 14:27:16
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 16:51:00
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainState } from '../store';

const mainStore=useMainState()

console.log(mainStore.count);

// 这样是有问题的, 因为这样拿到的数据不是响应式的, 是一次性的 结构会造成响应式的丢失
// Pinia 其实就是把 state 数据都做了 reactive 处理了
// const {count,foo} =mainStore

// 解决方法
// 把解构出来的数据做了 ref 响应式代理
// https://pinia.vuejs.org/api/modules/pinia.html#storetorefs
const {count,foo} =storeToRefs(mainStore)

const handleChangeState = () => {
  // 方式一: 最简单的方式就是这样
  // mainStore.count++

  // 方式二: 如果要修改多个数据, 建议使用 $patch 批量更新
  // mainStore.$patch({
  //   count:mainStore.count + 1,
  //   foo:'hello',
  //   arr:[...mainStore.arr,4]
  // })

  // 方式三: 更好的批量更新的方式 $patch 传入一个函数, 
  // mainStore.$patch(state=>{
  //   state.count++
  //   state.foo='hello'
  //   state.arr.push(4)
  // })

  // 方式四: 逻辑比较多的时候可以封装到 actions 中做处理
  mainStore.changeState(10)
}
</script>

<template>
<h2>mainStore: </h2>
<p id="a">{{mainStore.count}}</p>
<p id="b">{{mainStore.count}}</p>
<p>{{mainStore.count}}</p>
<p>{{mainStore.foo}}</p>
<p>{{mainStore.arr}}</p>
<p>{{mainStore.count10}}</p>
<p>{{mainStore.count10}}</p>
<p>{{mainStore.count10}}</p>


<hr>
<h2>直接解构 mainStore #一次性数据</h2>
<p>使用 Pinia 的 storeToRefs 就可以得到响应式的数据</p>
<p>{{count}}</p>
<p>{{foo}}</p>

<hr>
<button @click="handleChangeState">修改数据</button>
</template>

<style >
  #a{
    /* Chrome谷歌浏览器下不支持css字体小于12px的解决办法 */
    color: red;
    font-size : 12px;
    -webkit-transform : scale(.1,.1) ;
  }
  #b{
    color: aqua;
    font-size : 12px;
  }
</style>
