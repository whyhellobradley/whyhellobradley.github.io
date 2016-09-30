// Set view of Leaflet map based on screen size

var layer = new L.StamenTileLayer('toner-lite');
if ($(window).width() < 626) {
	var map = new L.Map('map').setView([40.192963,-85.392665],13);
} else {
	var map = new L.Map('map').setView([40.192963,-85.392665],13);
}
map.addLayer(layer);
