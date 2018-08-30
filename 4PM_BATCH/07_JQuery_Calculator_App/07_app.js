// Get the HTML Elements
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var operatorElement = $('#operator');
var resultButton = $('#result_button');

// Click on Plus Button
$('#plus-button').click(function () {
    operatorElement.text('+');
});

// Click on Minus Button
$('#minus-button').click(function () {
    operatorElement.text('-');
});

// Click on divide Button
$('#div-button').click(function () {
    operatorElement.text('/');
});

// Click on Multiplication Button
$('#mul-button').click(function () {
    operatorElement.text('*');
});

// Click on Equals Button
$('#equals_button').click(function() {
    var firstNumber = firstNumberElement.val();
    var secondNumber = secondNumberElement.val();
    var operator = operatorElement.text().trim();
    var result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        // Add Calculation Logic
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = 'RESULT';
                break;
        }
        resultButton.text(result);
    }
    else{
        resultButton.text('RESULT');
    }
});

// Clear Button
$('#clear-button').click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorElement.text('+');
    resultButton.text('RESULT');
});





