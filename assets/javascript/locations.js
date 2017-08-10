$(document).ready(function() {


  $.ajax({url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBjFxuu7fOjkqkLhWGnBRk_W0yUfbPd29k&rankby=distance&type=" + localStorage.getItem('_activity') + "&location=" + window.location.hash.substring(1) + "&keyword=" + localStorage.getItem('_activity'), success: function(result){
        console.log(result);

    }});





  });
