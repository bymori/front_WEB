<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 19:54:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 20:36:16
-->
<template>
  <div>
    App组件
    <home></home>
    <async-category></async-category>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

import Home from './Home.vue'
import Loading from './Loading.vue'
// import AsyncCategory from './AsyncCategory.vue'

// 工厂函数
// const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

// 对象用法
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
export default {
  components: {
    Home,
    AsyncCategory,
    Loading
  }
}
</script>

<style scoped>
</style>