$('#load-images-btn').click(function() {
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/eca8fde1b1fceeeb62936ae3a74a1dae/raw/6e33e9c9882d566d20df506f810e3721a0832644/22082018.json',function(data) {
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