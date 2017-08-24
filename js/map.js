var map;

function initMap() {
    var mapContainer = document.getElementById('map');
    console.log(mapContainer);
    var mapOptions = {
        center: 
            {lat: 59.91679249835787, 
            lng: 30.331670529296826
        },
        zoom: 11
    };
    var markers =[
        {lat: 59.90691324640402, lng: 30.683717152246196},
        {lat: 59.93328542148352, lng: 30.561837574609484}
    ];
    var markerIcon = '../img/icons/map-marker.png';
    if (mapContainer) {
        map = new google.maps.Map(mapContainer, mapOptions);
        markers.forEach(function(marker) {
            new google.maps.Marker({
                position: marker,
                icon: markerIcon,
                map: map
            });
        });    
    }
    
}