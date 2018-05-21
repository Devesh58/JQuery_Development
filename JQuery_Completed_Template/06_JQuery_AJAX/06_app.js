$('#load-form-button').click(function () {
    $('#card-body').load('form.html');
});

$('#load-images-btn').click(function() {
    $.get('db.json',function (data) {
        for(var i=0; i<=5; i++){
            var image = data.contacts[i].picture.large;
            var image_name = data.contacts[i].name.first + " " + data.contacts[i].name.last;
            var j_image = '#image' + (i+1);
            var j_fullName = '#image' + (i+1) + '_name';
            $(j_image).attr('src',image);
            $(j_fullName).text(image_name);
        }
    });
});