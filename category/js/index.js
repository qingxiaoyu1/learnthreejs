// $(function () {
//   var imgNormalWidth = 227
//   var imgNormalHeight = 200
//   var deg = 0
//   var factory = ['锐信合成革', '中慎合成革', '浩辰皮革', '永盛皮革', '宏正利合成革', '华特合成革', '乔盛合成革', '展宏化工', '腾浩化工', '海川化工', '吉兴新材料', '瑞晟新材料', '正原生物医药', '东诚生物医药', '东立生物医药', '成杰生物医药', '晟泰生物医药', '美杰生物医药', '谐和食品', '华大利食品'];
//   //左边距
//   var posLeft = [1680, 2000, 2210, 2510, 2520, 2470, 3050, 2980, 2987, 2887, 2880, 2980, 1720, 1950, 1450, 1230, 1100, 1300, 1150, 1070];
//   //上边距
//   var posTop = [2549, 2349, 1300, 1420, 2420, 2560, 2270, 2420, 1920, 2020, 1249, 1409, 1870, 1250, 1225, 1405, 2449, 2699, 1700, 2150];
//   //宽度
//   var posWidth = [320, 130, 420, 280, 180, 160, 180, 140, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];
//   //高度
//   var posHeight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   //宽度比例
//   var biliW = $('body').width() / 4431;
//   //高度比例
//   var biliH = $('body').height() / 2574;
//   //图片定位
//   var picLeft = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   var picBottom = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   //图片宽
//   var picWidth = [320, 130, 420, 280, 180, 160, 180, 140, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320];
//   //缩放比例
//   // var tooltipScale = [[1, 1], [0.6, 0.6], [0.98, 0.98], [1, 1], [0.8, 0.8], [0.7, 0.7], [0.75, 0.75], [0.65, 0.65]];
//   var tooltipScale = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]];
//   //图片
//   var tipData = [
//     [161, 47, 245, 88],  //锐信合成革
//     [115, 41, '故障', 77], //中慎合成革
//     [87, 35, 177, 82],//浩辰皮革
//     [49, 29, 153, 76],//永盛皮革
//     [189, 27, 169, 73],//宏正利合成革
//     [90, 33, 143, 70],//华特合成革
//     [82, 38, 132, 67],//乔盛合成革
//     [126, 79, 121, '故障'],//展宏化工
//     [92, 131, 110, 65],//腾浩化工
//     [58, 122, 99, 73],//海川化工
//     [191, 35, 88, 170],//吉兴新材料
//     [122, 29, 77, 67],//瑞晟新材料
//     [63, 32, 82, 64],//正原生物医药
//     [79, 35, 76, 35],//东诚生物医药
//     [131, 38, 273, 36],//东立生物医药
//     [41, 32, 70, 32],//成杰生物医药
//     [35, 44, 67, 52],//晟泰生物医药
//     [29, 37, 64, 49],//美杰生物医药
//     [27, 0, 123, 26],//谐和食品
//     [47, 0, 112, 32],//华大利食品
//     [33, 0, 141, 19],//利丰食品
//     [38, 0, 115, 34],//正阳食品
//     [49, 0, 89, 35]//加能食品
//   ];
//   var tipDataColor = [
//     ['red', 'green', 'red', 'orange'],  //锐信合成革
//     ['orange', 'green', 'error', 'yellow'], //中慎合成革
//     ['yellow', 'green', 'orange', 'orange'],//浩辰皮革
//     ['green', 'green', 'orange', 'yellow'],//永盛皮革
//     ['red', 'green', 'orange', 'yellow'],//宏正利合成革
//     ['yellow', 'green', 'yellow', 'yellow'],//华特合成革
//     ['yellow', 'green', 'yellow', 'yellow'],//乔盛合成革
//     ['orange', 'yellow', 'yellow', 'error'],//展宏化工
//     ['yellow', 'orange', 'yellow', 'yellow'],//腾浩化工
//     ['yellow', 'orange', 'green', 'yellow'],//海川化工
//     ['red', 'green', 'green', 'red',],//吉兴新材料
//     ['orange', 'green', 'green', 'yellow'],//瑞晟新材料
//     ['yellow', 'green', 'green', 'yellow'],//正原生物医药
//     ['yellow', 'green', 'green', 'green'],//东诚生物医药
//     ['orange', 'green', 'red', 'green'],//东立生物医药
//     ['green', 'green', 'green', 'green'],//成杰生物医药
//     ['green', 'green', 'green', 'yellow'],//晟泰生物医药
//     ['green', 'green', 'green', 'yellow'],//美杰生物医药
//     ['green', 'yellow', 'null', 'green'],//谐和食品
//     ['green', 'yellow', 'null', 'green'],//华大利食品
//     ['green', 'yellow', 'null', 'green'],//利丰食品
//     ['green', 'yellow', 'null', 'green'],//正阳食品
//     ['green', 'green', 'null', 'green']//加能食品
//   ];
//   var imgArr = [
//     ['img/sewage-white.png', 'img/water-warning-img.png'],
//     ['img/atmosphere-normal-img.png', 'img/atmosphere-warning-img.png'],
//     ['img/gas-white.png', 'img/hazardousWaste-warning-img.png']
//   ];
//   var a = 1;
//   var err1;
//   var err2;
//   for (var i = 0; i < posLeft.length; i++) {
//     var html = `
//       <div class="gif-img">
//         <div class="tooltip-box">
//           <div class="tooltipss">
//             <div class="tooltip-title">
//               <p>${factory[i]}</p>
//             </div>
//             <table>
//               <tr>
//                 <td>
//                   <div class="img">
//                     <img src="${imgArr[2][0]}" alt="" />
//                   </div>
//                   <p>气体</p>
//                 </td>
//                 <td>
//                   <div>
//                     <span>TVOC：</span>
//                     <b class="tip-${tipDataColor[i][0]}">${tipData[i][0]}</b><span>mg/m³</span><br>
//                     <span>NOx：</span><b class="tip-${tipDataColor[i][1]}">${tipData[i][1]}</b><span>μg/m³</span>
//                    </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div class="img">
//                     <img src="${imgArr[0][0]}" alt="" />
//                   </div>
//                    <p>污水</p>
//                 </td>
//
//                 <td>
//                   <div>
//                     <span>COD：</span>
//                     <b class="tip-${tipDataColor[i][2]}">${tipData[i][2]}</b><span>mg/L</span><br>
//                     <span>氨氮：</span>
//                     <b class="tip-${tipDataColor[i][3]}">${tipData[i][3]}</b><span>mg/L</span>
//                    </div>
//                 </td>
//               </tr>
//             </table>
//           </div>
//         </div>
//         <!--<img src="img/timg.png" alt="" />-->
//       </div>`;
//
//     $('.gif-box').append(html);
//     $('.gif-img').eq(i).css({
//       'left': posLeft[i] * biliW,
//       'top': posTop[i] * biliH,
//       'width': posWidth[i] * biliW,
//       'height': posHeight[i] * biliH
//     })
//     $('.gif-img').eq(i).children('img').css({
//       'left': picLeft[i] * biliW,
//       'bottom': picBottom[i] * biliH,
//       'width': picWidth[i] * biliW
//     })
//     $('.gif-img').eq(i).find('.tooltip-box').css({
//       'left': '50%',
//       'transform': 'translateX(-50%) scale(' + tooltipScale[i] + ')',
//       'bottom': picBottom[i] * biliH + (picWidth[i] / imgNormalWidth) * imgNormalHeight * biliH,
//       'width': 381 * biliW,
//       // 'height': 200 * biliH
//     })
//   }
//   // setInterval(function () {
//   //   for (var i = 0; i < $('.gif-img').length; i++) {
//   //     var tooltipImg = $('.gif-img').eq(i).find('.tooltip-content').children('div')
//   //     for (var j = 0; j < tooltipImg.length; j++) {
//   //       var divIndex = $('.gif-img').eq(i).find('.tooltip-content').children('div').eq(j).attr('divIndex')
//   //       if (divIndex != 1) {
//   //         var randomImg = Math.floor(Math.random() * imgArr[j].length)
//   //         $('.gif-img').eq(i).find('.tooltip-content').children('div').eq(j).find('img').attr('src', imgArr[divIndex][randomImg])
//   //       }
//   //     }
//   //   }
//   // }, 1000)
//
//   //蓝色tip动画切换
//   // $('.gif-img').hide();
//   // setInterval(function () {
//   //   if (a == 1) {
//   //     a = 2;
//   //     $('.gif-img:nth-of-type(odd)').hide();
//   //     $('.gif-img:nth-of-type(even)').show();
//   //   } else {
//   //     a = 1;
//   //     $('.gif-img:nth-of-type(odd)').show();
//   //     $('.gif-img:nth-of-type(even)').hide();
//   //   }
//   // }, 5000);
//   // $('.tip-error').next().hide();
//   // setInterval(function () {
//   //   time();
//   // }, 1000);
//   // function time() {
//   //   var vWeek, vWeek_s, vDay;
//   //   vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
//   //   var date = new Date();
//   //   year = date.getFullYear();
//   //   month = date.getMonth() + 1;
//   //   day = date.getDate();
//   //   hours = date.getHours();
//   //   if (hours < 10) {
//   //     hours = '0' + hours
//   //   } else {
//   //     hours = hours
//   //   }
//   //
//   //
//   //   minutes = date.getMinutes();
//   //   if (minutes < 10) {
//   //     minutes = '0' + minutes
//   //   } else {
//   //     minutes = minutes;
//   //   }
//   //   seconds = date.getSeconds();
//   //   if (seconds < 10) {
//   //     seconds = '0' + seconds
//   //   } else {
//   //     seconds = seconds;
//   //   }
//   //   vWeek_s = date.getDay();
//   //   document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
//   //
//   // };
// });
var domNumber = document.getElementById('number');
var domBrokenline = document.getElementById('brokenline');
var domColumn = document.getElementById('column');
var domMap = document.getElementById('map');
var charts = [];
var mychart = echarts.init(domMap)
var app = {};
var data = [
  {name: '海门', value: 9},
  {name: '鄂尔多斯', value: 12},
  {name: '招远', value: 12},
  {name: '舟山', value: 12},
  {name: '齐齐哈尔', value: 14},
  {name: '盐城', value: 15},
  {name: '赤峰', value: 16},
  {name: '青岛', value: 18},
  {name: '乳山', value: 18},
  {name: '金昌', value: 19},
  {name: '泉州', value: 21},
  {name: '莱西', value: 21},
  {name: '日照', value: 21},
  {name: '胶南', value: 22},
  {name: '南通', value: 23},
  {name: '拉萨', value: 24},
  {name: '云浮', value: 24},
  {name: '梅州', value: 25},
  {name: '文登', value: 25},
  {name: '上海', value: 25},
  {name: '攀枝花', value: 25},
  {name: '威海', value: 25},
  {name: '承德', value: 25},
  {name: '厦门', value: 26},
  {name: '汕尾', value: 26},
  {name: '潮州', value: 26},
  {name: '丹东', value: 27},
  {name: '太仓', value: 27},
  {name: '曲靖', value: 27},
  {name: '烟台', value: 28},
  {name: '福州', value: 29},
  {name: '瓦房店', value: 30},
  {name: '即墨', value: 30},
  {name: '抚顺', value: 31},
  {name: '玉溪', value: 31},
  {name: '张家口', value: 31},
  {name: '阳泉', value: 31},
  {name: '莱州', value: 32},
  {name: '湖州', value: 32},
  {name: '汕头', value: 32},
  {name: '昆山', value: 33},
  {name: '宁波', value: 33},
  {name: '湛江', value: 33},
  {name: '揭阳', value: 34},
  {name: '荣成', value: 34},
  {name: '连云港', value: 35},
  {name: '葫芦岛', value: 35},
  {name: '常熟', value: 36},
  {name: '东莞', value: 36},
  {name: '河源', value: 36},
  {name: '淮安', value: 36},
  {name: '泰州', value: 36},
  {name: '南宁', value: 37},
  {name: '营口', value: 37},
  {name: '惠州', value: 37},
  {name: '江阴', value: 37},
  {name: '蓬莱', value: 37},
  {name: '韶关', value: 38},
  {name: '嘉峪关', value: 38},
  {name: '广州', value: 38},
  {name: '延安', value: 38},
  {name: '太原', value: 39},
  {name: '清远', value: 39},
  {name: '中山', value: 39},
  {name: '昆明', value: 39},
  {name: '寿光', value: 40},
  {name: '盘锦', value: 40},
  {name: '长治', value: 41},
  {name: '深圳', value: 41},
  {name: '珠海', value: 42},
  {name: '宿迁', value: 43},
  {name: '咸阳', value: 43},
  {name: '铜川', value: 44},
  {name: '平度', value: 44},
  {name: '佛山', value: 44},
  {name: '海口', value: 44},
  {name: '江门', value: 45},
  {name: '章丘', value: 45},
  {name: '肇庆', value: 46},
  {name: '大连', value: 47},
  {name: '临汾', value: 47},
  {name: '吴江', value: 47},
  {name: '石嘴山', value: 49},
  {name: '沈阳', value: 50},
  {name: '苏州', value: 50},
  {name: '茂名', value: 50},
  {name: '嘉兴', value: 51},
  {name: '长春', value: 51},
  {name: '胶州', value: 52},
  {name: '银川', value: 52},
  {name: '张家港', value: 52},
  {name: '三门峡', value: 53},
  {name: '锦州', value: 54},
  {name: '南昌', value: 54},
  {name: '柳州', value: 54},
  {name: '三亚', value: 54},
  {name: '自贡', value: 56},
  {name: '吉林', value: 56},
  {name: '阳江', value: 57},
  {name: '泸州', value: 57},
  {name: '西宁', value: 57},
  {name: '宜宾', value: 58},
  {name: '呼和浩特', value: 58},
  {name: '成都', value: 58},
  {name: '大同', value: 58},
  {name: '镇江', value: 59},
  {name: '桂林', value: 59},
  {name: '张家界', value: 59},
  {name: '宜兴', value: 59},
  {name: '北海', value: 60},
  {name: '西安', value: 61},
  {name: '金坛', value: 62},
  {name: '东营', value: 62},
  {name: '牡丹江', value: 63},
  {name: '遵义', value: 63},
  {name: '绍兴', value: 63},
  {name: '扬州', value: 64},
  {name: '常州', value: 64},
  {name: '潍坊', value: 65},
  {name: '重庆', value: 66},
  {name: '台州', value: 67},
  {name: '南京', value: 67},
  {name: '滨州', value: 70},
  {name: '贵阳', value: 71},
  {name: '无锡', value: 71},
  {name: '本溪', value: 71},
  {name: '克拉玛依', value: 72},
  {name: '渭南', value: 72},
  {name: '马鞍山', value: 72},
  {name: '宝鸡', value: 72},
  {name: '焦作', value: 75},
  {name: '句容', value: 75},
  {name: '北京', value: 79},
  {name: '徐州', value: 79},
  {name: '衡水', value: 80},
  {name: '包头', value: 80},
  {name: '绵阳', value: 80},
  {name: '乌鲁木齐', value: 84},
  {name: '枣庄', value: 84},
  {name: '杭州', value: 84},
  {name: '淄博', value: 85},
  {name: '鞍山', value: 86},
  {name: '溧阳', value: 86},
  {name: '库尔勒', value: 86},
  {name: '安阳', value: 90},
  {name: '开封', value: 90},
  {name: '济南', value: 92},
  {name: '德阳', value: 93},
  {name: '温州', value: 95},
  {name: '九江', value: 96},
  {name: '邯郸', value: 98},
  {name: '临安', value: 99},
  {name: '兰州', value: 99},
  {name: '沧州', value: 100},
  {name: '临沂', value: 103},
  {name: '南充', value: 104},
  {name: '天津', value: 105},
  {name: '富阳', value: 106},
  {name: '泰安', value: 112},
  {name: '诸暨', value: 112},
  {name: '郑州', value: 113},
  {name: '哈尔滨', value: 114},
  {name: '聊城', value: 116},
  {name: '芜湖', value: 117},
  {name: '唐山', value: 119},
  {name: '平顶山', value: 119},
  {name: '邢台', value: 119},
  {name: '德州', value: 120},
  {name: '济宁', value: 120},
  {name: '荆州', value: 127},
  {name: '宜昌', value: 130},
  {name: '义乌', value: 132},
  {name: '丽水', value: 133},
  {name: '洛阳', value: 134},
  {name: '秦皇岛', value: 136},
  {name: '株洲', value: 143},
  {name: '石家庄', value: 147},
  {name: '莱芜', value: 148},
  {name: '常德', value: 152},
  {name: '保定', value: 153},
  {name: '湘潭', value: 154},
  {name: '金华', value: 157},
  {name: '岳阳', value: 169},
  {name: '长沙', value: 175},
  {name: '衢州', value: 177},
  {name: '廊坊', value: 193},
  {name: '菏泽', value: 194},
  {name: '合肥', value: 229},
  {name: '武汉', value: 273},
  {name: '大庆', value: 279}
];
var geoCoordMap = {
  '海门': [121.15, 31.89],
  '鄂尔多斯': [109.781327, 39.608266],
  '招远': [120.38, 37.35],
  '舟山': [122.207216, 29.985295],
  '齐齐哈尔': [123.97, 47.33],
  '盐城': [120.13, 33.38],
  '赤峰': [118.87, 42.28],
  '青岛': [120.33, 36.07],
  '乳山': [121.52, 36.89],
  '金昌': [102.188043, 38.520089],
  '泉州': [118.58, 24.93],
  '莱西': [120.53, 36.86],
  '日照': [119.46, 35.42],
  '胶南': [119.97, 35.88],
  '南通': [121.05, 32.08],
  '拉萨': [91.11, 29.97],
  '云浮': [112.02, 22.93],
  '梅州': [116.1, 24.55],
  '文登': [122.05, 37.2],
  '上海': [121.48, 31.22],
  '攀枝花': [101.718637, 26.582347],
  '威海': [122.1, 37.5],
  '承德': [117.93, 40.97],
  '厦门': [118.1, 24.46],
  '汕尾': [115.375279, 22.786211],
  '潮州': [116.63, 23.68],
  '丹东': [124.37, 40.13],
  '太仓': [121.1, 31.45],
  '曲靖': [103.79, 25.51],
  '烟台': [121.39, 37.52],
  '福州': [119.3, 26.08],
  '瓦房店': [121.979603, 39.627114],
  '即墨': [120.45, 36.38],
  '抚顺': [123.97, 41.97],
  '玉溪': [102.52, 24.35],
  '张家口': [114.87, 40.82],
  '阳泉': [113.57, 37.85],
  '莱州': [119.942327, 37.177017],
  '湖州': [120.1, 30.86],
  '汕头': [116.69, 23.39],
  '昆山': [120.95, 31.39],
  '宁波': [121.56, 29.86],
  '湛江': [110.359377, 21.270708],
  '揭阳': [116.35, 23.55],
  '荣成': [122.41, 37.16],
  '连云港': [119.16, 34.59],
  '葫芦岛': [120.836932, 40.711052],
  '常熟': [120.74, 31.64],
  '东莞': [113.75, 23.04],
  '河源': [114.68, 23.73],
  '淮安': [119.15, 33.5],
  '泰州': [119.9, 32.49],
  '南宁': [108.33, 22.84],
  '营口': [122.18, 40.65],
  '惠州': [114.4, 23.09],
  '江阴': [120.26, 31.91],
  '蓬莱': [120.75, 37.8],
  '韶关': [113.62, 24.84],
  '嘉峪关': [98.289152, 39.77313],
  '广州': [113.23, 23.16],
  '延安': [109.47, 36.6],
  '太原': [112.53, 37.87],
  '清远': [113.01, 23.7],
  '中山': [113.38, 22.52],
  '昆明': [102.73, 25.04],
  '寿光': [118.73, 36.86],
  '盘锦': [122.070714, 41.119997],
  '长治': [113.08, 36.18],
  '深圳': [114.07, 22.62],
  '珠海': [113.52, 22.3],
  '宿迁': [118.3, 33.96],
  '咸阳': [108.72, 34.36],
  '铜川': [109.11, 35.09],
  '平度': [119.97, 36.77],
  '佛山': [113.11, 23.05],
  '海口': [110.35, 20.02],
  '江门': [113.06, 22.61],
  '章丘': [117.53, 36.72],
  '肇庆': [112.44, 23.05],
  '大连': [121.62, 38.92],
  '临汾': [111.5, 36.08],
  '吴江': [120.63, 31.16],
  '石嘴山': [106.39, 39.04],
  '沈阳': [123.38, 41.8],
  '苏州': [120.62, 31.32],
  '茂名': [110.88, 21.68],
  '嘉兴': [120.76, 30.77],
  '长春': [125.35, 43.88],
  '胶州': [120.03336, 36.264622],
  '银川': [106.27, 38.47],
  '张家港': [120.555821, 31.875428],
  '三门峡': [111.19, 34.76],
  '锦州': [121.15, 41.13],
  '南昌': [115.89, 28.68],
  '柳州': [109.4, 24.33],
  '三亚': [109.511909, 18.252847],
  '自贡': [104.778442, 29.33903],
  '吉林': [126.57, 43.87],
  '阳江': [111.95, 21.85],
  '泸州': [105.39, 28.91],
  '西宁': [101.74, 36.56],
  '宜宾': [104.56, 29.77],
  '呼和浩特': [111.65, 40.82],
  '成都': [104.06, 30.67],
  '大同': [113.3, 40.12],
  '镇江': [119.44, 32.2],
  '桂林': [110.28, 25.29],
  '张家界': [110.479191, 29.117096],
  '宜兴': [119.82, 31.36],
  '北海': [109.12, 21.49],
  '西安': [108.95, 34.27],
  '金坛': [119.56, 31.74],
  '东营': [118.49, 37.46],
  '牡丹江': [129.58, 44.6],
  '遵义': [106.9, 27.7],
  '绍兴': [120.58, 30.01],
  '扬州': [119.42, 32.39],
  '常州': [119.95, 31.79],
  '潍坊': [119.1, 36.62],
  '重庆': [106.54, 29.59],
  '台州': [121.420757, 28.656386],
  '南京': [118.78, 32.04],
  '滨州': [118.03, 37.36],
  '贵阳': [106.71, 26.57],
  '无锡': [120.29, 31.59],
  '本溪': [123.73, 41.3],
  '克拉玛依': [84.77, 45.59],
  '渭南': [109.5, 34.52],
  '马鞍山': [118.48, 31.56],
  '宝鸡': [107.15, 34.38],
  '焦作': [113.21, 35.24],
  '句容': [119.16, 31.95],
  '北京': [116.46, 39.92],
  '徐州': [117.2, 34.26],
  '衡水': [115.72, 37.72],
  '包头': [110, 40.58],
  '绵阳': [104.73, 31.48],
  '乌鲁木齐': [87.68, 43.77],
  '枣庄': [117.57, 34.86],
  '杭州': [120.19, 30.26],
  '淄博': [118.05, 36.78],
  '鞍山': [122.85, 41.12],
  '溧阳': [119.48, 31.43],
  '库尔勒': [86.06, 41.68],
  '安阳': [114.35, 36.1],
  '开封': [114.35, 34.79],
  '济南': [117, 36.65],
  '德阳': [104.37, 31.13],
  '温州': [120.65, 28.01],
  '九江': [115.97, 29.71],
  '邯郸': [114.47, 36.6],
  '临安': [119.72, 30.23],
  '兰州': [103.73, 36.03],
  '沧州': [116.83, 38.33],
  '临沂': [118.35, 35.05],
  '南充': [106.110698, 30.837793],
  '天津': [117.2, 39.13],
  '富阳': [119.95, 30.07],
  '泰安': [117.13, 36.18],
  '诸暨': [120.23, 29.71],
  '郑州': [113.65, 34.76],
  '哈尔滨': [126.63, 45.75],
  '聊城': [115.97, 36.45],
  '芜湖': [118.38, 31.33],
  '唐山': [118.02, 39.63],
  '平顶山': [113.29, 33.75],
  '邢台': [114.48, 37.05],
  '德州': [116.29, 37.45],
  '济宁': [116.59, 35.38],
  '荆州': [112.239741, 30.335165],
  '宜昌': [111.3, 30.7],
  '义乌': [120.06, 29.32],
  '丽水': [119.92, 28.45],
  '洛阳': [112.44, 34.7],
  '秦皇岛': [119.57, 39.95],
  '株洲': [113.16, 27.83],
  '石家庄': [114.48, 38.03],
  '莱芜': [117.67, 36.19],
  '常德': [111.69, 29.05],
  '保定': [115.48, 38.85],
  '湘潭': [112.91, 27.87],
  '金华': [119.64, 29.12],
  '岳阳': [113.09, 29.37],
  '长沙': [113, 28.21],
  '衢州': [118.88, 28.97],
  '廊坊': [116.7, 39.53],
  '菏泽': [115.480656, 35.23375],
  '合肥': [117.27, 31.86],
  '武汉': [114.31, 30.52],
  '大庆': [125.03, 46.58]
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
  var color = api.visual('color');

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
  // backgroundColor: '#404a59',
  title: {
    text: '全国主要城市空气质量',
    subtext: 'data from PM25.in',
    sublink: 'http://www.pm25.in',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
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
            "color": "#044161"
          }
        },
        {
          "featureType": "land",
          "elementType": "all",
          "stylers": {
            "color": "#004981"
          }
        },
        {
          "featureType": "boundary",
          "elementType": "geometry",
          "stylers": {
            "color": "#064f85"
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
            "color": "#004981"
          }
        },
        {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#005b96",
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
            "color": "#004981"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#00508b"
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
            "color": "#056197",
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
            "color": "#029fd4"
          }
        },
        {
          "featureType": "building",
          "elementType": "all",
          "stylers": {
            "color": "#1a5787"
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
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(data),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 6)),
      symbolSize: function (val) {
        return val[2] / 10;
      },
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
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    },
    {
      type: 'custom',
      coordinateSystem: 'bmap',
      renderItem: renderItem,
      itemStyle: {
        normal: {
          opacity: 0.5
        }
      },
      animation: false,
      silent: true,
      data: [0],
      z: -10
    }
  ]
};
mychart.setOption(option);
charts.push(mychart);
mychart = echarts.init(domNumber)
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
    y: '20%',
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
    center: ['50%', '20%'],
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
      center: ['50%', '20%'],
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
      center: ['50%', '20%'],
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
mychart.setOption(option);
charts.push(mychart);
mychart = echarts.init(domBrokenline)
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
var color = ['#1ba120', '#13ff7d', '#2A83CA', '#FF9000'];
var nameArr = ['TVOC', '臭气', 'S02', 'NOx'];
var data = [
  [92.00, 87.00, 84.00, 83.00, 73.60, 69.60, 67.00, 65.60, 68.88, 65.68, 63.00, 63.00, 57.00, 56.54, 56.60, 59.00, 58.00, 57.80, 57.40, 57.00, 56.88, 55.00, 57.00, 55.60, 53.60, 53.00, 52.00, 51.67, 51.49, 49.00],
  [21.00, 20.00,20.00,20.00,19.00, 17.00,  18.00,18.00, 17.50, 17.00,  16.00,16.00,16.00, 16.00, 15.50, 15.00, 15.00,14.15, 14.00,13.30,  13.00, 12.80, 12.80,12.40, 12.00, 11.32,11.60, 10.75, 10.64,  9.28,    ],
  [64.00, 55.00, 52.00, 50.00, 45.00, 42.00, 37.00, 35.70, 35.00, 32.00, 31.60, 31.00, 30.00, 29.00, 29.00, 28.00, 25.00, 24.00, 23.50, 22.00, 21.90, 21.00, 19.00, 18.00, 17.00, 16.00, 15.00, 13.00, 12.00, 11.00],
  [72.00, 65.00, 67.00, 55.00, 52.00, 49.00, 46.00, 39.00, 37.00, 37.00, 35.00, 32.88, 32.77, 31.66, 34.00, 32.00, 31.50, 31.00, 29.00, 28.00, 26.00, 26.00, 22.00, 21.00, 21.66, 21.580, 20.60, 20.40, 18.80, 17.60],
];
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
mychart.setOption(option);
charts.push(mychart);
mychart = echarts.init(domColumn)
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
mychart.setOption(option);
charts.push(mychart);
