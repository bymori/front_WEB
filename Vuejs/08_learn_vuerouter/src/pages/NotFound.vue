<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 14:08:45
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 14:08:45
-->
<template>
  <div>
    <h2>Page Not Found</h2>
    <p>您打开的路径页面不存在, 请不要使用我们家的应用程序了~</p>
    <h1>{{$route.params.pathMatch}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
