<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 23:33:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 00:16:17
-->
<template>
  <div>
    a
    <home></home>
    <button @click="addName">增加name</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue";
export default {
  components: {
    Home
  },
  provide () {
    return {
      name: '沫沫',
      age: 20,
      //   length: this.names.length,
      length: computed(() => this.names.length) //ref对象 需要加上 .value
    }
  },
  data () {
    return {
      names: ['abc', 'aa', 'bb']
    }
  },
  methods: {
    addName () {
      this.names.push("沫沫")
    }
  },
}
</script>

<style scoped>
</style>