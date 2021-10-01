<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-02 01:11:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 01:32:14
-->
<template>
  <div class="com-container">
    <div class="com-chart"
         ref="map_ref"></div>
  </div>
</template>
<script>
import axios from 'axios'
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
    async initChart () {
      // 初始化echartInstance对象
      this.chartInstance = this.$echarts.init(this.$refs.map_ref, 'chalk')
      // 获取中国地图数据
      // http://localhost:9000/static/map/china.json
      const { data: ret } = await axios.get('http://localhost:9000/static/map/china.json')
      this.$echarts.registerMap('china', ret)
      /** @type EChartsOption */
      const initOption = {
        geo: {
          type: 'map',
          map: 'china',
        },
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