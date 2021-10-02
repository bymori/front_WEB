<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-01 23:32:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-02 21:13:36
-->
<template>
  <div class="com-container">
    <div class="title"
         :style="comStyle">
      <span @click="showChoice=!showChoice">{{'▎ '+ showTitle}}</span>
      <span class="iconfont title-icon"
            :style="comStyle"
            @click="showChoice=!showChoice">&#xe6eb;</span>
      <div class="select-con"
           v-show="showChoice">
        <div class="select-item"
             v-for="item in selectTypes"
             :key="item.key"
             @click="handleSelect(item.key)">
          {{item.text}}
        </div>
      </div>
    </div>
    <div class="com-chart"
         ref="trend_ref"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 服务器返回的数据
      showChoice: false, // 是否显示可选项
      choiceType: 'map', // 显示的数据类型
      titleFontSize: 0 // 指明标题的字体大小
    }
  },
  created () {
    // 在组件创建完成之后 进行回调函数的注册
    this.$socket.registerCallBack('trendData', this.getData)
  },
  mounted () {
    this.initChart()

    // this.getData()
    // 发送数据给服务器, 告诉服务器, 我现在需要数据
    this.$socket.send({
      action: 'getData',
      socketType: 'trendData',
      chartName: 'trend',
      value: ''
    })

    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
    // 在组件销毁的时候, 进行回调函数的取消
   this.$socket.unRegisterCallBack('trendData')
  },
  computed: {
    selectTypes () {
      if (!this.allData) {
        return []
      } else {
        return this.allData.type.filter(item => {
          return item.key !== this.choiceType
        })
      }
    },
    showTitle () {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.choiceType].title
      }
    },
    //设置给标题的样式
    comStyle () {
      return {
        fontSize: this.titleFontSize + 'px'
      }
    }
  },
  methods: {
    // 初始化echartInstance对象
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref, 'chalk')

      /** @type EChartsOption */
      const initOption = {
        grid: {
          left: '3%',
          top: '35%',
          right: '4%',
          bottom: '1%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 20,
          top: '20%',
          icon: 'circle'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
        },
      }
      this.chartInstance.setOption(initOption)
    },

    // ret 就是服务端发送给客户端的图表的数据
    getData (ret) {
      // http://127.0.0.1:8888/api/trend
      // const { data: ret } = await this.$http.get('trend')
      this.allData = ret
      console.log(this.allData)
      this.updateChart()

    },
    // 处理数据
    updateChart () {
      // 半透明的颜色值
      const colorArr1 = [
        'rgba(11, 168, 44, 0.5)',
        'rgba(44, 110, 255, 0.5)',
        'rgba(22, 242, 217, 0.5)',
        'rgba(254, 33, 30, 0.5)',
        'rgba(250, 105, 0, 0.5)'
      ]
      // 全透明的颜色值
      const colorArr2 = [
        'rgba(11, 168, 44, 0)',
        'rgba(44, 110, 255, 0)',
        'rgba(22, 242, 217, 0)',
        'rgba(254, 33, 30, 0)',
        'rgba(250, 105, 0, 0)'
      ]
      // 处理数据
      // 类目轴的数据
      const timeArr = this.allData.common.month
      // y轴的数据 series下的数据
      const valueArr = this.allData[this.choiceType].data
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.name,
          type: 'line',
          data: item.data,
          stack: this.choiceType,
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorArr1[index]
              },
              {
                offset: 1,
                color: colorArr2[index]
              }
            ])
          }

        }
      })
      //图例的数据
      const legendArr = valueArr.map(item => {
        return item.name
      })
      /** @type EChartsOption */
      const dataOption = {
        xAxis: {
          data: timeArr,
        },
        legend: {
          data: legendArr,
        },
        series: seriesArr,
      }
      this.chartInstance.setOption(dataOption)
    },
    // 当浏览器的大小发生变化的时候, 会调用的方法, 来完成屏幕的适配
    screenAdapter () {
      this.titleFontSize = this.$refs.trend_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        itemWidth: this.titleFontSize,
        itemHeight: this.titleFontSize,
        itemGap: this.titleFontSize,
        textStyle: {
          fontSize: this.titleFontSize / 2
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    handleSelect (currentType) {
      this.choiceType = currentType
      this.updateChart()
      this.showChoice = false
    }
  },
}
</script>
<style lang="less" scoped>
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 10;
  color: wheat;
  cursor: pointer;
  .title-icon {
    margin-left: 10px;
  }
  .select-con {
    background-color: #222733;
    .select-item {
      text-align: center;
    }
  }
}
</style>