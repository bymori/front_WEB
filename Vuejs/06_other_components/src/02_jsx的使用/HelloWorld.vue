<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:15:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 01:15:47
-->
<script>
export default {
  render () {
    return (
      <div>
        <h2>HelloWorld</h2>
        {this.$slots.default ? this.$slots.default() : <span>哈哈哈</span>}
      </div>
    )
  }
}
</script>

<style scoped>
</style>