(() => {
    // to get the value of an input: document.getElementById("element-id").valu

    const performOperation = operation => {

    let x = Number(document.getElementById("op-one").value);
    let y = Number(document.getElementById("op-two").value);
    let z = 1;

        switch (operation) {
            case "addition":
                z = x + y;
                break;
            case "substraction":
                z = x - y;
                break;
            case "multiplication":
                z = x * y;
                break;
            case "division":
                z = x / y;
                break;
        }
        alert(z);
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();