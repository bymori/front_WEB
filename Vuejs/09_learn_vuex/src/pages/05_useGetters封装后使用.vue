<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:13:52
-->
<template>
  <div>
    <h2>总价值：{{$store.getters.totalPrice}}</h2>
    <h2>大于N的总价值：{{$store.getters.totalPriceCountGreaterN(2)}}</h2>
    <hr>
    <!-- <h2>{{$store.getters.nameInfo}}</h2> -->
    <h2>{{nameInfo}}</h2>
    <h2>{{ageInfo}}</h2>
    <h2>{{heightInfo}}</h2>
  </div>
</template>

<script>
import { useGetters } from '../hook/useGetters'

export default {
  setup () {
    const storeGetters = useGetters(["nameInfo", "ageInfo", "heightInfo"])
    return {
      ...storeGetters
    }
  }
}
</script>

<style scoped>
</style>