function getAJAX() {

    // Create an AJAX Request
    var http = new XMLHttpRequest();

    // Prepare the Request Object
    http.open('GET','persons.xml',true);

    // Send the Request
    http.send();

    // Process the Response IF it is ready
    http.onreadystatechange = function() {
        // If the response is ready then 'readyState = 4
        // If the response is OK then status = 200
        if(http.readyState === 4 && http.status === 200){
            process(this);
        }
    };
}

function process(xml) {
    var xmlData = xml.responseXML;
    var contacts = xmlData.getElementsByTagName('contacts');
    var imageGalleryElement = document.querySelector('#image-gallery-div');
    var imagesData = '';
    for(var i=0; i< contacts.length; i++){
        var picture = contacts[i].childNodes[21].childNodes[1].innerHTML;
        imagesData += "<img src=' " + picture + " '> ";
    }
    imageGalleryElement.innerHTML = imagesData;
}


