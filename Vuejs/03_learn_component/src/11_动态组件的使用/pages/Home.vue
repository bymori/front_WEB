<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 17:54:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 18:22:20
-->
<template>
  <div @click="divClick">
    Home-{{name}}--{{age}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  emits: ['homeClick'],
  methods: {
    divClick () {
      this.$emit('pageClick')
    }
  },

}
</script>

<style scoped>
</style>