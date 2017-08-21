var map;

function initMap() {
    var mapContainer = document.getElementById('map');
    var mapOptions = {
        center: 
            {lat: -34.397, 
            lng: 150.644
        },
        zoom: 8
    };
    var markers =[
        {lat: -34.397, lng: 150.644},
        {lat: -34.397, lng: 150.644}
    ]
    var markerIcon = 'https//'
    if (map) {
        map = new google.maps.Map(mapContainer, mapOptions);
        markers.forEach(function(marker) {
            new google.maps.Marker({
                position: uluru,
                map: map
            });
        });    
    }
    
}