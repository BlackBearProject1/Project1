

$(document).ready(function() {


    $.ajax({
        url: "https://api.meetup.com/find/events?&sign=true&photo-host=public&lon=" +

        localStorage.getItem('_long') +

        "&text=" +

        localStorage.getItem('_activity') +

        "&radius=25&lat=" +

        localStorage.getItem('_latt') +

        "&key=11d761223655b1e244f222b312174",
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
