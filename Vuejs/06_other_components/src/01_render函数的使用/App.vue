<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 00:45:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 01:03:23
-->
<script>
import { h } from 'vue';
import HelloWorldVue from './HelloWorld.vue';
export default {
  render () {
    return h(HelloWorldVue, {}, {
      default: props => h("span", null, `app传入到HelloWorld中的内容: ${props.name}`)
    })
  }
}
</script>

<style scoped>
</style>