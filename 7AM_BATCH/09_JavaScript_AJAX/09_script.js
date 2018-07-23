function getAJAX() {
    // Create an XMLHttpRequest
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if(http.readyState === 4 && http.status === 200){
          process(this);
      }
    };

    // prepare the request
    http.open('GET','persons.xml',true);

    // Send the the request
    http.send();
}

// AJAX Processing
function process(xml) {
    var xmlData = xml.responseXML;
    var imageDiv = document.querySelector('#image-gallery-div');
    var imageData = '';
    var contacts = xmlData.getElementsByTagName('contacts');
    for(var i = 0; i<contacts.length; i++){
        var picture = contacts[i].childNodes[21].childNodes[1].innerHTML;
        imageData += "<img src='"+ picture +"'>";
    }
    imageDiv.innerHTML = imageData;
}
