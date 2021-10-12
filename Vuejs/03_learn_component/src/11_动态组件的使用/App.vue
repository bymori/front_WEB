<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 17:45:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 19:49:05
-->
<template>
  <div>
    <button v-for="(item, index) in tabs"
            :key="index"
            @click="itemClick(item)"
            :class="{active:currentTab === item}">
      {{item}}
    </button>

    <!-- 方式一：通过v-if来判断，显示不同的组件 -->
    <!-- <template v-if="currentTab ==='home'">
      <home></home>
    </template>
    <template v-else-if="currentTab ==='about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 方式二：动态组件的方式 -->
    <!-- <component :is="currentTab"></component> -->
    <!-- <component :is="currentTab"
               name='ioinn'
               :age='19'
               @pageClick='pageClick'></component> -->
    <!-- keep-alive -->
    <keep-alive include="home,about">
      <component :is="currentTab"
                 name='ioinn'
                 :age='19'
                 @pageClick='pageClick'></component>
    </keep-alive>

  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
export default {
  components: {
    Home,
    About,
    Category
  },
  data () {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'about'
    }
  },
  methods: {
    itemClick (item) {
      console.log(item);
      this.currentTab = item
    },
    pageClick () {
      console.log('pageClick点击了');
    }
  },
}
</script>

<style scoped>
.active {
  color: red;
}
</style>