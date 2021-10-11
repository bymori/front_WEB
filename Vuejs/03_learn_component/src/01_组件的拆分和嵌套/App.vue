<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 19:50:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 20:22:32
-->
<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Header,
    Main,
    Footer,
  },
}
</script>

<style scoped>
</style>