
$(document).ready(function () {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

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
                    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                });
                
                L.marker([51.5, -0.09], {icon: greenIcon}).addTo(mymap);
                //var marker = L.marker([51.5, -0.09]).addTo(mymap);
});


