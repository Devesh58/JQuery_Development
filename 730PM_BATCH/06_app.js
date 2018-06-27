$('#load-form-button').click(function () {
    console.log("form loaded");
    $('#card-body').load('form.html');
});

$('#load-images-btn').click(function() {
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/27314d7516deba41e092df563fff30d7/raw/b424f24b16f8c3202b11087166c83588d9a0f774/ajax_data.json',function(data) {
        for(var i = 0; i<= 5 ; i++){
            var imgSrc = data.contacts[i].picture.large;
            $('#image' + (i+1)).attr('src',imgSrc);
            var imgName = data.contacts[i].name.first + " " + data.contacts[i].name.last;
            $('#image' + (i+1) + '_name').text(imgName);
        }
    });
});

