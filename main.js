function currentTime() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
  if (h > 12) {
      h = h - 12;
      s = s + " PM";
    }
  
document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  
  var t = setTimeout(currentTime, 500);
  
}

  function checkTime(i){
   if (i < 10) {i = "0" + i};
     return i;
   }
   function fullScreen() {
     document.getElementById('fullScreenClock').style.fontSize = '250px';
     }

  function hideFullScreen() {
     
     var clock = document.getElementById('clock');
     
   clock.style.fontSize = '144px';
  }
