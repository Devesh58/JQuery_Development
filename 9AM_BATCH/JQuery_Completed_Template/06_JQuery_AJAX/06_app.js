$('#load-images-btn').click(function() {
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/8220146ef53efe6563e488bcf91c0d6b/raw/7a6a04d5d5640e9b2af899b73485fb496e2dec6c/9am_data.json',function(data) {

        for(var i=0; i<=11; i++){
            var imageSrc = data.contacts[i].picture.large;
            $('#image' + (i+1)).attr('src',imageSrc);
            var imageName = data.contacts[i].name.first + " " + data.contacts[i].name.last;
            $('#image'+ (i+1) + '_name').text(imageName);
        }
    });
});

/*
$(document).ready(function () {
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/8220146ef53efe6563e488bcf91c0d6b/raw/7a6a04d5d5640e9b2af899b73485fb496e2dec6c/9am_data.json',function(data) {

        for(var i=0; i<=5; i++){
            var imageSrc = data.contacts[i].picture.large;
            $('#image' + (i+1)).attr('src',imageSrc);
            var imageName = data.contacts[i].name.first + " " + data.contacts[i].name.last;
            $('#image'+ (i+1) + '_name').text(imageName);
        }
    });
});*/
