//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var textArea = $('#text-area');
var originalText = $('#original-text').text().trim();
var message = $('#message');
var message_card = $('#message-card');
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
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutes = leadingZero(minutes);
    seconds = leadingZero(seconds);
    milliSeconds = leadingZero(milliSeconds);

    // to add timer values to front end
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
    $('#milli-seconds').text(milliSeconds);

    timer++;
}


textArea.keypress(function() {
    var textEnteredLength = $(this).val().length;
    if(textEnteredLength === 0 && !timerRunning){
        // start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

textArea.keyup(function() {

    var textEntered = $(this).val();
    var partialText = originalText.substr(0,textEntered.length);

    if(textEntered.length === 0){
        message_card.removeClass('bg-success');
        message_card.removeClass('bg-teal');
        message_card.removeClass('bg-danger').addClass('bg-light');
        $('#message').text('');
    }
    else{
        if(textEntered === originalText){
            message_card.removeClass('bg-teal');
            message_card.removeClass('bg-danger');
            message_card.removeClass('bg-light').addClass('bg-success');
            message.text('Congratulations !!');
            clearInterval(interval); // to stop timer
        }
        else{
            if(textEntered === partialText){
                $('#message').text('Correct');
                message_card.removeClass('bg-success');
                message_card.removeClass('bg-danger');
                message_card.removeClass('bg-light').addClass('bg-teal');
            }
            else{
                $('#message').text('Wrong');
                message_card.removeClass('bg-success');
                message_card.removeClass('bg-teal');
                message_card.removeClass('bg-light').addClass('bg-danger');
            }
        }
    }
});

$('#reset-button').click(function() {
    clearInterval(interval);
    textArea.val('');
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;
    message_card.removeClass('bg-success');
    message_card.removeClass('bg-teal');
    message_card.removeClass('bg-danger').addClass('bg-light');
    $('#message').text('');
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#milli-seconds').text('00');
});