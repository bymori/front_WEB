<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 19:54:20
-->
<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
    <hr>
    <h3>{{counter}}</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{height}}</h3>
    <h4>{{sCounter}}</h4>
    <h4>{{sName}}</h4>
  </div>
</template>

<script>

import { useState } from '../hook/useState'
export default {

  setup () {
    const storeState = useState(["counter", "name", "age", "height"])

    const storeState2 = useState({
      sCounter: state => state.counter,
      sName: state => state.name
    })

    return {
      ...storeState, ...storeState2
    }
  }
}
</script>

<style scoped>
</style>