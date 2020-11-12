/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatoes",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];
fruits.shift();
fruits.pop();
fruits.unshift("banana");
fruits.push("kiwi");
alert(fruits);

// fruits[0] = "banana";
// fruits[] = 
    // your code here
});

})();
