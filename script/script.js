

function color(e) {
     
    document.getElementById(e).style.backgroundColor = "white"
    document.getElementById(e).style.color = "rgb(255, 174, 0)"

}

function colorOut(e) {

    document.getElementById(e).style.backgroundColor = "rgb(255, 174, 0)"
    document.getElementById(e).style.color = "white"

}


window.onload = function () {
  
    var seconds = 00; 
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('Start');
    var buttonStop = document.getElementById('Stop');
    var buttonReset = document.getElementById('Reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

