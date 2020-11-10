(function () {

    // to get the value of an input: document.getElementById("element-id").value



    document.getElementById("run").addEventListener("click", function () {

        const numbers = document.getElementById("numbers").value;
        const array = numbers.split(",");

        array.sort(function (a, b) {
            return a - b
        });

        // your code here

        document.getElementById("numbers").value = array;


    });

})();