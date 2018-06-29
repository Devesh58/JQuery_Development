var card_header = $('#form-card-header');
var card_title = $('.card-title');
var submit_button = $('#submit-button');


$('#login-button').click(function() {
    card_header.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    card_title.text('Login Here');
    submit_button.removeClass('btn-warning').removeClass('btn-teal')
                 .addClass('btn-success').text('Login');
});

$('#register-button').click(function() {
    card_header.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    card_title.text('Register Here');
    submit_button.removeClass('btn-success').removeClass('btn-teal')
                 .addClass('btn-warning').text('Register');
});

$('#signup-button').click(function() {
    card_header.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    card_title.text('Signup Here');
    submit_button.removeClass('btn-success').removeClass('btn-warning')
        .addClass('btn-teal').text('Signup');
});

