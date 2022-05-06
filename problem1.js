var clock = document.getElementById('clock');
var currentTime;
var pause = true;
var clockTime = 'paused';
clock.innerText = clockTime;

function initClock() {
  return setInterval(function () {
   currentTime = new Date(); 
   var hours = currentTime.getHours();
   var minutes = currentTime.getMinutes();
   var seconds = currentTime.getSeconds(); 
   var period = "AM";
   var setTimeout = currentTime.getDate();
    
   if (hours >=12) {
     period = "PM";
   }

   if (hours > 12) {
     hours = hours - 12;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }    


  clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  clock.innerText = clockTime;
  }, 1000);
}

button.onclick = function() {
  if(pause){
    theClock = initClock();
  } else {
    clockTime = 'paused';
    clock.innerText = clockTime;
    clearInterval(theClock);
 }
  pause = !pause;
};
