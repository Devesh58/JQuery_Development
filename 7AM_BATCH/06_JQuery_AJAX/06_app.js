
$('#load-images-btn').click(function() {

    // JQuery AJAX Call
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/1b5afdd40806919933029988e239fe4b/raw/c7a199e4f3db3010a36edba30af4110170e00b0e/7am_batch_data.json',function (data) {
        console.log(data);
        for(var i = 0; i<= 11 ; i++){
            var imageSrc = data.contacts[i].picture.large;
            var fullName = data.contacts[i].name.first + " "
                + data.contacts[i].name.last;
            $('#image'+ (i+1)).attr('src',imageSrc);
            $('#image'+ (i+1) +'_name').text(fullName);
        }
    })
});
