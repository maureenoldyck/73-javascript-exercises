

(function() {

    var fruits = [
        "apple",
        "peer",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarine",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function(){
fruits.forEach((fruit) => {
    console.log(fruit);
});
    
    });


})();
