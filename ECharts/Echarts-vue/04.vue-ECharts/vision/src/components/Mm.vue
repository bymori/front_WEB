<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-02 01:11:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 01:21:44
-->
<template>
  <div class="com-container">
    <div class="com-chart"
         ref="mm_ref"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {

    initChart () {
      // 初始化echartInstance对象
      this.chartInstance = this.$echarts.init(this.$refs.mm_ref, 'chalk')
      /** @type EChartsOption */
      const initOption = {

      }
      this.chartInstance.setOption(initOption)
    },
    async getData () {
      //获取服务器的数据，对this.allData进行赋值之后，调用updateChart方法更新图表
      //    const { data: ret } = await this.$http.get('mm')
      // this.allData = ret

      this.updateChart()
    },
    updateChart () {
      //处理图表需要的数据
      /** @type EChartsOption */
      const dataOption = {

      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      // 当浏览器的大小发生变化的时候, 会调用的方法, 来完成屏幕的适配
      const adapterOption = {

      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>
<style lang="less" scoped>
</style>