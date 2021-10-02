<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-02 01:11:37
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-03 00:51:21
-->
<template>
  <div class="com-container">
    <div class="com-chart"
         ref="mm_ref"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
      this.chartInstance = this.$echarts.init(this.$refs.mm_ref, this.theme)
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
  },
  computed: {
    ...mapState(['theme'])
  },
  watch: {
    theme () {
      console.log('主题切换了')
      this.chartInstance.dispose() // 销毁当前的图表
      this.initChart() // 重新以最新的主题名称初始化图表对象
      this.screenAdapter() // 完成屏幕的适配
      this.updateChart() // 更新图表的展示
    }
  }
}
</script>
<style lang="less" scoped>
</style>