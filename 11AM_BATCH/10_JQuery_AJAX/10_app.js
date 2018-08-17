$('#load-images-btn').click(function() {
    $.getJSON('db.json',function(data) {
        var contacts = data.contacts;
        for(var i=0; i<contacts.length; i++){
            var picture = contacts[i].picture.large;
            var personName = contacts[i].name.first + " " + contacts[i].name.last;
            var imageId = '#image' + (i+1);
            var nameId = '#image' + (i+1) + '_name';
            $(imageId).attr('src',picture);
            $(nameId).text(personName);
        }
    });
});