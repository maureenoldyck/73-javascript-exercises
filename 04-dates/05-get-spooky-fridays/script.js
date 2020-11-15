(function () {

    document.getElementById("run").addEventListener("click", function () {


        const givenYear = document.getElementById("year").value;
        let months = [];
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // We create a for loop to loop through all the months of the year
        for (let i = 0; i < 12; i++) {

            // We create the variable date in order to have all the date information to get the weekday because this is the information we would like to test
            let date = new Date(givenYear, i, 13);
            if (date.getDay() == 5) {
                months.push(month[date.getMonth()]);
            }
        };

        alert("There is a Friday the 13th in " + months);

        // your code here
    });
})();