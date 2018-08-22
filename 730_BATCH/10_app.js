$('#load-images-btn').click(function() {
    $.getJSON('db.json',function(data) {
        var contactsList = data.contacts;
        var i = 1;
        var imageSelector = '#image';
        contactsList.forEach(function (contact) {
            var picture = contact.picture.large;
            var personName = contact.name.first + " " + contact.name.last;
            $(imageSelector + i).attr('src',picture);
            $(imageSelector + i + '_name').text(personName);
            i++;
        });
    });
});