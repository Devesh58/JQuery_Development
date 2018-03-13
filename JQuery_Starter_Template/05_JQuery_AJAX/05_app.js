$('#load-form-button').click(function () {
    $('#card-body').load('form.html');
});

$('#load-images-btn').click(function () {
    // JQUERY AJAX Get request
    $.get('db.json',function (data) {
        var image1 = data.contacts[0].picture.large;
        $('#image1').attr('src',image1);
        var image1_name = data.contacts[0].name.first + " " + data.contacts[0].name.last;
        $('#image1_name').text(image1_name);

        var image2 = data.contacts[1].picture.large;
        $('#image2').attr('src',image2);
        var image2_name = data.contacts[1].name.first + " " + data.contacts[1].name.last;
        $('#image2_name').text(image2_name);

        var image3 = data.contacts[2].picture.large;
        $('#image3').attr('src',image3);
        var image3_name = data.contacts[2].name.first + " " + data.contacts[2].name.last;
        $('#image3_name').text(image3_name);

        var image4 = data.contacts[3].picture.large;
        $('#image4').attr('src',image4);
        var image4_name = data.contacts[3].name.first + " " + data.contacts[3].name.last;
        $('#image4_name').text(image4_name);

        var image5 = data.contacts[4].picture.large;
        $('#image5').attr('src',image5);
        var image5_name = data.contacts[4].name.first + " " + data.contacts[4].name.last;
        $('#image5_name').text(image5_name);

    });
});

