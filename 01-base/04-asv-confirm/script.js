(function myFunction() {
    const age = prompt("What is your age?", "Becode");
    const gender = prompt("What is your gender?", "Becode");
    const town = prompt("In which town do you live?", "Becode");

    const response = confirm("You are " + age + " years old." + "You are a " + gender + "." + " And you live in " + town + ". Is this correct?");

    if (response == true) {
        alert("Thank you!");

    } else {
        return myFunction();
    }
    // your code here

})();

