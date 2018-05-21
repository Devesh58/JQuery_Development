var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var currentTime = "";
var interval = 0;
var timerRunning = false;
var textArea = $('#text-area');

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
  currentTime = leadingZero(minutes) + ":" + leadingZero(seconds) + ":" + leadingZero(milliSeconds);
  $('.timer').text(currentTime);
  timer++;
}

textArea.keypress(function() {
    var textEnteredLength = $('#text-area').val().length;
    if(textEnteredLength === 0 && !timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

textArea.keyup(function() {
    var textEntered = $('#text-area').val();
    var originalText = $('.text-section-div p').text().trim();
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === originalText){
        $('#text-area').css('borderColor','green');
        clearInterval(interval);
        $('.greet-section').css('display','block');
    }
    else{
        if(textEntered === partialText){
            $('#text-area').css('borderColor','blue');
        }
        else{
            $('#text-area').css('borderColor','red');
        }
    }
});

$('#reset').click(function() {
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    currentTime = "";
    interval = 0;
    timerRunning = false;
    $('.timer').text("00:00:00");
    var textArea = $('#text-area');
    textArea.css('borderColor' , 'gray').val('');
    $('.greet-section').css('display','none');
});