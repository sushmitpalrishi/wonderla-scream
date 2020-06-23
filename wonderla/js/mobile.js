

function deviceMotionHandler(eventData) {
  var info, xyz = "[X, Y, Z]";

  // Grab the acceleration from the results
  
  // Grab the acceleration including gravity from the results
  acceleration = eventData.accelerationIncludingGravity;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  


  $angle = acceleration.y;
        /// console.log($angle);
      $('.hair').css({
            'transform':'rotateZ('+$angle+'deg)',
            '-webkit-transform':'rotateZ('+$angle+'deg)',
            '-moz-transform':'rotateZ('+$angle+'deg)',
            '-o-transform':'rotateZ('+$angle+'deg)'
         });
         
}


window.onload = function(){
 window.addEventListener('devicemotion', deviceMotionHandler, false);
}
