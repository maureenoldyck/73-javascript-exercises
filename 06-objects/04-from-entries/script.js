(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", function () {

        let objectsArray = [];

// use the forEach method to combine the two arrays

        keys.forEach((item, index) =>
            objectsArray.push([item, values[index]]));

// with the fromEntries we create an object from the new created array

        const object = Object.fromEntries(objectsArray);

        console.log(object);
    });

})();