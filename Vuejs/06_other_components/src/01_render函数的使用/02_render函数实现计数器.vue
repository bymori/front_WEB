<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 00:45:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 00:52:40
-->
<script>
import { h } from 'vue';

export default {
  data () {
    return {
      counter: 0
    }
  },
  render () {
    return h("div", { class: "app" }, [
      h("h2", null, `当前计数：${this.counter}`),
      h('button', {
        onClick: () => this.counter++
      }, '+1'),
      h('button', {
        onClick: () => this.counter--
      }, '-1')
    ])
  }
}
</script>

<style scoped>
</style>