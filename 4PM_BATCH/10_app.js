// Click on Load Images Button
$('#load-images-btn').click(function() {

    // Call AJAX to get JSON Data
    $.getJSON('db.json',function(data) {
        var contactsList = data.contacts;
        var imageSelector = '#image';
        var nameSelector = '_name';
        for(var i=0; i<contactsList.length; i++){
            var picture = contactsList[i].picture.large;
            var fullName = contactsList[i].name.first + " " + contactsList[i].name.last;
            $(imageSelector + (i+1)).attr('src',picture);
            $(imageSelector + (i+1) + nameSelector).text(fullName);
        }
    });
});