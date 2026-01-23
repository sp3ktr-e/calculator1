function z() {
        let numtemp1 = document.getElementById('numb1').value;
        let numtemp2 = document.getElementById('numb2').value;
        let op = document.getElementById("oper");
        let num1 = Number(numtemp1)
        let num2 = Number(numtemp2)

        if (op.value == "plus") {
                let result = num1 + num2
                String(result)
                document.getElementById('outcome').innerText = result;
        }
        if (op.value == "minus") {
                let result = num1 - num2
                String(result)
                document.getElementById('outcome').innerText = result;
        }
}

function y() {
        let starty = document.getElementById('startyear').value;
        let num1 = Number(starty)
        if (Number.isInteger(num1) == false) {
              document.getElementById('outcome1').innerText = "idiot";  
        }
        let divided4 = starty%4
        let divided100 = starty%100
        let divided400 = starty%400
        if (divided4 != 0) {
                document.getElementById('outcome1').innerText = "not a leap year";
        }
        else if (divided100 != 0) {
                document.getElementById('outcome1').innerText = "cool, " + starty + " is a leap year";
        }
        else if (divided400 != 0) {
                document.getElementById('outcome1').innerText = "not a leap year";
        }
        else if (divided400 == 0) {
                document.getElementById('outcome1').innerText = "cool, " + starty + " is a leap year";
        }
}