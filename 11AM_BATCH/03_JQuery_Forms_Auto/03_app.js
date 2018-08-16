
/*
// JavaScript Way
var userText = document.querySelector('#username');
userText.addEventListener('keyup',function () {
    var userVal = userText.value;
    document.querySelector('#user_text').textContent = userVal;
});
*/

// JQuery Way
$('#username').keyup(function() {
    $('#user_text').text($(this).val());
});
$('#password').keyup(function() {
    $('#pass_text').text($(this).val());
});
$('#email').keyup(function() {
    $('#email_text').text($(this).val());
});