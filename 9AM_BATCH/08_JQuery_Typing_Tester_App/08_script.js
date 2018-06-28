var textArea = $('#text-area');
var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
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

    $('#minutes').text(leadingZero(minutes));
    $('#seconds').text(leadingZero(seconds));
    $('#milli-seconds').text(leadingZero(milliSeconds));

    timer++;
}

textArea.keypress(function() {
    var texEnteredLength = $('#text-area').val().length;
    if(texEnteredLength === 0 && !timerRunning){
        // start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

textArea.keyup(function() {
    var textEntered = $('#text-area').val();
    var originalText = $('#original-text').text();
    var partialText = originalText.substr(0,textEntered.length);
    var message = $('#message');
    var messageCard = $('#message-card');

    if(textEntered.length === 0){
        message.text('');
        messageCard.removeClass('bg-success').removeClass('bg-teal')
            .removeClass('bg-danger').addClass('bg-light');
    }
    else{
        if(textEntered === originalText){
            //Congratulations
            message.text('Congratulations');
            messageCard.removeClass('bg-light').removeClass('bg-teal')
                .removeClass('bg-danger').addClass('bg-success');
            clearInterval(interval);
        }
        else{
            if(textEntered === partialText){
                message.text('Correct !!');
                messageCard.removeClass('bg-light').removeClass('bg-success')
                    .removeClass('bg-danger').addClass('bg-teal');
            }
            else{
                message.text('Wrong !!');
                messageCard.removeClass('bg-light').removeClass('bg-teal')
                    .removeClass('bg-success').addClass('bg-danger');
            }
        }
    }
});

$('#reset-button').click(function() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;
    textArea.val('');
    $('#message').text('');
    $('#message-card').removeClass('bg-success').removeClass('bg-teal')
        .removeClass('bg-danger').addClass('bg-light');
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#milli-seconds').text('00');
});