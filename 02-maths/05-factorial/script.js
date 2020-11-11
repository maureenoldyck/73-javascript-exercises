(function () {

  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", function () {




    let number = document.getElementById("number").value;

    if (number == 0) {
      number = 1;
    }

    for (let i = number; i >= 2; i--) {
      number = number * (i - 1);


    }
    alert(number);

  });



})();