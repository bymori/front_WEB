/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-29 23:13:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-30 01:14:38
 */
// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'));

  // 指定配置和数据
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    //修改图表的大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '旅游行业',
          '教育培训',
          '游戏行业',
          '医疗行业',
          '电商行业',
          '社交行业',
          '金融行业',
        ],
        axisTick: {
          alignWithLabel: true,
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          //设置成 0 强制显示所有标签。
          //如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。
          interval: 0,
          rotate: '30', //倾斜角度
          //隔一个换行
          /* formatter: function (params, index) {
            if (index % 2 != 0) {
              return '\n\n' + params;
            } else {
              return params;
            }
          }, */
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        // 修改刻度标签 相关样式
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 2,
            // type: "solid"
          },
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        // 修改柱子宽度
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };

  // 把配置给实例对象
  myChart.setOption(option);
  // 让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();
