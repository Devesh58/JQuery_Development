// Get the Elements
var cardHeader = $('#form-card-header');
var cardText = $('.card-title');
var theButton = $('#submit-button');

// Login Button
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardText.text('Login Here');
    theButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
});

// Register Button
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardText.text('Register Here');
    theButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register');
});

// Signup Button
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    cardText.text('Signup Here');
    theButton.removeClass('btn-warning').removeClass('btn-success').addClass('btn-teal').text('Signup');
});