<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 01:10:32
-->
<template>
  <div>
    <hr>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <!-- <h2>{{ doubleRootCounter }}</h2> -->
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1</button>
    <hr>
  </div>
</template>

<script>
// import { createNamespacedHelpers, mapState, mapGetters, mapMutations, mapActions } from "vuex";

import { createNamespacedHelpers } from "vuex";

import { useState, useGetters } from '../hook/index'

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")

export default {
  computed: {
    // 1.写法一:
    // ...mapState({
    //   homeCounter: state => state.home.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: "home/doubleHomeCounter"
    // })

    // 2.写法二:
    // ...mapState('home', ["homeCounter"]),
    // ...mapGetters('home', ["doubleHomeCounter"]),

    // 3.写法三:
    // ...mapState(["homeCounter"]),
    // ...mapGetters(["doubleHomeCounter"]),
  },
  methods: {
    // 1.写法一:
    // ...mapMutations({
    //   increment: "home/increment"
    // }),
    // ...mapActions({
    //   incrementAction: "home/incrementAction"
    // }),

    // 2.写法二: 
    // ...mapMutations('home', ["increment"]),
    // ...mapActions('home', ["incrementAction"]),

    // 3.写法三:
    // ...mapMutations(["increment"]),
    // ...mapActions(["incrementAction"]),
  },
  setup () {
    //{homeCounter: function}
    const state = useState('home', ["homeCounter"])
    // const rootGetters = mapGetters(["doubleRootCounter"])
    const getters = useGetters('home', ["doubleHomeCounter"])

    const mutations = mapMutations(["increment"])
    const actions = mapActions(["incrementAction"])

    return {
      ...state,
      ...getters,
      //   ...rootGetters,
      ...mutations,
      ...actions
    }
  }
}
</script>

<style scoped>
</style>