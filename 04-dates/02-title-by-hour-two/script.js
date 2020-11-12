(function() {

    let hour = new Date().getHours(); 
    let minutes = new Date().getMinutes(); 
 
 if (hour >= 17 && minutes >= 30 ) {
     document.getElementById("target").innerHTML =  "Good evening!";
 }


 else {
     document.getElementById("target").innerHTML = "Hello!";
 }
 
 
     // your code here
 
 })();
 
