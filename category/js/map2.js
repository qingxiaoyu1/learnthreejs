var dom = document.getElementById("map");

 var MapHeight = parseInt($("html").height())-100;
 $(dom).css({"height":MapHeight})
var myChart = echarts.init(dom);
var app = {};
var jsonData = localStorage.getItem('jsonData');
var allData = JSON.parse(jsonData);
var categorys = allData['平台能力-开发Paas']['覆盖区域数'];
option = null;
var data = [],data1=[];

var categorysData1 = categorys['平台接入工业设备覆盖区域数量'];
var categorysData2 = categorys['平台企业用户覆盖的区域数量'];

for (var i = 0; i < categorysData1.length; i++) {
  var item = categorysData1[i];
  item.value = item.value;
  item.name = item.key;
  data.push(item);
}

for (var i = 0; i < categorysData2.length; i++) {
  var item = categorysData2[i];
  item.value = item.value;
  item.name = item.key;
  data1.push(item);
}


var geoCoordMap = {
  '北京': [116.46, 39.92],
  '天津': [117.2, 39.13],
  '上海': [121.48, 31.22],
  '重庆': [106.54, 29.59],
  '内蒙古': [111.65, 40.82],
  '新疆': [87.68, 43.77],
  '西藏': [91.11, 29.97],
  '宁夏': [106.27, 38.47],
  '广西': [108.33, 22.84],
  '黑龙江': [126.63, 45.75],
  '吉林': [125.35, 43.88],
  '辽宁': [123.38, 41.8],
  '河北': [114.48, 38.03],
  '河南': [113.65, 34.76],
  '安徽': [117.27, 31.86],
  '湖北': [114.31, 30.52],
  '湖南': [113, 28.21],
  '山西': [112.53, 37.87],
  '山东': [117, 36.65],
  '陕西': [108.95, 34.27],
  '江苏': [118.78, 32.04],
  '浙江': [120.19, 30.26],
  '福建': [119.3, 26.08],
  '广东': [113.23, 23.16],
  '江西': [115.89, 28.68],
  '云南': [102.73, 25.04],
  '贵州': [106.71, 26.57],
  '甘肃': [103.73, 36.03],
  '青海': [101.74, 36.56],
  '海南': [110.35, 20.02],
  '四川': [104.06, 30.67],
  '美国':[-77.02,38.53]
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

function renderItem(params, api) {
  var coords = [
    [116.7, 39.53],
    [103.73, 36.03],
    [112.91, 27.87],
    [120.65, 28.01],
    [119.57, 39.95]
  ];
  var points = [];
  for (var i = 0; i < coords.length; i++) {
    points.push(api.coord(coords[i]));
  }
  // var color = api.visual('color');
  var color = 'transparent';
  return {
    type: 'polygon',
    shape: {
      points: echarts.graphic.clipPointsByRect(points, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      })
    },
    style: api.style({
      fill: color,
      stroke: echarts.color.lift(color)
    })
  };
}
option = {
  //backgroundColor: 'f00',
  title: {
    text: '',
    // subtext: 'data from PM25.in',
    // sublink: 'http://www.pm25.in',
    left: 'left',
    textStyle: {
      fontSize:14,
      fontWeight:100,
      color: '#fff'
    }
  },
  legend: {
    data: ['平台接入工业设备覆盖区域数量', '平台企业用户覆盖区域数量'],
    align: 'left',
    left: 10,
    top:30,
    textStyle:{
      color:'#fff'
    }
  },
  tooltip: {
    formatter:(a,b,c)=>{
      if(a.seriesName == "平台接入工业设备覆盖区域数量"){
         return "<span style='position:relative;top:4px' class='radiusItem'></span>"+a.name+":"+a.data.value["2"];
      }else{
        return "<span style='position:relative;top:4px' class='radiusItemTwo'></span>"+a.name+":"+a.data.value["2"];
      }
      
     
    }
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
    backgroundColor:"#f00",
    mapStyle: {
      styleJson: [
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": {
            "color": "#031528"
          }
        },
        {
          "featureType": "land",
          "elementType": "all",
          "stylers": {
            "color": "#020204"
          }
        },
        {
          "featureType": "boundary",
          "elementType": "geometry",
          "stylers": {
            "color": "#4B5F71"
          }
        },
        {
          "featureType": "railway",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
            "color": "#020204"
          }
        },
        {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#4B5F71",
            "lightness": 1
          }
        },
        {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry",
          "stylers": {
            "color": "#020204"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#4B5F71"
          }
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "green",
          "elementType": "all",
          "stylers": {
            "color": "#4B5F71",
            "visibility": "off"
          }
        },
        {
          "featureType": "subway",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "manmade",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "local",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "labels",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "boundary",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#4B5F71"
          }
        },
        {
          "featureType": "building",
          "elementType": "all",
          "stylers": {
            "color": "#4B5F71"
          }
        },
        {
          "featureType": "label",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        }
      ]
    }
  },
  series: [
    {
      name: '平台接入工业设备覆盖区域数量',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(data),
      /*symbolSize: function (val) {
        return val[2] / 50000;
      },*/
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#0064FF'
        }
      }
    },
    {
      name: '平台企业用户覆盖区域数量',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(data1),
      showEffectOn: 'emphasis',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      symbolSize: function (val) {
        return val[2] / 10;
      },
      itemStyle: {
        normal: {
          color: '#03FBFB',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 10
    }
  ]
};
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
