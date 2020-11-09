
(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        (getElementById("op-one").value) + (getElementById("op-two")); // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        (getElementById("op-one").value) - (getElementById("op-two"));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        (getElementById("op-one").value) * (getElementById("op-two")); // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        (getElementById("op-one").value) / (getElementById("op-two")); // perform an division
    });
})();


alert("Answer:" ) )