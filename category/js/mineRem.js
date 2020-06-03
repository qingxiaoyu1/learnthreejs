(function (doc, win) {
  /* eslint-disable no-undef */
  var docEl = doc.documentElement
  var resizeEvt = ('orientationchange' in window ? 'orientationchange' : 'resize')
  var recalc = function () {
    var clientWidth = localStorage.getItem('windowWidth') || docEl.clientWidth
    if (clientWidth <= 1024) {
      clientWidth = 1024
    }
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  /* eslint-enable no-undef */
})(document, window)
baseUrl = "http://192.168.0.104:8080/"