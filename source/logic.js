mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhdGhpcGlsbGFsYW1hcnJpIiwiYSI6ImNqbnJwMzc4YjBha2YzcG4ycXY0MWd5Mm4ifQ.XMMN4svUzWmVtjiw6lljeQ';

function tripSupplies(){
    var tripDetails = {


    }

}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-81, 31],
    zoom: 5
});

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "flag": "yellow",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -86.324462890625,
                    32.024695711685304
                ]
            }
        },
        {
            "type": "Feature",
            "flag": "red",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -79,
                    35.5976
                ]
            }
        },
        {
            "type": "Feature",
            "flag": "green",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -82.29223632812499,
                    32.28151823530889
                ]
            }
        },
        {
            "type": "Feature",
            "flag": "green",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -81.51223632812499,
                    27.66151823530889
                ]
            }
        }

    ]
};

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    if(marker.flag == "red"){
        el.style.backgroundImage = 'url(yellowdot.png)';
        el.addEventListener('click', function() {
            window.alert(
                "Date: \nSupplies Used: \nSupplies Needed: \nLocation: \nNext steps: ");
        });

    }else if(marker.flag == "yellow"){
        el.style.backgroundImage = 'url(reddot.JPG)';
        el.addEventListener('click', function() {
            window.alert("Date: \nSupplies Used: \nSupplies Needed: \nLocation: \nNext steps: ");
        });
    }
    else if(marker.flag == "green"){
        el.style.backgroundImage = 'url(green.jpeg)';
        el.addEvenListener('click', function() {
            window.alert("Satisfactory.");
        });
    }   
   el.style.width = '50px';
    el.style.height = '50px';

    
    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

window.onload = function(){

    var layers = ['Urgent', 'Moderate', 'Satisfactory'];
    var colors = ['#FF0000', '#FFFF00', '#33CC33'];
    for(var i = 0; i < layers.length; i++){
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');

        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.style.fontSize = 'xx-large';
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
}


                                                                  

