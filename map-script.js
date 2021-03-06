//script for leaflet

//initialising the map view
let artScienceMuseum = [1.2863,103.8593]; 
let map = L.map('map').setView(artScienceMuseum, 15); 
// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

//creating a custom marker
var redLeaf = L.icon({
    iconUrl: 'images/leaf-red.png',
    shadowUrl: 'images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [1.2863,103.8593], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let artScienceMarker = L.marker([1.2863,103.8593],{icon: redLeaf});
artScienceMarker.addTo(map);

//marker's popout address
artScienceMarker.bindPopup(`<h5>Art Science Museum</h5>
                            <hr>
                            <img src='images/artsciencemuseum.jpg' height=50 width=90>
                            <img src='images/artsciencemuseum2.jpg' height=50 width=90>
                            <hr>
                            <p>6 Bayfront Ave, Singapore 018974<p>`)

