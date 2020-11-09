(function myFunction() {
    var age = prompt("What is your age?", "Becode");
    var gender = prompt("What is your gender?", "Becode");
    var town = prompt("In which town do you live?", "Becode");

    var response = confirm("You are " + age + " years old." + "You are a " + gender + "." + " And you live in " + town + ". Is this correct?");

    if (response == true) {
        alert("Thank you!");

    } else {
        return myFunction();
    }
    // your code here

})();

