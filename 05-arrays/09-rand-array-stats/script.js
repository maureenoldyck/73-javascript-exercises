(function () {

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        const array = [];
        for (let i = 0; i < 10; i++) {
            let number = Math.floor(Math.random() * 100) + 1;
            array.push(number);
            const listItem = "n-" + (i + 1);
            document.getElementById(listItem).innerHTML = number;
        };

        let smallestNumber = Math.min(...array);

        document.getElementById("min").innerHTML = smallestNumber;

        let biggestNumber = Math.max(...array);
        document.getElementById("max").innerHTML = biggestNumber;

        let sum = array.reduce((a, b) => a + b, 0);
        document.getElementById("sum").innerHTML = sum;

        let average = sum / array.length;
        document.getElementById("average").innerHTML = average;
    });

})();