
(function() {

   let hour = new Date().getHours(); 

if (hour <= 17) {
    document.getElementById("target").innerHTML =  "Hello!";
}

else {
    document.getElementById("target").innerHTML = "Good evening.";
}


    // your code here

})();
