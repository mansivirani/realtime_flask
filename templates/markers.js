/**
 * Created by mansivirani on 05/06/17.
 */
var markers = [];
var getMarkerUniqueId= function(lat, lng) {
	return lat + '_' + lng;
}
function addMarker(location) { // Adds a marker to the map and push to the array.
	var markerId = getMarkerUniqueId(location.lat, location.lng); // that will be used to cache this marker in markers object.
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.DROP,
		id: markerId
	});
	markers[markerId] = marker;
}
var removeMarker = function(marker, markerId) {
	marker.setMap(null); // set markers setMap to null to remove it from map
	delete markers[markerId]; // delete marker instance from markers object
};