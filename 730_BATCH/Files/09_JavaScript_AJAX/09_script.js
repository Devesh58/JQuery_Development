function getAJAX() {

    // Create a AJAX Request
    var http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET', 'persons.xml', true);

    // Send the AJAX Request
    http.send();

    // Process the Response
    http.onreadystatechange = function() {
        // request is finished and status  is 'OK'
       if(http.readyState === 4 && http.status === 200){
           // process it
           process(this);
       }
    };
}

// Processing logic
function process(xml) {
    var xmlData = xml.responseXML;
    var imageGallery = document.querySelector('#image-gallery-div');
    var imageString = '';
    var contactsList = xmlData.getElementsByTagName('contacts');
    for(var i=0; i<contactsList.length; i++){
        var picture = contactsList[i].childNodes[21].childNodes[1].textContent.trim();
        imageString += "<img src = '" + picture +"' > ";
    }
   imageGallery.innerHTML = imageString;
}