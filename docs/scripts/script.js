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
        if (starty.isNumber() == False) {
                
        }
        let divided4 = starty%4
}