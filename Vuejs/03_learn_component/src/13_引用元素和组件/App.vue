<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 20:52:26
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 21:30:11
-->
<template>
  <div>
    <!-- <h2 id="title">嘿嘿 ioinn</h2> -->

    <!-- 绑定到元素上 -->
    <h2 ref="title">嘿嘿 ioinn</h2>

    <!-- 绑定到组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data () {
    return {
      mm: 'app里面的mm'
    }
  },
  methods: {
    btnClick () {
      // 访问元素
      console.log(this.$refs.title);
      console.log(this.$refs.title.innerHTML);
      // 访问组件实例
      console.log(this.$refs.navBar.msg);
      //   调用组件实例的方法
      this.$refs.navBar.sayHello()

      //   $el
      console.log(this.$refs.navBar.$el);
    }
  },
}
</script>

<style scoped>
</style>