/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let today = new Date();
    let year = today.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[today.getMonth()];
    let date = today.getDate();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[today.getDay()-1];
    let minutes = today.getMinutes();
    let hour = today.getHours();

let dayToday = day + " " + date + " " + month + " " + year + ", " + hour + "h" + minutes +".";

document.getElementById("target").innerHTML = dayToday;

    // your code here

})();
