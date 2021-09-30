### 项目运行

- 启动后端工程
  - `cd koa_server`
  - `npm install`
  - `node app.js`
- 启动前端工程
  - `cd vision`
  - `npm install`
  - `npm run serve`

### 项目演示

- 该项目为电商平台数据可视化实时监控系统
- 可以保证实时获取数据进行分析
- 支持大屏展示，自适应分辨率
- 支持联动效果，一端操作，多端联动展示

### 技术选型

- ECharts
- Vue, Vue Router, VueX
- Webpack
- Axios
- WebSocket
- Koa2

### ECharts的基本使用

- vscode Echarts自动补全插件
  - [Echarts Enhanced Completion](https://marketplace.visualstudio.com/items?itemName=ren-wei.echarts-enhanced-completion)

- 步骤1: 引入echarts.js文件
- 步骤2: 准备一个呈现图表的盒子
- 步骤3: 初始化echarts实例对象
- 步骤4: 准备配置项
  - 除了配置项会变化之外，其他的代码都是固定的
  - 配置项的学习和使用应该参照官方文档和示例
  - [ECharts-配置项手册](https://echarts.apache.org/zh/option.html#title)
- 步骤5：将配置项设置给echarts实例对象

- 相关配置讲解
  - xAxis: 直角坐标系中的x轴
  - yAxis: 直角坐标系中的y轴
  - series: 系列列表。每个系列通过type决定自己的图表类型

### <a id="Common_chart">ECharts常用图表</a>

- [通用配置](#General_configuration)

- [柱状图](#Bar_chart) [柱状图的实现](03.柱状图的实现.html)
- [折线图](#Linechart)
- [散点图](#Scatter_plot)
- [饼图](#Pie_chart)
- [地图](#Map)
- [雷达图](#Radar_chart)
- [仪表盘图](#Instrument_panel_chart)

#### <a id="General_configuration">通用配置</a> [🔝](#Common_chart)

- [通用配置-dome](04.通用配置01.html)
  >通用配置指的是任何一种类型的图表都可以使用的配置
  >[ECharts-配置项手册](https://echarts.apache.org/zh/option.html#title)
- 通用配置 title
  - 文字样式 `textStyle`
  - 标题边框 `borderWidth` `borderColor` `borderRadius`
  - 标题位置 `left` `top` `right` `bottom`
- 通用配置 tooltip
  > tooltip: 提示框组件，用于配置鼠标滑过或点击图表时的显示框
  - 触发类型：`trigger` item axis none
  - 触发时机：`triggerOn` mouseover click
  - 格式化：`formatter`
    - 字符串模板：`formatter: '{b} 的成绩是 {c}',`
    - 回调函数：`formatter: function (arg) {return arg[0].name + ' 的成绩是 ' + arg[0].data;},`
  - [更多formatter](https://echarts.apache.org/zh/option.html#grid.tooltip.formatter)
- 通用配置 toolbox
  > toolbox:ECharts提供的工具栏
  - 显示工具栏按钮 feature 工具箱按钮
  - saveAsImage 导出图片
  - dataView 数据视图
  - restore 重置
  - dataZoom 区域缩放
  - magicType 动态图表类型的切换
     `type: ['bar', 'line'],`
- 通用配置 legend
  > legend:图例，用于筛选系列，需要和series配合使用
  - legend中的data是一个数组
  - legend中的data的值需要和series数组中某组数据的name值一致

  ```
  legend: {
    data: ['语文', '数学'],
  },
  series: [
    {
      name: '语文',
      type: 'bar',
      data: yDataArrChinese,
    },
    {
      name: '数学',
      type: 'bar',
      data: yDataArrMath,
    },
  ],
  ```

#### <a id="Bar_chart">柱状图</a> [🔝](#Common_chart)

- 基本的柱状图
  - 基本的代码结构
  - x轴和y轴的数据
  - `series`中的`type`设置为`bar`
- 柱状图常见效果
  - 最大值 \ 最小值 `markPoint`
  - 平均值 `markLine`
  - 数值的显示 `label`
  - 柱的宽度 `barWidth`
- 柱状图特点
  - 柱状图描述的是分类数据，呈现的是每一个分类中`有多少`，通过柱状图，可以很清晰的看出每1个分类数据的排名情况
- [柱状图的实现](03.柱状图的实现.html)

#### <a id="Linechart">折线图</a> [🔝](#Common_chart)

- [基本的折线图](05.折线图的实现.html)
  - 与柱状图基本类似
  - `series`中的`type`设置为`line`
- [常见效果](06.折线图的实现.html)
  - 标记：最大值 最小值 平均值 标注区间 `markPoint` `markLine` `markArea`
  - 线条控制：平滑风格 `smooth` `lineStyle`
  - 填充风格 `areaStyle`
  - 紧挨边缘 `boundaryGap`
  - 缩放：脱离0值比例 `scale` [demo](07.折线图的实现.html)
  - 堆叠图: `stack` [demo](08.折线图的实现.html)
- 折线图特点
  - 折线图常用来分析数据随时间的变化趋势

#### <a id="Scatter_plot">散点图</a> [🔝](#Common_chart)

- [基本散点图](09.散点图的实现.html)
  - 基本的代码结构
  - x轴和y轴的数据，是一个二维数组
  - series中的type设置为scatter
  - xAxis和yAxis中的type设置为value
- [常见效果-dome](10.散点图的实现.html)
  - 气泡图
  - 涟漪效果
- 散点图特点
  - 散点图可以帮助我们推断出变量间的相关性
  - 散点图也经常用在地图的标注上

#### 直角坐标系中的常用配置

  > 直角坐标系图表：柱状图 折线图 散点图

- [网格](11.直角坐标系的常用配置_grid.html) grid
  - grid是用来控制直角坐标系的布局和大小
  - x轴和y轴就是在grid的基础上进行绘制的
  - 显示grid `show: true,`
  - grid的边框 `borderWidth` `borderColor`
  - grid的位置和大小 `left` `top` `right` `bottom` `width` `height`

- [坐标轴](12.直角坐标系的常用配置_axis.html) x/yAxis
  - 坐标轴分为x轴和y轴
  - 一个grid中最多有两种位置的x轴和y轴
  - 坐标轴类型 type
    - value:数值轴，自动会从目标数据中读取数据
    - category:类目轴，该类型必须通过data设置类目数据
  - 显示位置 position
    - xAxis 可取值为`top`或者`bottom` 默认为`bottom`
    - yAxis 可取值为`left`或者`right` 默认为`left`

- [区域缩放](13.直角坐标系的常用配置dataZoom.html) dataZoom
  - dataZoom 用于区域缩放，对数据范围过滤，x轴和y轴都可以拥有
  - dataZoom 是一个数组，意味着可以配置多个区域缩放器
  - 类型 type
    - slider: 滑块
    - inside: 内置，依靠鼠标滚轮或者双指缩放
  - 指明产生作用的轴
    - xAxisIndex 设置缩放组件控制的是哪个x轴，一般写0即可
    - yAxisIndex 设置缩放组件控制的是哪个y轴，一般写0即可
  - 指明初始状态的缩放情况
    - start 数据窗口范围的起始百分比
    - end 数据窗口范围的结束百分比

#### <a id="Pie_chart">饼图</a> [🔝](#Common_chart)

- [基本的饼图](14.饼图的实现.html)
  - 基本的代码结构
  - 数据是由name和value组成的对象所形成的数组
  - series中的type设置为pie
  - 无须配置xAxis和yAxis
- [饼图常见效果](15.饼图的常见效果.html)
  - 显示文字的格式化 `label.formatter`
  - 圆环 设置两个半径 `radius: ['50%', '75%']`
  - 南丁格尔图 `roseType: 'radius'`
  - 选中效果
    - 选中模式 `selectedMode: 'multiple'`
    - 选中偏移量  `selectedOffset: 30`
- 饼图的特点
  - 饼图可以很好地帮助用户快速了解不同分类的数据的`占比情况`

#### <a id="Map">地图</a> [🔝](#Common_chart)
> 地图图表的使用方式
- 百度地图API
  - 需要申请[百度地图AK](https://lbsyun.baidu.com/)(API Key)
- [矢量地图](16.地图的实现.html)
  - 需要准备适量地图数据
  - [国家地理信息公共服务平台天地图](https://www.tianditu.gov.cn/)
  - [标准地图服务](http://bzdt.ch.mnr.gov.cn/)
    - 常用配置
    - 缩放拖动 `roam`
    - 名称显示 `label`
    - 初始缩放比例 `zoom`
    - 地图中心点 `center`
- 地图的绘制
  - 加载数据
  - 将数据注册给echarts全局对象
  - 配置geo
- 常见效果
  - 缩放拖动/初始缩放比例/中心点
  - visualMap和地图的结合
  - 散点图和地图的结合

#### <a id="Radar_chart">雷达图</a> [🔝](#Common_chart)

#### <a id="Instrument_panel_chart">仪表盘图</a> [🔝](#Common_chart)
