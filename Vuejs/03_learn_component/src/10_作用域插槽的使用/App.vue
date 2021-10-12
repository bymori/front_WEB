<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 16:38:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 17:28:17
-->
<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>{{title}}</button>
    </child-cpn> -->

    <show-names :names="names">
      <template v-slot='soltProps'>
        <button>{{soltProps.item}}--{{soltProps.index}}</button>
      </template>
    </show-names>

    <show-names :names="names">
      <!-- <template v-slot:ioinn='soltProps'> -->
      <template v-slot='soltProps'>
        <div>{{soltProps.item}}--{{soltProps.index}}</div>
      </template>
    </show-names>

    <!-- 独占默认插槽的缩写 不需要使用 template 包裹-->
    <show-names :names="names"
                v-slot='soltProps'>
      <strong>{{soltProps.item}}--{{soltProps.index}}</strong>

      <!-- <template>
        <h2>哈哈</h2>
      </template> -->
    </show-names>
  </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue'
import ShowNames from './ShowNames.vue'
export default {
  components: { ChildCpn, ShowNames },
  data () {
    return {
      names: ['沫沫', '末日', 'ioinn']
    }
  },
}
</script>

<style scoped>
</style>