<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 22:27:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 22:55:51
-->
<template>
  <div>
    <tab-countrol :titles="titles"
                  @titleClick="titleClick" />
    <h2>{{contents[currentIndex]}}</h2>
  </div>
</template>

<script>
import TabCountrol from './TabCountrol.vue'
export default {
  components: { TabCountrol },
  data () {
    return {
      titles: ['衣服', '鞋子', '裤子'],
      contents: ['衣服页面', '鞋子页面', '裤子页面'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
    }
  },
}
</script>

<style scoped>
</style>