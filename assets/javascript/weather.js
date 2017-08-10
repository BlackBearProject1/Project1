$(document).ready(function() {

  $.ajax({url: "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" + localStorage.getItem('_zip') + "&APPID=2528bcb5c37c616b9f6efccf556a8431", success: function(result){
        console.log(result);

    }});





  });
