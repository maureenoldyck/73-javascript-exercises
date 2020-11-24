
(function() {


 const dataImageValue = document.getElementById("source").getAttribute("data-image");

 const createImage = document.createElement("IMG");
 createImage.src = dataImageValue;
 document.querySelector("#target").appendChild(createImage);


 document.getElementById("source").remove();
 // your code here

})();
