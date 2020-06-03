
var reloadWindow = ''
window.onresize = function(){
  location.reload()
}
// 累计发货量
function format (num) {  
  var reg=/\d{1,3}(?=(\d{3})+$)/g;   
  return (num + '').replace(reg, '$&,');  
}

var showDatas = [
  {name:"南海诸岛",value:0},
            {name: '北京', value: randomValue()},
            {name: '天津', value: randomValue()},
            {name: '上海', value: 24000},
            {name: '重庆', value: randomValue()},
            {name: '河北', value: randomValue()},
            {name: '河南', value: randomValue()},
            {name: '云南', value: randomValue()},
            {name: '辽宁', value: randomValue()},
            {name: '黑龙江', value: randomValue()},
            {name: '湖南', value: randomValue()},
            {name: '安徽', value: randomValue()},
            {name: '山东', value: 28000},
            {name: '新疆', value: 10},
            {name: '江苏', value: randomValue()},
            {name: '浙江', value: randomValue()},
            {name: '江西', value: randomValue()},
            {name: '湖北', value: randomValue()},
            {name: '广西', value: randomValue()},
            {name: '甘肃', value: randomValue()},
            {name: '山西', value: randomValue()},
            {name: '内蒙古', value:100},
            {name: '陕西', value: randomValue()},
            {name: '吉林', value: randomValue()},
            {name: '福建', value: randomValue()},
            {name: '贵州', value: randomValue()},
            {name: '广东', value: randomValue()},
            {name: '青海', value: 120},
            {name: '西藏', value: 10},
            {name: '四川', value: randomValue()},
            {name: '宁夏', value: 100},
            {name: '海南', value: randomValue()},
            {name: '台湾', value: randomValue()},
            {name: '香港', value: randomValue()},
            {name: '澳门', value: randomValue()}
]
function randomValue() {
  return Math.round(Math.random()*10000);
}
//部分报错是因为其他地方没有写值，获取不到相关值
var markPointData = [{
  "name": "齐齐哈尔",
  "coord": [
      123.97, 47.33
  ],
  "runConut": '537',
  "num": '234'
},
{
  "name": "青岛",
  "coord": [
      120.33, 36.07
  ],
  "runConut": '120',
  "num": '196'
},
{
  "name": "温州",
  "coord": [
      120.65, 28.01
  ],
  "runConut": '50',
  "num": '120'
}
];

// 第一个地图

    // var data = result.data
    // var showDatas = []
    // for(var i in data){
    //   var name = data[i].province.replace("市","").replace("省","")
    //   showDatas.push({
    //       name:name,
    //       value:data[i].totalGoodsNumber
    //   })
    // }
    var geoCoordMap = {};
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
              res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
              });
          }
      }
    }
    var dom = document.getElementById("chinaMap");
    var myChart = echarts.init(dom);
    var option = {
        title : {
          show: false,
          y: '10%',
          x: 'center',
          textStyle: {
            color: '#46D3FA',
            fontSize: '16'
          }
          
        },
        label:{
          show:true
        },
        tooltip : {
          trigger: 'item',
          // backgroundColor: 'rgba(255,255,255,0.7)',
          // borderColor: '#37a2da',
          // borderWidth: 1.5,
          textStyle: {
            color: '#fff',

          },
          formatter: function(params) {
            return `<div style=""><p style="width:100%;text-align: center;font-size:16px;line-height:2;">${params.name || ""}</p>
                      <div style="overflow:hidden;font-size:14px;width:140px;border-top:1px solid rgba(255,255,255,0.25);padding:0 10px;">
                            <span style="float:left">企业总数</span><span style="float:right">${params.value || 0}</span></br>
                            <span style="float:left">总需求量</span><span style="float:right">${params.value || 0}</span></br>
                            <span style="float:left">总库存量</span><span style="float:right">${params.value || 0}</span></br>
                            <span style="float:left">总缺口量</span><span style="float:right">${params.value || 0}</span></br>
                            <span style="float:left">物资分类</span><span style="float:right">3</span>
                      </div>
                      </div>`

          }
        },
        grid: {
          x: 0,
          x2: 50,
          y: 0,
          y2: 20
        },
        visualMap: {
          type: 'piecewise',
          splitNumber: 3,
          pieces: [{
            max: 100,
            label: '100以下',
            color: '#B6EAED'
          }, {
            max: 1000,
            min: 100,
            label: '100-1000',
            color: '#57BFE4'
          }, {
            max: 5000,
            min: 1000,
            label: '1000-5000',
            color: '#2884E7'
          }, {
            max: 20000,
            min: 5000,
            label: '5000-20000',
            color: '#1E6ECD'
          }, {

            min: 20001,
            label: '20000以上',
            color: '#111AE0'
          }],
          textStyle: {
            color: '#fff'
          },
          hoverLink: {
            color: "rgba(0,0,0,0)"
          },

          left: '5%',
          bottom: '5%',
          calculable: false,
          show: true,
          seriesIndex: 0,
        },
        // geo: {
        //   map: 'china',
        //   layoutCenter: ['50%', '50%'],
        //   layoutSize: '115%',
        //   label: {
        //       normal: {
        //           show: false
        //       },
        //       emphasis: {
        //           show: false,
        //       }
        //   },
        //   roam: false,//地图设置不可拖拽，固定的
        //   itemStyle: {
        //       normal: {
        //           areaColor: 'rgba(0,0,0, 0.2)',
        //           borderWidth: 0,
        //           shadowColor: 'rgba(0,0,0, 0.2)',
        //           shadowBlur: 100
        //       }
        //   }
        // },
        series : [
            {
                name: '全国累计发货量',
                type: 'map',
                mapType: 'china',
                layoutCenter: ['50%', '50%'],
                layoutSize: '100%',
                itemStyle: {
                  normal:{
                    label:{show:true},
                    areaColor: '#bcc9d9'
                  },
                  emphasis: {
                    label:{show:false},
                    show: false,
                    areaColor: null,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    borderColor: '#fff', //区域边框颜色
                    borderWidth: 1
                  },
                  areaColor: 'rgba(0,0,0,0)'
                },
                data: showDatas,
                markPoint : { //图表标注。
                  "symbol": 'path://M512 39.384615l169.353846 295.384615 342.646154 63.015385-240.246154 248.123077L827.076923 984.615385l-315.076923-145.723077L196.923077 984.615385l43.323077-334.769231L0 401.723077l342.646154-63.015385L512 39.384615',
                  "symbolSize": 14,//图形大小
                  "label": {
                      "normal": {
                          "show": true,
                      },
                      "emphasis": {
                          show: true,
                      }
                  },
                  "itemStyle": {
                      "normal": {
                          "color": 'rgba(72,150,128,1)'
                      }
                  },
                  "data": markPointData
              }
            }
        ],
        animation: false
    };
    // total = format(total)
// 刷新页面中间区域的方法
function loadCenter(showid){
  $("#leiji").html("125,5<span>件</span>")
  $("#shishi").html("125,365<span>件</span>")
  myChart.setOption(option, true);
}

//定义全国省份的数组
var provinces = ['shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian','jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang','shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan'];
 
var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];

myChart.on('click', function (param) {
  // alert(param.name);
  //遍历取到provincesText 中的下标  去拿到对应的省js
  
  if (param.name) {
    var numberIndex = provincesText.indexOf(param.name)
    option.series[0].mapType = param.name
    myChart.setOption(option, true);
  }else{
    option.series[0].mapType ="china"
    myChart.setOption(option, true);
  }
});


//展示对应的省
    // showprovince（province[i],provinceText[i])改成这样，function（pName,Chinese_）{}
  function  showProvince(pName, Chinese_){
    //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
    loadBdScript('$'+pName+'JS','js/province/'+pName+'.js',function(){
        //初始化echarts:具体代码参考上面初始化中国地图即可，这里不再重复。
        initEcharts(Chinese_) ;
    });
  }
  //加载对应的JS
  function loadBdScript(scriptId, url, callback) {
      var script = document.createElement("script")
      script.type = "text/javascript";
      if (script.readyState){  //IE
          script.onreadystatechange = function(){
              if (script.readyState == "loaded" || script.readyState == "complete"){
                  script.onreadystatechange = null;
                  callback();
              }
          };
      } else {  //Others
          script.onload = function(){
              callback();
          };
      }
      script.src = url;
      script.id = scriptId;
      document.getElementsByTagName("head")[0].appendChild(script);
  }



Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "H+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
var time = new Date().Format("yyyy-MM-dd HH:mm:ss");
$(".boxTime").text(time)
setInterval(function(){
  var time = new Date().Format("yyyy-MM-dd HH:mm:ss");
  $(".boxTime").text(time)
},1000)


// 地图按钮切换
$(".centen_data .eachButtons").click(function(){
  $(".centen_data .eachButtons").removeClass("select")
  $(this).addClass("select")
})