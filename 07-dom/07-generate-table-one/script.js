(function () {



    const target = document.querySelector("#target");

    const table = document.createElement("table");

    for (let r = 0; r < 10; r++) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        table.appendChild(row);
        row.appendChild(cell);
    };


    target.appendChild(table);

    // your code here

})();