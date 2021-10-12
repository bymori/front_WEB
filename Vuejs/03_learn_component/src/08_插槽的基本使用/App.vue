<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 15:37:57
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 15:52:39
-->
<template>
  <div>
    <my-slot-cpn>
      <button>这里是一个按钮</button>
    </my-slot-cpn>

    <my-slot-cpn>
      文本内容
    </my-slot-cpn>

    <!-- 插槽使用组件 -->
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>

    <!-- 默认内容 -->
    <my-slot-cpn>
    </my-slot-cpn>

    <!-- 插入很多内容 -->
    <my-slot-cpn>
      <h2>沫沫</h2>
      <button>按钮</button>
      <strong>一个标签</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MySlotCpn from './MySlotCpn.vue'
export default {
  components: { MySlotCpn, MyButton },

}
</script>

<style scoped>
</style>