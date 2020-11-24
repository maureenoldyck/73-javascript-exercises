(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    document.querySelector("#next").addEventListener("click", nextImage);
 

 // Put variable of index out of function otherwise it will always reset back to 0 :)   
    let index = 0;

    function nextImage() {

        if (index < gallery.length - 1) {
            index ++;
        } else if (index == gallery.length - 1) {
            index = 0;
        };

        document.querySelector("img").src = gallery[index];

    };


    // your code here
})();