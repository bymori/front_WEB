<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 23:05:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 23:38:01
-->
<template>
  <div>
    <input v-model="value">
    <input v-model="iotitle">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String
  },
  emits: ["update:model-value", "update:title"],
  computed: {
    value: {
      set (value) {
        this.$emit('update:model-value', value)
      },
      get () {
        return this.modelValue
      }
    },
    iotitle: {
      set (title) {
        this.$emit('update:title', title)
      },
      get () {
        return this.title
      }
    }
  },
}
</script>

<style scoped>
</style>