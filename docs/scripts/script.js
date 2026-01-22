function z() {
        var numtemp1 = document.getElementById('numb1').value;
        var numtemp2 = document.getElementById('numb2').value;
        var op = document.getElementById("oper");
        var num1 = Number(numtemp1)
        var num2 = Number(numtemp2)

        if (op.value == "plus") {
                var result = num1 + num2
                String(result)
                document.getElementById('outcome').innerText = result;
        }
        if (op.value == "minus") {
                var result = num1 - num2
                String(result)
                document.getElementById('outcome').innerText = result;
        }
}