
(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        const x = Number(document.getElementById("op-one").value);
        const y = Number(document.getElementById("op-two").value);
        const answer = x + y;
        alert(answer);
       // perform an addition
    }); 

    document.getElementById("substraction").addEventListener("click", function() {
        const x = Number(document.getElementById("op-one").value);
        const y = Number(document.getElementById("op-two").value);
        const answer = x - y;
        alert(answer);
      // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        const x = Number(document.getElementById("op-one").value);
        const y = Number(document.getElementById("op-two").value);
        const answer = x * y;
        alert(answer);
    // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        const x = Number(document.getElementById("op-one").value);
        const y = Number(document.getElementById("op-two").value);
        const answer = x / y;
        alert(answer);
      // perform an division
    });
})();


