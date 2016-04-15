
var currentLocation;
$(document).ready(function () {
    
    function getMap() {
//        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        var mymap = L.map('mapid').setView([currentLocation.coords.latitude, currentLocation.coords.longitude], 15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(mymap);

        var greenIcon = L.icon({
            iconUrl: 'images/Bod.png',

            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 0], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
        });

        var player = L.marker([currentLocation.coords.latitude, currentLocation.coords.longitude], {icon: greenIcon}).addTo(mymap);
        //player.bindPopup("<b>nazev itemu</b><br>btn pro tezbu/loot")
        
        getNearbyPois();
    }
    
    function getLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
            currentLocation = position;
            getMap();
//        alert("Latitude: " + position.coords.latitude +
//        "<br>Longitude: " + position.coords.longitude);
        });
    }
    
    function getNearbyPois() {
        
    }
    
    getLocation();
    
});

