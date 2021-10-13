<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 00:45:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 00:57:07
-->
<script>
import { h, ref } from 'vue';

export default {
  setup () {
    const counter = ref(0)

    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数：${counter.value}`),
        h('button', {
          onClick: () => counter.value++
        }, '+1'),
        h('button', {
          onClick: () => counter.value--
        }, '-1')
      ])
    }
  },
}
</script>

<style scoped>
</style>