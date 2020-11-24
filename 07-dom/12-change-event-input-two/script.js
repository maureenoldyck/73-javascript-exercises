(function () {


    document.querySelector("#pass-one").setAttribute("minlength", "8");
    document.querySelector("#pass-one").addEventListener("keyup", type);


    function type() {

            const regex = /\d{2}/;
            let numberCheck = regex.test(document.querySelector("#pass-one").value);

        if (document.querySelector("#pass-one").value.length >= 8 && numberCheck == true) {
            document.querySelector("#validity").innerHTML = "ok";
        } else {
            document.querySelector("#validity").innerHTML = "Not ok";

        }
    };


    // your code here

})();