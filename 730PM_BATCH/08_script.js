// Get The HTML Elements
var originalTextElement = $('#original-text');
var textAreaElement = $('#text-area');
var messageCard = $('#message-card');
var message = $('#message');
var minutesElement = $('#minutes');
var secondsElement = $('#seconds');
var milliSecondsElement = $('#milli-seconds');
var resetButton = $('#reset-button');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis, dignissimos dolor enim ex fuga illo inventore ipsam nesciunt nostrum obcaecati placeat possimus, provident quis ratione reiciendis voluptate! Accusantium blanditiis',
    'At consequuntur dolores harum illo omnis perspiciatis quis sunt tempore tenetur, voluptatibus. Accusantium, asperiores aspernatur consectetur deserunt doloremque esse ex illo laborum maxime mollitia nesciunt officiis, quos sunt unde vel. Ab accusamus alias aperiam assumenda deserunt dolores ducimus',
    'Ipsa maxime officia omnis perspiciatis saepe sequi vero? Accusamus adipisci aliquam amet aperiam, asperiores aspernatur aut beatae consectetur debitis deleniti dicta dolore dolorem dolorum eligendi',
    'exercitationem, voluptas? A dicta eligendi est fuga maiores, modi nisi similique totam ullam! A adipisci aut cupiditate delectus dolorem ex id non, pariatur quia sed sint tenetur unde! Accusamus consequuntur',
    'deleniti dicta ipsam molestias officiis omnis quo sunt vel, voluptates? Ab accusamus accusantium aliquam amet aperiam autem commodi cupiditate distinctio dolor doloribus earum et eum hic iusto, minima modi mollitia nemo neque nihil omnis optio perspiciatis provident, recusandae',
    'deserunt doloremque ea eius ex, exercitationem incidunt maiores minima nam nobis nostrum perferendis rerum tempore temporibus voluptas voluptates. Amet culpa ea fuga neque quia ut? Animi at blanditiis',
    'doloremque facilis fuga iusto labore optio praesentium, provident quam quibusdam quidem quo, rerum! Debitis dolore fuga itaque laboriosam laborum possimus, quidem quo recusandae sit voluptatem! At blanditiis',
    'Adipisci alias aliquid aspernatur assumenda at dignissimos eius eos iure nulla officia sit, suscipit temporibus, unde velit voluptatem. Corporis eos esse fugiat hic illo ipsa iusto laboriosam magni nihil',
    ' nesciunt officiis quaerat quia quidem quo quos, sed, sint sunt tempore ullam velit voluptate? Architecto, beatae corporis dolores earum error eveniet, ex expedita fugit incidunt minima nisi officiis porro quam repudiandae rerum sed velit! Aliquid at aut commodi consequatur dolore, dolores',
    'possimus qui similique suscipit tempore vero vitae voluptate voluptates! Animi aperiam aspernatur at consectetur cumque delectus distinctio dolorum eligendi esse illo illum incidunt inventore',
    'A accusantium aspernatur at aut consectetur consequuntur cum cumque deleniti doloremque dolores ducimus eius est explicabo hic labore laudantium, libero minima mollitia neque nihil odit optio quas'];


var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var interval = 0;
var timerRunning = false;

// 'keypress' Event for textArea
textAreaElement.keypress(function() {
    var textEnteredLength = textAreaElement.val().length;
    if(textEnteredLength === 0 && !timerRunning){
        // Start the Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

// 'keyup' Event for TextArea
textAreaElement.keyup(function() {
    var textEntered = textAreaElement.val();
    var originalText = originalTextElement.text();
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === ''){
        //Gray
        messageCard.removeClass('bg-success').removeClass('bg-danger')
            .removeClass('bg-primary').addClass('bg-light');
        message.text("");
    }
    else{
        if(textEntered === originalText){
            // Green
            messageCard.removeClass('bg-light').removeClass('bg-danger')
                .removeClass('bg-primary').addClass('bg-success');
            message.text("Congratulations !!");
            // Stop The Timer
            clearInterval(interval);
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-light').removeClass('bg-danger')
                    .removeClass('bg-success').addClass('bg-primary');
                message.text("Correct !!");
            }
            else{
                // Red
                messageCard.removeClass('bg-light').removeClass('bg-primary')
                    .removeClass('bg-success').addClass('bg-danger');
                message.text("Wrong !!");
            }
        }
    }
});

// Reset Button
resetButton.click(function() {
    // stop the timer
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaElement.val('');
    messageCard.removeClass('bg-success').removeClass('bg-danger')
        .removeClass('bg-primary').addClass('bg-light');
    message.text("");
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');
    // To Get the Dynamic Text
    getDynamicText();

});

function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));

    timer++;
}

// leading Zero
function leadingZero(time) {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
}

// Get the Dynamic Text
function getDynamicText() {
    var random = Math.round(Math.random() * 10);
    var randomText = textArray[random];
    originalTextElement.text(randomText);
}