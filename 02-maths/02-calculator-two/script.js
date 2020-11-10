(() => {
    // to get the value of an input: document.getElementById("element-id").valu

    const performOperation = operation => {

    let numberOne = Number(document.getElementById("op-one").value);
    let numberTwo = Number(document.getElementById("op-two").value);
    let result = 1;

        switch (operation) {
            case "addition":
                result = numberOne + numberTwo;
                break;
            case "substraction":
                result = numberOne - numberTwo;
                break;
            case "multiplication":
                result = numberOne * numberTwo;
                break;
            case "division":
                result = numberOne / numberTwo;
                break;
        }
        alert(result);
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();