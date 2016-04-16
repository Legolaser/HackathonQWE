
var currentLocation;
var nearbyData;
var mymap;

$(document).ready(function () {
    
    function getMap() {
//        var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        mymap = L.map('mapid').setView([currentLocation.coords.latitude, currentLocation.coords.longitude], 15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(mymap);

        var playerIcon = L.icon({
            iconUrl: 'images/Bod.png',

            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 0], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
        });

        var player = L.marker([currentLocation.coords.latitude, currentLocation.coords.longitude], {icon: playerIcon}).addTo(mymap);
        
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
    
    // AIzaSyBT4b--rA-x4piJX_SV0cDr2L9scuONyoc client key
    // AIzaSyDHK-koOjX7luePrU-oz-6t92wZEdWnVTY server key
    function getNearbyPois() {
        $.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+currentLocation.coords.latitude+","+currentLocation.coords.longitude+"&radius=500&type=food&key=AIzaSyDHK-koOjX7luePrU-oz-6t92wZEdWnVTY",
            success: function(data) {
                
                dataObj = data;
            
                for(var i = 0; i < dataObj.results.length; i++) {
                    for (var j = 0; j < dataObj.results[i].types.length; j++) {
                        if(dataObj.results[i].types[j] === "point_of_interest") {
                            var truhlaIcon = L.icon({
                                iconUrl: 'images/truhla.png',

                                iconSize:     [32, 32], // size of the icon
                                iconAnchor:   [16, 0], // point of the icon which will correspond to marker's location
                                popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
                            });
                            
                            var truhla = L.marker([parseFloat(dataObj.results[i].geometry.location.lat), parseFloat(dataObj.results[i].geometry.location.lng)], {icon: truhlaIcon}).addTo(mymap);
                            truhla.bindPopup("<b>"+dataObj.results[i].name+"</b><br><center><button>tezit!</button></center>")
                        }
                    }
                }
            }
        })
        .fail(function(err) {
            alert( "Something went wrong: " + err.responseText );
        });
    }
    
    getLocation();
    
});
            var postava = {
                level : 1, 
                zdravi : 100,
                sila : 1,
                stamina : 100,
                hlad : 100,
                zizen : 100  
            }

            var kamen = {
                sila:10,
                stamina: 10,
                opotrebeni: 5
                };

            var drevo = {
                sila:12,
                stamina: 12,
                opotrebeni: 5
                };

            var sekera = {
                sila:20,
                stamina: 18,
                opotrebeni: 8
            };

            var nuz = {
                sila:15,
                stamina: 10,
                opotrebeni: 5
            };
            
            var pistol = {
                sila:15,
                stamina: 10,
                opotrebeni: 5
            };
            
            var puska = {
                sila:15,
                stamina: 10,
                opotrebeni: 5
            };
            
            var boxer = {
                sila:15,
                stamina: 10,
                opotrebeni: 5
            };
            
            var margotka = {
                hlad: 20,
                vaha:10,
                stamina: 10
            };
                
            var konzerva = {
                hlad: 50,
                vaha:15,
                stamina: 10
            };

            
            var maso = {
                hlad: 60,
                vaha:15,
                stamina: 10
            };
            
            var cokolada = {
                hlad: 60,
                vaha:15,
                stamina: 10
            };
            
            