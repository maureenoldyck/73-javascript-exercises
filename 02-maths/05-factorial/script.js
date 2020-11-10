(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        function factorialize(num) {

            if (num === 0 || num === 1) 
              return 1; 

            for (let i = num - 1; i >= 1; i--)  { 
                num = num * i;
            }
            return num;
          }
         
        let number = parseInt(document.getElementById("number").value);
        let answer = factorialize(number);
        alert(answer);


    });


})();