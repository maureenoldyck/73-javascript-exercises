(function () {

    const target = document.querySelector("#target");

    const table = document.createElement("table");

// Loop for creating 10 rows
    for (let r = 1; r < 11; r++) {
        const row = document.createElement("tr");

// Loop for creating 10 cells per row (column)
        for (let c = 1; c < 11; c++) {

            let result = c * r;
            let column = document.createElement("td");
            let text = document.createTextNode(r + " x " + c + " = " + result);
            column.appendChild(text);
            row.appendChild(column);
        };
        table.appendChild(row);

    };


    target.appendChild(table);

    // your code here

})();