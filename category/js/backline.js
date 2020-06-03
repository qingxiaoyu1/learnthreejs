var domBrokenline = document.getElementById("brokenline");
var myChartBrokenline = echarts.init(domBrokenline);
var xData = function () {
  var data = [];
  var year = "2018/9/"
  for (var i = 1; i < 31; i++) {
    data.push(year + i);
  }
  return data;
}();
var yData = function () {
  var data = [];
  var num = 0
  for (var i = 0; i < 110; i++) {
    if (i % 10 == 0) {
      data.push(i)
    }
  }
  console.log(data)
  return data;
}();
var color = ['#1ba120', '#13ff7d', '#2A83CA', '#FF9000']
var nameArr = ['TVOC', '臭气', 'S02', 'NOx']


var data = [
  [92.00, 87.00, 84.00, 83.00, 73.60, 69.60, 67.00, 65.60, 68.88, 65.68, 63.00, 63.00, 57.00, 56.54, 56.60, 59.00, 58.00, 57.80, 57.40, 57.00, 56.88, 55.00, 57.00, 55.60, 53.60, 53.00, 52.00, 51.67, 51.49, 49.00],
  [21.00, 20.00,20.00,20.00,19.00, 17.00,  18.00,18.00, 17.50, 17.00,  16.00,16.00,16.00, 16.00, 15.50, 15.00, 15.00,14.15, 14.00,13.30,  13.00, 12.80, 12.80,12.40, 12.00, 11.32,11.60, 10.75, 10.64,  9.28,    ],
  [64.00, 55.00, 52.00, 50.00, 45.00, 42.00, 37.00, 35.70, 35.00, 32.00, 31.60, 31.00, 30.00, 29.00, 29.00, 28.00, 25.00, 24.00, 23.50, 22.00, 21.90, 21.00, 19.00, 18.00, 17.00, 16.00, 15.00, 13.00, 12.00, 11.00],
  [72.00, 65.00, 67.00, 55.00, 52.00, 49.00, 46.00, 39.00, 37.00, 37.00, 35.00, 32.88, 32.77, 31.66, 34.00, 32.00, 31.50, 31.00, 29.00, 28.00, 26.00, 26.00, 22.00, 21.00, 21.66, 21.580, 20.60, 20.40, 18.80, 17.60],
]

var series = [];

for (var i = 0; i < nameArr.length; i++) {
  series.push({
    name: nameArr[i],
    type: "line",
    center: ['50%', '30%'],
    symbolSize: 8,
    symbol: 'circle',
    itemStyle: {
      normal: {
        color: color[i],
        lineStyle: {
          width: 1,
          type: 'solid' //'dotted'虚线 'solid'实线
        },
        barBorderRadius: 0,
        label: {
          show: true,
        }
      }
    },
    data: data[i],

  })
  console.log(series)
}
option = {
  backgroundColor: 'rgba(0,0,0,0)',
  legend: {
    bottom: 5,
    textStyle: {
      color: '#000',
      fontSize: '12'
    },
    data: nameArr,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    //toolTip加单位
    formatter: function (params) {
      var relVal = params[0].name;
      relVal += '<br/>' + params[0].seriesName + ' : ' + params[0].value + "mg/m³";
      relVal += '<br/>' + params[1].seriesName + ' : ' + params[1].value + "mg/m³";
      relVal += '<br/>' + params[2].seriesName + ' : ' + params[2].value + "μg/m³";
      relVal += '<br/>' + params[3].seriesName + ' : ' + params[3].value + "μg/m³";
//        for (var i = 0, l = params.length; i < l; i++) {
//          relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + "mg/m³";
//        }
      return relVal;
    }

  },
  xAxis: [{
    type: "category",
    axisLine: {
      lineStyle: {
        color: '#181625'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitArea: {
      show: false
    },
    axisLabel: {
      inside: false,
      textStyle: {
        color: '#000',
        fontWeight: 'normal',
        fontSize: '12',
      },
    },
    data: xData,
  }],
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#181625',
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#181625 ',
      }
    },
    axisLabel: {
      textStyle: {
        color: '#000  ',
        fontWeight: 'normal',
        fontSize: '12',
      },
      formatter: yData
    }
  },
  series: series,
}
var app = {
  currentIndex: 0,
};
setInterval(function () {
  var dataLen = option.series[0].data.length;
  var myChart = echarts.init(document.getElementById('brokenline'));
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
  myChartBrokenline.setOption(option, true);
}