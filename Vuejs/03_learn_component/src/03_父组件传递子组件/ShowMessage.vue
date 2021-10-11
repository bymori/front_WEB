<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:57:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 21:40:44
-->
<template>
  <div>
    <!-- <h2 :class="$attrs.class">{{title}}</h2> -->
    <h2 v-bind="$attrs">{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  //   props: ['title', 'content']
  inheritAttrs: false,
  props: {
    //指定类型
    title: String,// 禁用Attribute继承和多根节点
    content: {
      type: String,//类型
      required: true,//必传参数
      default: '123'//默认值 和上面必传冲突
    },
    info: {
      type: Object,
      //对象或数组默认值必须从一个工厂函数获取
      default () {
        return { message: 'hello' }
      }
    }
  }
}
</script>

<style scoped>
</style>