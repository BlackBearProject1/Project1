$(document).ready(function() {




    function getWether(zip) {
        var xhr = $.get("https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + localStorage.getItem('_zip') + "&APPID=2528bcb5c37c616b9f6efccf556a8431");
        xhr.done(function(t) {
            data = t;
            console.log("success got data", t);
            for (i = 0; i < data.list.length; i++) {


                $("#day" + i).html(Math.round((data.list[0].deg-273.15)*1.8+32)+ "°F<br>" + data.list[0].weather[0].main);
            }

        });


    }

getWether();



});
