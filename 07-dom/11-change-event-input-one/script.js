(function () {


    document.querySelector("#pass-one").setAttribute("maxlength", "10");


    document.querySelector("#pass-one").addEventListener("keyup", type);

    function type() {

        let i = document.querySelector("#pass-one").value.length;
        document.querySelector("#counter").innerHTML = i + "/10";

    };


    // your code here

})();