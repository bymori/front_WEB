<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:00:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 01:00:37
-->
<script>
import { h } from "vue";

export default {
  render () {
    return h("div", null, [
      h("h2", null, "Hello World"),
      this.$slots.default ? this.$slots.default({ name: "ioinn" }) : h("span", null, "我是HelloWorld的插槽默认值")
    ])
  }
}
</script>

<style scoped>
</style>