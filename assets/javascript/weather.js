$(document).ready(function() {




    function getWether(zip) {
        var xhr = $.get("https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + localStorage.getItem('_zip') + "&APPID=2528bcb5c37c616b9f6efccf556a8431");
        xhr.done(function(t) {
            data = t;
            console.log("success got data", t);
            for (i = 0; i < data.list.length; i++) {


                $("#day" + i).html("<img src=assets/images/"+data.list[i].weather[0].icon +".png>"+(Math.round((data.list[i].temp.day-273)*1.8)+32)+ "°F<br>" + data.list[0].weather[0].main);
            }

        });


    }

getWether();



});
