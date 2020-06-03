var dome = document.getElementById('number')
var myChart = echarts.init(dome);
window.onresize = myChart.resize;
var percent = 80;

function getData() {
  return [{
    value: percent,
    itemStyle: {
      normal: {
        color: '#00ddfe',
        shadowBlur: 10,
        shadowColor: '#1a3746'
      }
    }
  }, {
    value: 97 - percent,
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  }];
}

option = {
  backgroundColor: 'rgba(0,0,0,0)',
  title: {
    subtext: '',
    text: percent ,
    x: 'center',
    y: '50%',
    textStyle: {
      color: '#fff',
      fontWeight: 'bolder',
      fontSize: 14,
    },
    subtextStyle: {
      fontSize: 14,
      top: 0
    }
  },
  series: [{
    type: 'pie',
    radius: ['40%', '50%'],
    center: ['50%', '50%'],
    silent: true,
    label: {
      normal: {
        show: false,
      }
    },

    data: [{
      value: 1,
      itemStyle: {
        normal: {
          color: '#313443',
          shadowBlur: 10,
          shadowColor: '#1b1e25',
          fontSize: 14,

        }
      }
    }],

    animation: true
  },

    {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['50%', '50%'],
      silent: true,
      label: {
        normal: {
          show: false,
        }
      },

      data: [{
        value: 1,
        itemStyle: {
          normal: {
            color: '#313443',
            shadowBlur: 50,
            shadowColor: '#1b1e25'
          }
        }
      }],

      animation: false
    },

    {
      name: 'main',
      type: 'pie',
      radius: ['50%', '60%'],
      center: ['50%', '50%'],
      label: {
        normal: {
          show: false,
        }
      },
      data: getData(),

      animationEasingUpdate: 'cubicInOut',
      animationDurationUpdate: 50
    }
  ]
};
function init() {
  myChart.setOption(option, true)
}
init()
function clar() {
  setTimeout(function () {

    myChart.clear()
    parent = 80
    init()
  }, 50)
}


var time = setInterval(function () {

  if (percent >= 97) {
    percent = 80
    clar()
  } else {
    ++percent;
  }
  myChart.setOption({
    title: {
      subtext: '',
      text: percent
    },
    series: [{
      name: 'main',
      type: 'pie',
      data: getData()
    }]
  })

}, 200);