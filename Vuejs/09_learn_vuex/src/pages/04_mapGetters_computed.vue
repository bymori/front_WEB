<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:07:10
-->
<template>
  <div>
    <h2>总价值：{{$store.getters.totalPrice}}</h2>
    <h2>大于N的总价值：{{$store.getters.totalPriceCountGreaterN(2)}}</h2>
    <hr>
    <!-- <h2>{{$store.getters.nameInfo}}</h2> -->
    <h2>{{nameInfo}}</h2>
    <h2>{{sAgeInfo}}</h2>
    <h2>{{sHeightInfo}}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(['nameInfo']),
    ...mapGetters({
      sAgeInfo: 'ageInfo',
      sHeightInfo: 'heightInfo'
    })
  },


}
</script>

<style scoped>
</style>