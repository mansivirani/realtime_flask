/**
 * Created by mansivirani on 05/06/17.
 */

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.037, lng: 14.974},
		zoom: 2
	});
}
