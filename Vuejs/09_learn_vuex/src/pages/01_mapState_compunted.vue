<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 19:42:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 19:42:03
-->
<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home:{{ sName }}</h2>
    <h2>Home:{{ age }}</h2>
    <h2>Home:{{ height }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    // sCounter () {
    //   return this.$store.state.counter
    // },

    //其他的计算属性 从state获取
    ...mapState({
      sCounter: state => state.counter,
      sName: state => state.name,
    }, ['age', 'height']),

    ...mapState(['age', 'height'])
  },
}
</script>

<style scoped>
</style>