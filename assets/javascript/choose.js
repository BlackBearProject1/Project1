var addr;
var w;
var zip;
var long;
var lat;



$(document).ready(function() {
  $(".auth-image").on("click", function(){
    x= $(this).attr("id");
    localStorage.setItem('_activity', x);
    window.open('choose.html', false);

  });





  $("#locations").on("click", function() {
    event.preventDefault();
    var a = localStorage.getItem('_activity');
    localStorage.clear();
    localStorage.setItem('_activity', a);
    localStorage.setItem('_zip', addr[0].address_components[7].short_name);
          $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr[0].formatted_address , success: function(result){
          console.log(result);
          localStorage.setItem('_long', result.results[0].geometry.location.lng);
          long = result.results[0].geometry.location.lng;
          localStorage.setItem('_latt', result.results[0].geometry.location.lat);
          lat = result.results[0].geometry.location.lat;
          document.cookie = "long=" + result.results[0].geometry.location.lng + "; latt=" + "result.results[0].geometry.location.lat";
          window.open('locations.html#' + long + "," + lat, false);
      }});

  });

  $("#groups").on("click", function() {

      event.preventDefault();
      var a = localStorage.getItem('_activity');
      localStorage.clear();
      localStorage.setItem('_activity', a);
      localStorage.setItem('_zip', addr[0].address_components[7].short_name);
            $.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr[0].formatted_address , success: function(result){
            console.log(result);
            localStorage.setItem('_long', result.results[0].geometry.location.lng);
            localStorage.setItem('_latt', result.results[0].geometry.location.lat);
        }});
        window.open('meetups.html', false);



  });






});



// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.684567, lng: -117.826505},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
        addr = places;
        console.log(places);
        var geocoder = new google.maps.Geocoder();
        var address = places[0].formatted_address;
        geocoder.geocode( { 'address': address}, function(results, status) {
          console.log(results);
        });

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
