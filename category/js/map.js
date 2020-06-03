var dom = document.getElementById("map");

var MapHeight =  parseInt($("html").height())-100;

$(dom).css({"height":MapHeight})
var myChart = echarts.init(dom);
var app = {};
var jsonData = localStorage.getItem('jsonData');
var allData = JSON.parse(jsonData);


var categorys = allData["生态圈"]["B端用户"]["服务企业分布"]
var categorys2 =   allData["生态圈"]["C端用户"]["交互用户分布"]
var categorys3 =   allData["平台能力-物联"]["总接入设备数"]["设备分布"]


option = null;
var data = [],data2 =[],data3 =[];
function mapCategory(categorys){
  var newData = []
  for (var i = 0; i < categorys.length; i++) {
    var item = {};
    item.value = categorys[i].value;
    item.name = categorys[i].key;
    newData.push(item);
  }
  return newData;
}
data = mapCategory(categorys)
data2 = mapCategory(categorys2)
//data3 = mapCategory(categorys3)
categorys3= [
  {key:"山东",value:"2318999"},
  {key:"河南",value:"1922801"},
  {key:"江苏",value:"2287641"},
  {key:"广东",value:"1503901"},
  {key:"河北",value:"1469689"},
  {key:"四川",value:"1472761"},
  {key:"辽宁",value:"999443"},
  {key:"湖北",value:"841554"},
  {key:"湖南",value:"881232"},
  {key:"浙江",value:"922924"},
  {key:"福建",value:"814708"},
  {key:"安徽",value:"863291"},
  {key:"北京",value:"756427"},
  {key:"黑龙江",value:"651432"},
  {key:"山西",value:"711269"},
  {key:"陕西",value:"683675"},
  {key:"广西",value:"628993"},
  {key:"江西",value:"660219"},
  {key:"重庆",value:"774688"},
  {key:"上海",value:"656253"},
  {key:"贵州",value:"532220"},
  {key:"云南",value:"478201"},
  {key:"内蒙古",value:"436105"},
  {key:"吉林",value:"467234"},
  {key:"新疆",value:"340830"},
  {key:"青海",value:"235365"},
  {key:"西藏",value:"134602"},
  {key:"甘肃",value:"401410"},
  {key:"宁夏",value:"304954"},
  {key:"天津",value:"437494"},
  {key:"海南",value:"395353"},
  /*{key:"台湾",value:"0"},
  {key:"香港",value:"0"},
  {key:"澳门",value:"0"},*/
]
data3 = mapCategory(categorys3)

var geoCoordMap = {
  '北京': [116.46, 39.92],
  '天津': [117.2, 39.13],
  '上海': [121.48, 31.22],
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
  '重庆':[106.32,29.894],
  '香港':[114.15,22.275],
  '澳门':[113.417,22.198],
  '台湾':[121.36,25.25],
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
    [116.7, 23],
    [103.73, 13],
    [112.91, 17],
    [120.65, 11],
    [119.57, 15],
    [116.7, 13],
    [103.73, 14],
    [112.91, 7],
    [120.65, 21],
    [119.57, 195]
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
  legend: {
    data: ['交互用户','服务企业', 'IOT设备'],
    align: 'left',
    left: 10,
    top:30,
    textStyle:{
      color:'#fff'
    }
  },
   tooltip: {
    formatter:(a,b,c)=>{

      if(a.seriesName =="服务企业"){
        return "<span style='position:relative;top:4px;background-color:orange;' class='radiusItemTwo'></span>"+a.name+":"+a.value[2]; 
      }else if(a.seriesName =="交互用户"){
        return "<span style='position:relative;top:4px;' class='radiusItemTwo'></span>"+a.name+":"+a.value[2]; 
      }else{
        return "<span style='position:relative;top:4px;background-color:yellow;' class='radiusItemTwo'></span>"+a.name+":"+a.value[2]; 
      }
      
    }
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
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
      name: '服务企业',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(data),
      symbolSize: function (val) {
        if(val[2]/200<14){
          return 14
        }else if(val[2]/200>45){
          return 45
        }else{
          return val[2]/200;
        }
        
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
        scale:"1.5"
      },
      hoverAnimation: true,
      label: {
        normal: { 
          formatter: '{b}',
          position: 'right',
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: 'orange',
          
        }
      },
      zlevel: 1
    },
    {
      name: '交互用户',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(data2),
      symbolSize: function (val) {
      	if(val[2]/500000<14){
          return 14
        }else if(val[2]/500000>43){

          return 43
        }else{
          return val[2]/500000;
        }
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
        scale:"1.5"
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        }
      },
      itemStyle: {
        normal: {
          
          color: '#03fbfb',
        }
      },
      zlevel: 1
    },
    

  ]
};
/*setInterval(function(){
  myChart.setOption(option, true);
},2000)*/
myChart.on('click', function(params){
   
    //['服务企业', '交互用户','IOT设备'],
    if(params.seriesName == "服务企业"){
      window.open("https://cuba.cosmoplat.com/#/channel", "_blank");
    }else if(params.seriesName == "交互用户"){
      window.open("https://u.haier.net", "_blank");
    }else if(params.seriesName == "IOT设备"){
      window.open("https://cuba.cosmoplat.com/#/channel", "_blank");
    }
});//点击事件，此事件还可以用到柱状图等其他地图
$(".mapContent img").click(function(){
  myChart.setOption(option, true);
})
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
