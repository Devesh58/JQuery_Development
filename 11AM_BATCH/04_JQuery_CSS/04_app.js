var cardHeader = $('#form-card-header');
var cardTitle = $('.card-title');
var submitButton = $('#submit-button');

$('#login-button').click(function () {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardTitle.text('Login Here');
    submitButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
});

$('#register-button').click(function () {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardTitle.text('Register Here');
    submitButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register');
});

$('#signup-button').click(function () {
    cardHeader.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    cardTitle.text('Signup Here');
    submitButton.removeClass('btn-warning').removeClass('btn-success').addClass('btn-teal').text('Signup');
});