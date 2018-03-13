$('#load-form-button').click(function () {
    $('#card-body').load('form.html');
});

$('#load-images-btn').click(function () {
    $.get('db.json', function (data) {
        var image1 = data.contacts[0].picture.large;
        var image1_name = data.contacts[0].name.first + " " + data.contacts[0].name.last;
        $('#image1').attr('src',image1);
        $('#image1_name').text(image1_name);

        var image2 = data.contacts[1].picture.large;
        var image2_name = data.contacts[1].name.first + " " + data.contacts[0].name.last;
        $('#image2').attr('src',image2);
        $('#image2_name').text(image2_name);

        var image3 = data.contacts[2].picture.large;
        $('#image3').attr('src',image3);

        var image4 = data.contacts[3].picture.large;
        $('#image4').attr('src',image4);

        var image5 = data.contacts[4].picture.large;
        $('#image5').attr('src',image5);
    });
});
