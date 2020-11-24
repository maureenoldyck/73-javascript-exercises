

(function() {


 const source =   document.querySelector("img").getAttribute("src");
 const dataHover = document.querySelector("img").getAttribute("data-hover");

document.querySelector("img").addEventListener("mouseover", imageHover);
document.querySelector("img").addEventListener("mouseout", imageNormal);
    

function imageHover() {
document.querySelector("img").src = dataHover;
}

function imageNormal() {
document.querySelector("img").src = source;
}


    // your code here

})();
