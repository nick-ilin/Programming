function calculate() {
    var number1 = Number($("#number1").val());
    var number2 = Number($("#number2").val());
    var rezult;
    switch($("#action option:selected").text()) {
        case "+":
            rezult = number1 + number2;
            break;
        case "-":
            rezult = number1 - number2;
            break;
        case "*":
            rezult = number1 * number2;
            break;
        case "/":
            if(number2 != 0) {
                rezult = number1 / number2;
            }
            else {
                rezult = "Деление на ноль";
            }
            break;
    }
    $("#rezult").html(rezult);
}