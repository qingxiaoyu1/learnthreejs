window.onload = function(){
  
var baseUrl = "http://haiyouhe.api.shanghai.cosmoplat.com" 
var dom = document.getElementById("echartsGet");
  var myChart = echarts.init(dom);
  // var app = {};
  var option = null;
  
  option = {
    color:"#f5b22f",
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      containLabel: true,
      left: '3%',
      right: '10%',
      bottom: '4%',
      top: '14%',
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: false},
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar', 'stack', 'tiled']},
        restore: {show: false},
        saveAsImage: {show: false}
      }
    },
    calculable: true,
    xAxis: [
      {
        name:"日期",
        nameTextStyle:{
          color:'rgba(255,255,255,0.6)',
        },
        color:"#f00",
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          
        },
        type: 'category',
        boundaryGap: false,
        data: ['2019.9','2019.10','2019.11','2019.12','2020.1','2020.2',],
        splitLine: {
          show: true,
          interval: 0,
          lineStyle: {
            width: 1,
            color:'#35496b',

          }
        },
      }
    ],
    yAxis: [
      { 
        name:"订单量",
        nameTextStyle:{
          color:'rgba(255,255,255,0.6)',
        },
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          // formatter:(value,a)=>{
          //   console.log(value)
          //   console.log(a)
          //   if(value){
          //     return value/1000 +"万"
          //   }else{
          //     return 0
          //   }
            
          // }
        },
        type: 'value',
        splitLine: {
          show: true,
          interval: 1,
          lineStyle: {
            width: 1,
            color:'#35496b',
          }
        },
      },
    ],
    series: [
      {
        name: '订单量',
        type: 'line',
        stack: '总量',
        smooth: false,
        //data:thisData.活跃用户比例.曲线图数据,
        data: [952,2768,4291,5336,5521,6873]
        
      }
    ]
  };

$(".leftThree .oneButton").click(function(){
  $(".leftThree .oneButton").removeClass("selectButton")
  $(this).addClass("selectButton")
  var choiceId = $(this).attr("idClick")

  if(choiceId == "1"){
    option.color = "#f5b22f"

    $(".showTabel").hide()
    $("#selectChoice").hide()
    $(".get_all").show()
    
    $.ajax({
      url:baseUrl+"/requirement/tendency",
      type:"get",
      success:function(getData){
          var showData = getData.data
          var xArray = []
          var yArray = []

          for (var i in showData) {
            if(showData[i]["month"]) {
              xArray.push(showData[i]["month"])
              
              yArray.push(showData[i]["totalWeight"])
            }
          }
          option.xAxis[0].data = xArray
          option.series[0].data = yArray
          myChart.setOption(option, true);
      }
    })
  }
  if(choiceId == "2"){
    option.color = "#4671ee"
    $("#selectChoice").show()
    $(".showTabel").hide()
    $(".get_all").show()
    var getValue = $("#selectChoice").val()
    $.ajax({
      url:baseUrl+"/requirement/category/"+getValue+"/tendency",
      type:"get",
      success:function(getData){
          var showData = getData.data
          var xArray = []
          var yArray = []

          for (var i in showData) {
            if(showData[i]["month"]) {
              xArray.push(showData[i]["month"])
              
              yArray.push(showData[i]["totalWeight"])
            }
          }
          option.xAxis[0].data = xArray
          option.series[0].data = yArray
          myChart.setOption(option, true);
      }
    })
  }
  if(choiceId == "3"){
    $("#selectChoice,.get_all").hide()
    $(".showTabel").show()
  }
})
$("#selectChoice").change(function(){
  var getValue = $("#selectChoice").val()
    $.ajax({
      url:baseUrl+"/requirement/category/"+getValue+"/tendency",
      type:"get",
      success:function(getData){
          var showData = getData.data
          var xArray = []
          var yArray = []

          for (var i in showData) {
            if(showData[i]["month"]) {
              xArray.push(showData[i]["month"])
              
              yArray.push(showData[i]["totalWeight"])
            }
          }
          option.xAxis[0].data = xArray
          option.series[0].data = yArray
          myChart.setOption(option, true);
      }
    })
})
$(".leftThree .oneButton").eq(0).click()
}