/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-29 23:13:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-30 12:03:45
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

//柱状图2
(function () {
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));

  // 2. 指定配置和数据
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      //   containLabel: true,
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        // inverse: true, 是否是反向坐标轴。
        inverse: true,
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff',
        },
      },
      {
        type: 'category',
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 80, 90, 85, 60],
        //两组柱子层叠
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          //   color: 'pink',
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          },
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: '{c}%',
        },
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100],
      },
    ],
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();

//折线图1模块
(function () {
  var yearData = [
    {
      year: '2020', // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: '2021', // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector('.line .chart'));

  // 2. 指定配置和数据
  var option = {
    // 通过这个color修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      textStyle: {
        //图例颜色文字
        color: '#4c9bfd',
      },
      //距离右边10%
      right: '10%',
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, //显示边框
      borderColor: '#012f4a', //边框颜色
      containLabel: true, //包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a', // 分割线颜色
        },
      },
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        //  true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0],
      },
      {
        name: '新增游客',
        type: 'line',
        smooth: true,
        data: yearData[0].data[1],
      },
    ],
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });

  // 5.点击切换效果
  $('.line h2').on('click', 'a', function () {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();
