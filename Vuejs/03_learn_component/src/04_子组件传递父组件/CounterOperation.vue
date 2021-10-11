<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 21:52:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 22:22:45
-->
<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="number"
           v-model.number="num">
    <button @click="incrementN">+N</button>
  </div>
</template>

<script>
export default {
  //   emits: ['add', 'sub', 'addN'],
  //对象写法的目的是为了进行参数的验证
  emits: {
    add: null,
    sub: null,
    addN: (num, name, age) => {
      console.log(num, name, age);
      if (num > 10) return true
      return false
    }
  },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    increment () {
      console.log("+1");
      this.$emit('add')
    },
    decrement () {
      console.log("-1");
      this.$emit('sub')
    },
    incrementN () {
      console.log(`+${this.num}`);
      this.$emit('addN', this.num, '沫沫', 19)
    }
  },
}
</script>

<style scoped>
</style>