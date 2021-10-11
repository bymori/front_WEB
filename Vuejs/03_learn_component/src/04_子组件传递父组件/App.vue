<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 21:50:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 22:08:00
-->
<template>
  <div>
    <h2>当前计数：{{count}}</h2>
    <counter-operation @add='addOne'
                       @sub='subOne'
                       @addN="addNum" />
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
export default {
  components: { CounterOperation },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addOne () {
      this.count++
    },
    subOne () {
      this.count--
    },
    addNum (num = 0, name, age) {
      console.log(num, name, age);
      this.count += num
    }
  },
}
</script>

<style scoped>
</style>