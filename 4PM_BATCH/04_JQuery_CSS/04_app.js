// Get the Elements
var cardHeader = $('#form-card-header');
var cardText = $('.card-title');
var button = $('#submit-button');

// Login button Logic
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardText.text('Login Here');
    button.removeClass('btn-teal').removeClass('btn-warning')
                                  .addClass('btn-success').text('Login');
});

// Register button Logic
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardText.text('Register Here');
    button.removeClass('btn-teal').removeClass('btn-success')
        .addClass('btn-warning').text('Register');
});

// Signup button Logic
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    cardText.text('Signup Here');
    button.removeClass('btn-warning').removeClass('btn-success')
        .addClass('btn-teal').text('Signup');
});
