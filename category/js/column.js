var domColumn = document.getElementById("column");
var myChartColumn = echarts.init(domColumn);
var imgDatUrl = 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxMDlweCIgdmlld0JveD0iMCAwIDE3IDEwOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjI1LjcwODEzMTglIiB5MT0iMzEuMTc4Njk2NyUiIHgyPSI4Ny4xMDI2NDY0JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDQ1QjdDIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0NUI3QyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLkuqTpgJrov5DooYznu5/orqHmlLkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUuMDAwMDAwLCAtMTg4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iMi4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1Ny4wMDAwMDAsIDU2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjEu5Zyw6Z2i5Lqk6YCa6L+Q6JCl54+t5qyh5YiG5p6QIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlLTMiIGZpbGw9IiMwNzFFM0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjQwNzQwNywgNTkuMjAzNzA0KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMS40MDc0MDcsIC01OS4yMDM3MDQpICIgcG9pbnRzPSI4LjE0ODE0ODE1IDkuNzc3Nzc3NzggMTQuNjY2NjY2NyA2LjUxODUxODUyIDE0LjY2NjY2NjcgMTA4LjYyOTYzIDguMTQ4MTQ4MTUgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS02IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45NTI2OTgsIDEwNi43MjU4ODEpIHJvdGF0ZSgyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuOTUyNjk4LCAtMTA2LjcyNTg4MSkgIiBwb2ludHM9IjYuMDkwMTk4NDEgMTAzLjg2MTU1IDEzLjI0NzYzNTcgMTAzLjczMDI3NSAyMS4wMDgxOTg4IDEwNC4yMTY2MzkgMTYuNTAxMjcxMSAxMDkuNzIxNDg3IDAuODk3MTk4MTA3IDEwOS4yOTU2MzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMyIgZmlsbD0iIzBEQ0U4NSIgcG9pbnRzPSIxNC42NjY2NjY3IDkuNzc3Nzc3NzggMjEuMTg1MTg1MiA2LjUxODUxODUyIDIxLjE4NTE4NTIgMTA4LjYyOTYzIDE0LjY2NjY2NjcgMTExLjg4ODg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjNDQ1QjdDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC42NzUwMTUsIDYuNTEwMjY5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjY3NTAxNSwgLTYuNTEwMjY5KSAiIHBvaW50cz0iMTIuODk5NTgwMiA0LjAwMjM5NDM5IDE5LjI3ODEwMDggMS45MDcxODMzNCAxNi45NjQ3MDE3IDguNzk5OTU1MDYgMTAuMDcxOTMgMTEuMTEzMzU0MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
var dimensions = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var currentMonth = [3, 2, 3, 3, 1, 0, 1, 0, 0, 1, 0, 0];
var lastMonth = [4, 5, 6, 5, 3, 1, 3, 3, 2, 4, 3, 3];
var colorList = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
    offset: 0,
    color: '#005193' // 0% 处的颜色
  }, {
    offset: 1,
    color: '#005193' // 100% 处的颜色
  }],
  globalCoord: false // 缺省为 false
}
var colorList2 = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
    offset: 0,
    color: '#007a55' // 0% 处的颜色
  }, {
    offset: 1,
    color: '#007a55' // 100% 处的颜色
  }],
  globalCoord: false // 缺省为 false
}
option = {
  legend: {
    textStyle:{
      color:'#fff'
    },
    data: ['去年', '今年']
  },
  title: {
    //text: "园区废气超标分析",
    top: 20,
    textStyle: {
      color: '#fff',
      fontSize: '22',
      fontWeight: 'normal',
    },
    subtextStyle: {
      color: '#90979c',
      fontSize: '16',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: {
    data: dimensions,
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#51637D'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    name: '超标企业数量',
//      offset:-20,
    nameTextStyle: {
      color:'#fff',
      padding: [0, 0, 0, 30]
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#51637D'
      }
    },
    axisTick: {
      lineStyle: {
        color: '#51637D'
      }
    }
  },
  series: [
    {
      name: '去年',
      //type: 'pictorialBar',
      barWidth: 15,
      type: 'bar',
      barGap: 0,
      symbol: imgDatUrl,
      symbolSize: ['100%', '100%'],
      itemStyle: {
        normal: {
          color: function (params) {
            //var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'];
            //return colorList[params.dataIndex];
            return colorList2
          },
          opacity: 0.6
        }
      },
      // symbolRepeat: true,
      // symbolOffset: [0, 10],
      data: lastMonth,
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#2b926e',

          }
        }
      }
    },
    {
      name: '今年',
      //type: 'pictorialBar',
      barWidth: 15,
      type: 'bar',
      symbol: imgDatUrl,
      barGap: 0,
      symbolSize: ['100%', '100%'],
      itemStyle: {
        normal: {
          color: function (params) {
            //var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'];
            //return colorList[params.dataIndex];
            return colorList
          },
          opacity: 0.5
        }
      },
      // symbolRepeat: true,
      // symbolOffset: [0, 10],
      data: currentMonth,
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#6495ED'
          }
        }
      }
    }
  ]
};
var app = {
  currentIndex: 0,
};
setInterval(function () {
  var dataLen = option.series[0].data.length;
  var myChart = echarts.init(document.getElementById('column'));
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: app.currentIndex
  });
  app.currentIndex = (app.currentIndex + 1) % dataLen;
  //console.log(app.currentIndex);
  // 高亮当前图形
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: app.currentIndex,
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: app.currentIndex
  });


}, 1000);

if (option && typeof option === "object") {
  myChartColumn.setOption(option, true);
}