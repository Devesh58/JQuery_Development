// Get the HTML Elements
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var operatorElement = $('#operator');
var resultButtonElement = $('#result_button');

// Plus Button Click
$('#plus-button').click(function() {
    operatorElement.text('+');
});

// Minus Button Click
$('#minus-button').click(function() {
    operatorElement.text('-');
});

// Div Button Click
$('#div-button').click(function() {
    operatorElement.text('/');
});

// Mul Button Click
$('#mul-button').click(function() {
    operatorElement.text('*');
});

// Equals Button CLick
$('#equals_button').click(function() {
    var firstNumer = firstNumberElement.val();
    var secondNumber = secondNumberElement.val();
    var operator = operatorElement.text().trim();
    var  result = 0;

    if(firstNumer !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumer);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButtonElement.text(result);
    }
    else{
        resultButtonElement.text('RESULT');
    }
});

// Clear Button Click
$('#clear-button').click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorElement.text('+');
    resultButtonElement.text('RESULT');
});