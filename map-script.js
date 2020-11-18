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

//creating a marker
let artScienceMarker = L.marker([1.2863,103.8593]);
artScienceMarker.addTo(map);

//collapse-button
document.querySelector('#open-1').addEventListener('click', function(){
    document.querySelector('#mrt').style.display='block';
})
document.querySelector('#close-1').addEventListener('click', function(){
    document.querySelector('#mrt').style.display='none';
})

document.querySelector('#open-2').addEventListener('click', function(){
    document.querySelector('#bus').style.display='block';
})
document.querySelector('#close-2').addEventListener('click', function(){
    document.querySelector('#bus').style.display='none';
})

document.querySelector('#open-3').addEventListener('click', function(){
    document.querySelector('#car').style.display='block';
})
document.querySelector('#close-3').addEventListener('click', function(){
    document.querySelector('#car').style.display='none';
})
