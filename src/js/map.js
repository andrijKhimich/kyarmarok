 //get company address for company profile page
 function initMap() {
   var map = new google.maps.Map(document.querySelector('#address'), {
     zoom: 12,
     disableDefaultUI: true,
     center: {
       lat: -34.397,
       lng: 150.644
     }
   });
   var geocoder = new google.maps.Geocoder();
   geocodeAddress(geocoder, map);
 }

 function geocodeAddress(geocoder, resultsMap) {
   var street = document.querySelector('#street').textContent;
   var city = document.querySelector('#city').textContent;
   var address = street + ' ' + city;
   geocoder.geocode({
     'address': address
   }, function (results, status) {
     if (status === 'OK') {
       resultsMap.setCenter(results[0].geometry.location);
       var marker = new google.maps.Marker({
         map: resultsMap,
         position: results[0].geometry.location
       });
     } else {
       alert('Geocode was not successful for the following reason: ' + status);
     }
   });
 }