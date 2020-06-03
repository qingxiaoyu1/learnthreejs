// 右边第一个
var rightChart1 = document.getElementById("rightChart1");
var rightInit = echarts.init(rightChart1);
var option1 = {
    calculable : true,
    tooltip : {
        trigger: 'axis'
    },
    legend: {
    x: 'right',
    textStyle: {color: 'rgba(255,255,255,0.6)'},
    data:[
        {name:'销售额',icon: 'circle',},
        {name:'平台订单量',icon: 'circle',}
    ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
        type : 'category',
        boundaryGap: false,
        data : ['12.1','12.2','12.3','12.4','12.5','12.6','12.7'],
        axisLine: {
            show: true,
            lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 1,
            opacity: 1
            }
        }
        }
    ],
    yAxis :[
    {
        type : 'value',
        nameGap: 10,
        axisTick: {
        show: false //是否显示坐标轴刻度。
        },
        axisLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 0,
            opacity: 1
        }
        },
        splitLine: {
        show: true,
        interval: 1,
        lineStyle: {
            width: 1,
            color:'rgba(255,255,255,0.06)'
        }
        },
        axisLabel: {
        textStyle:{
            color:"rgba(255,255,255,0.5)", //刻度颜色
            fontSize:12  //刻度大小
        }
        }
    }
    ],
    series : [
    {
            name:'销售额',
            type:'line',
            smooth:true,
            color: '#e2c04d',
            itemStyle: {
            normal: {
                areaStyle:{
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(233,197,78,0.35)'
                    }, {
                    offset: 0.1,
                    color: 'rgba(233,197,78,0.32)'
                    }, {
                    offset: 1,
                    color: 'rgba(233,197,78,0)'
                    }], false)

                }
            }
            },
            data:[340, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'平台订单量',
            type:'line',
            color: '#46D3FA',
            smooth:true,
            itemStyle: {
            normal: {
                areaStyle:{
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(70,211,250,0.35)'
                    }, {
                    offset: 0.1,
                    color: 'rgba(70,211,250,0.32)'
                    }, {
                    offset: 1,
                    color: 'rgba(70,211,250,0)'
                    }], false)

                }
            }
            },
            data:[455, 344, 562, 345, 255, 387, 456]
        }
    ]
};


// 右边第二个
var rightChart2 = document.getElementById("rightChart2");
var rightInit2 = echarts.init(rightChart2);
var option2 = {
    calculable : true,
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '5%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
        type : 'category',
        boundaryGap: false,
        data : ['12.1','12.2','12.3','12.4','12.5','12.6','12.7'],
        axisLine: {
            show: true,
            lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 1,
            opacity: 1
            }
        }
        }
    ],
    yAxis :[
    {
        type : 'value',
        nameGap: 10,
        axisTick: {
        show: false //是否显示坐标轴刻度。
        },
        axisLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 0,
            opacity: 1
        }
        },
        splitLine: {
        show: true,
        interval: 1,
        lineStyle: {
            width: 1,
            color:'rgba(255,255,255,0.06)'
        }
        },
        axisLabel: {
        textStyle:{
            color:"rgba(255,255,255,0.5)", //刻度颜色
            fontSize:12  //刻度大小
        }
        }
    }
    ],
    series : [
        {
        name:'缺口',
        type:'line',
        color: '#46D3FA',
        smooth:true,
        itemStyle: {
            normal: {
            areaStyle:{
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(70,211,250,0.35)'
                }, {
                    offset: 0.1,
                    color: 'rgba(70,211,250,0.32)'
                }, {
                    offset: 1,
                    color: 'rgba(70,211,250,0)'
                }], false)

            }
            }
        },
        data:[455, 344, 562, 345, 255, 387, 456]
    }
    ]
};



// 右边第三个
var rightChart3 = document.getElementById("rightChart3");
var rightInit3 = echarts.init(rightChart3);
var option3 = {
calculable : true,
tooltip : {
    trigger: 'axis'
},
legend: {
    x: 'right',
    textStyle: {color: 'rgba(255,255,255,0.6)'},
    data:[
    {name:'需求',icon: 'circle',},
    {name:'缺口',icon: 'circle',}
    ]
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true
},
calculable : true,
xAxis : [
    {
        type : 'category',
        boundaryGap: false,
        data : ['12.1','12.2','12.3','12.4','12.5','12.6','12.7'],
        axisLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 1,
            opacity: 1
        }
        }
    }
],
yAxis :[
    {
    type : 'value',
    nameGap: 10,
    axisTick: {
        show: false //是否显示坐标轴刻度。
    },
    axisLine: {
        show: true,
        lineStyle: {
        color: 'rgba(255,255,255,0.5)',
        width: 0,
        opacity: 1
        }
    },
    splitLine: {
        show: true,
        interval: 1,
        lineStyle: {
        width: 1,
        color:'rgba(255,255,255,0.06)'
        }
    },
    axisLabel: {
        textStyle:{
        color:"rgba(255,255,255,0.5)", //刻度颜色
        fontSize:12  //刻度大小
        }
    }
    }
],
series : [
    {
        name:'需求',
        type:'line',
        smooth:true,
        color: '#e67534',
        itemStyle: {
            normal: {
            areaStyle:{
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,125,51,0.35)'
                }, {
                    offset: 0.1,
                    color: 'rgba(255,125,51,0.32)'
                }, {
                    offset: 1,
                    color: 'rgba(255,125,51,0)'
                }], false)

            }
            }
        },
        data:[340, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'缺口',
        type:'line',
        color: '#46D3FA',
        smooth:true,
        itemStyle: {
            normal: {
            areaStyle:{
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(70,211,250,0.35)'
                }, {
                    offset: 0.1,
                    color: 'rgba(70,211,250,0.32)'
                }, {
                    offset: 1,
                    color: 'rgba(70,211,250,0)'
                }], false)

            }
            }
        },
        data:[455, 344, 562, 345, 255, 387, 456]
    }
]
};




// 地图按钮切换
$(".bottom_data .eachButtons").click(function(){
$(".bottom_data .eachButtons").removeClass("select")
$(this).addClass("select")
})
function loadRight(showId){
    rightInit.setOption(option1, true);
    rightInit2.setOption(option2, true);
    rightInit3.setOption(option3, true);
}
