
(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        //Use Array.from to create new array & use new Set to store the unique values from the given array in the new created array
        const uniqueFruits = Array.from(new Set(fruits));
        console.log(uniqueFruits);
/* or 
console.log([...new Set(fruits)]) ;
*/
       
    });

})();
