(function(win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    var rem = width/6.4; //将屏幕分成6.4份
    if(rem>50){
      rem = 50;
    }

    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function(){
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 10);
  }, false);

  win.addEventListener('pageshow', function(e) {
      if(e.presisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
      }
  }, false);

  refreshRem();


})(window)
