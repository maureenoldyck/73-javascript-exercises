
(function() {

   let hour = new Date().getHours(); 

if (hour < 18) {
    document.getElementById("target").innerHTML =  "Hello!";
}

else {
    document.getElementById("target").innerHTML = "Good evening.";
}


    // your code here

})();
