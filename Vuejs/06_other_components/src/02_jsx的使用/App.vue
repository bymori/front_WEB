<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:10:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 01:18:44
-->
<script>
import HelloWorld from './HelloWorld.vue';
export default {
  data () {
    return {
      counter: 0
    }
  },
  render () {
    const increment = () => this.counter++
    const decrement = () => this.counter--

    return (
      <div>
        <h2>当前计数：{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <HelloWorld>
          {{ default: props => <button>插槽位置的按钮</button> }}
        </HelloWorld>
      </div>
    )
  },
}
</script>

<style scoped>
</style>