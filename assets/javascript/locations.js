

$(document).ready(function() {


    // $.ajax({
    //     url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBjFxuu7fOjkqkLhWGnBRk_W0yUfbPd29k&rankby=distance&type=hiking&location=33.684567,-117.826505&keyword=hiking",
    //     dataType: 'JSON',
    //     jsonpCallback: 'callback',
    //     cache: false,
    //     type: 'GET',
    //     jsonp: 'callback',
    //     success: function (data) {
    //         console.log(data);
    //     }
    // });

// var url;
//
//     function createCORSRequest(method, url) {
//       var xhr = new XMLHttpRequest();
//       if ("withCredentials" in xhr) {
//
//         // Check if the XMLHttpRequest object has a "withCredentials" property.
//         // "withCredentials" only exists on XMLHTTPRequest2 objects.
//         xhr.open(method, url, true);
//
//       } else if (typeof XDomainRequest != "undefined") {
//
//         // Otherwise, check if XDomainRequest.
//         // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//
//       } else {
//
//         // Otherwise, CORS is not supported by the browser.
//         xhr = null;
//
//       }
//       return xhr;
//     }
//
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//       throw new Error('CORS not supported');
//     }
//
// createCORSRequest('GET', "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBjFxuu7fOjkqkLhWGnBRk_W0yUfbPd29k&rankby=distance&type=hiking&location=33.684567,-117.826505&keyword=hiking");


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBjFxuu7fOjkqkLhWGnBRk_W0yUfbPd29k&rankby=distance&type=hiking&location=33.684567,-117.826505&keyword=hiking", true);
// xhr.onload = function(){  //instead of onreadystatechange
//     //do something
// };
// xhr.send(null);

service = new google.maps.places.PlacesService(map);
service.textSearch(request, callback);


  });
