// JavaScript Way

/*
var username = document.querySelector('#username');
username.addEventListener('keyup',addUser);
function addUser() {
    document.querySelector('#user_text').textContent = username.value;
}
*/

// User Name
$('#username').keyup(function() {
    $('#user_text').text($(this).val());
});

//Email
$('#email').keyup(function() {
    $('#email_text').text($(this).val());
});

// Password
$('#password').keyup(function() {
    $('#pass_text').text($(this).val());
});