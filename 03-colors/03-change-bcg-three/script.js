(function () {

    function randomColor() {

        const hexCode = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color = color + hexCode[Math.floor(Math.random() * 16)];
        }
        return color;

    }

    document.getElementById("run").addEventListener("click", function () {

        document.body.style.backgroundColor = randomColor();


    });

    // your code here

})();