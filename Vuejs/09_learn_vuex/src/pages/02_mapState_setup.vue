<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 19:42:52
-->
<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
    <hr>
    <h3>{{sCounter}}</h3>
    <h3>{{counter}}</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{height}}</h3>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { mapState, useStore } from "vuex"
export default {

  setup () {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)

    const storeStateFns = mapState(['counter', 'name', 'age', 'height'])

    // {name: function, age: function, height: function}
    // {name: ref, age: ref, height: ref}
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({ $store: store })
      storeState[fnKey] = computed(fn)
    })
    
    return {
      sCounter,
      ...storeState
    }
  }
}
</script>

<style scoped>
</style>