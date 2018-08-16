// Get the HTML Elements
var operatorElement = $('#operator');
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var resultButtonElement = $('#result_button');

// Event Listener for plus Button
$('#plus-button').click(function () {
    operatorElement.text('+');
});

// Event Listener for Minus Button
$('#minus-button').click(function () {
    operatorElement.text('-');
});

// Event Listener for Div Button
$('#div-button').click(function () {
    operatorElement.text('/');
});

// Event Listener for Mul Button
$('#mul-button').click(function () {
    operatorElement.text('*');
});

// Event Listener for Equals Button (Calculation Logic)
$('#equals_button').click(function () {
    var num1 = firstNumberElement.val();
    var num2 = secondNumberElement.val();
    var operator = operatorElement.text().trim();
    var result = 0;
    // for NON-Empty values
    if(num1 !== '' && num2 !== ''){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
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
    // for Empty values
    else{
        resultButtonElement.text('RESULT');
    }
});

// Event Listener for Clear Button
$('#clear-button').click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorElement.text('+');
    resultButtonElement.text('RESULT');
});



