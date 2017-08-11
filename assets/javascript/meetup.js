

$(document).ready(function() {


    $.ajax({
        url: "https://api.meetup.com/find/events?&sign=true&photo-host=public&lon=-117.826505&text=hiking&radius=25&lat=33.684567&key=11d761223655b1e244f222b312174",
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        cache: false,
        type: 'GET',
        jsonp: 'callback',
jsonpCallback: 'jsonp_callback',
        success: function (data) {
            console.log(data);
        }
    });




  });
