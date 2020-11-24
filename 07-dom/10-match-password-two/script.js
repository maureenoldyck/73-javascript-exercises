
(function() {


    document.querySelector("#run").addEventListener("click", check);


    function check() {

        let passwordOne = document.querySelector("#pass-one").value;
        let passwordTwo = document.querySelector("#pass-two").value;

        if (passwordOne != passwordTwo) {

            const inputbox = document.querySelectorAll("input");

            for (let i = 0; i < inputbox.length; i++) {
                inputbox[i].classList.add("error");
            };
           
        };
    };

    // your code here

})();
