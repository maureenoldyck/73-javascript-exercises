/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {



        let day = Number(document.getElementById("dob-day").value);
        let month = Number(document.getElementById("dob-month").value) - 1;
        let year = Number(document.getElementById("dob-year").value);
        let today = new Date();
        let yearToday = today.getFullYear();
        let monthToday = new Date().getMonth();
        let dayToday = new Date().getDate();

        let age = yearToday - year;
    

        if (month == monthToday && day > dayToday) {
            age = age - 1 ;
        }

        else if (month > monthToday) {
            age = age - 1 ;
        }

        alert("You are " + age + " years old.");
        // your code here
    });
})();