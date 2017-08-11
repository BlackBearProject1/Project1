

$(document).ready(function() {


    $.ajax({
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBjFxuu7fOjkqkLhWGnBRk_W0yUfbPd29k&rankby=distance&type=hiking&location=33.684567,-117.826505&keyword=hiking",
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        cache: false,
        type: 'GET',
        jsonp: 'callback',
        success: function (data) {
            console.log(data);
        }
    });

  });
