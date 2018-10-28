function createMap(){

	L.mapbox.accessToken = 'pk.eyJ1Ijoic3RhY2Vycm9sbCIsImEiOiJjam5yb2RnaXQwMnZxM2tud3VrbGw1NTh2In0.qFb7Gekr9HLCBQ3F8nqfkQ';
	var map = L.mapbox.map('map', 'mapbox.streets').setView([31, -81], 6);
	map = addMarker([31,-81], map);
}

function addMarker(p1, p2, map){
	L.marker([p1, p2]).addTo(map);
	return map;
}

