var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var timer = 0;
var text_area = $('#text-area');
var message = $('#message');
var messageCard = $('#message-card');
var interval = 0;
var timerRunning = false;

function leadingZero(time) {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
}


function startTimer() {
    minutes = leadingZero(Math.floor((timer/100)/60));
    seconds = leadingZero(Math.floor((timer/100) - (minutes * 60)));
    milliSeconds = leadingZero(Math.floor(timer- (seconds * 100) - (minutes * 6000)));

    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
    $('#milli-seconds').text(milliSeconds);
    timer++;
}


text_area.keypress(function() {
    // start the timer
    var textEnteredLength = $('#text-area').val().length;
    if(textEnteredLength === 0 && !timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

text_area.keyup(function() {
    var textEntered = $(this).val();
    var originalText = $('#original-text').text();
    var partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        messageCard.removeClass('bg-success').
        removeClass('bg-teal').removeClass('bg-danger').addClass('bg-light');
        message.text("");
    }
    else{
        if(textEntered === originalText){
            // success
            messageCard.removeClass('bg-light').
            removeClass('bg-teal').removeClass('bg-danger').addClass('bg-success');
            message.text("Congratulations");
            // Stop the timer
            clearInterval(interval);
        }
        else{
            if(textEntered === partialText){
                messageCard.removeClass('bg-success').
                removeClass('bg-light').removeClass('bg-danger').addClass('bg-teal');
                message.text("Correct!!");
            }
            else{
                messageCard.removeClass('bg-light').
                removeClass('bg-teal').removeClass('bg-success').addClass('bg-danger');
                message.text("Wrong!!");
            }
        }
    }
});
$('#reset-button').click(function() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    timer = 0;
    interval = 0;
    timerRunning = false;
    $('#text-area').val('');
    messageCard.removeClass('bg-success').
    removeClass('bg-teal').removeClass('bg-danger').addClass('bg-light');
    message.text("");
    $('#minutes').text("00");
    $('#seconds').text("00");
    $('#milli-seconds').text("00");

});
