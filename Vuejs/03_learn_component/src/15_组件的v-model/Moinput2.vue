<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 23:05:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 23:28:43
-->
<template>
  <div>
    <!-- 1. 默认绑定和事件处理 -->
    <!-- <h3>{{modelValue}}</h3>
    <button @click="btnClick">input按钮</button> -->

    <!-- 2. 通过 input-->
    <!-- <input :value="modelValue"
           @input="btnClick"> -->

    <!-- 3. 绑定到props中是不对的  这里修改了接收到的props-->
    <!-- <input v-model="modelValue"> -->

    <!-- 4. 使用计算属性-->
    <input v-model="value">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  emits: ["update:model-value"],
  computed: {
    value: {
      set (value) {
        this.$emit('update:model-value', value)
      },
      get () {
        return this.modelValue
      }
    }
  },
  methods: {
    btnClick (event) {
      //   this.$emit('update:model-value', '3333')
      this.$emit('update:model-value', event.target.value)
    }
  },
}
</script>

<style scoped>
</style>