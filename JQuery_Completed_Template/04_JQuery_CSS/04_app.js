
var card_header = $('#form-card-header');
var card_title = $('.card-title');
var submitButton = $('#submit-button');

$('#login-button').click(function() {
    card_header.removeClass('bg-warning');
    card_header.removeClass('bg-teal').addClass('bg-success');
    card_title.text("Login Here");
    submitButton.removeClass('btn-warning');
    submitButton.removeClass('btn-teal').addClass('btn-success');
    submitButton.text('Login');
});

$('#register-button').click(function() {
    card_header.removeClass('bg-teal');
    card_header.removeClass('bg-success').addClass('bg-warning');
    card_title.text("Register Here");
    submitButton.removeClass('btn-teal');
    submitButton.removeClass('btn-success').addClass('btn-warning');
    submitButton.text('Register');
});

$('#signup-button').click(function() {
    card_header.removeClass('bg-success');
    card_header.removeClass('bg-warning').addClass('bg-teal');
    card_title.text("Sign up Here");
    submitButton.removeClass('btn-success');
    submitButton.removeClass('btn-warning').addClass('btn-teal');
    submitButton.text('Sign Up');
});
