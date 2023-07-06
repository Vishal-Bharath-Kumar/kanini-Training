// Set the date we're counting down to
var countDownDate1 = new Date("March 5, 2023 15:37:25").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate1 - now;
 
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="count"
  document.getElementById("count1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("count2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("count3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("count4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "LAUNCHED";
  }
}, 1000);