/**
 * Created by mansivirani on 05/06/17.
 */

function showPosition(position) {
	pos = {
		lat: parseFloat(position.coords.latitude),
		lng: parseFloat(position.coords.longitude)
	};

}
function hidePosition(position) {
	alert('User denied the access of the position. Now we trying to get your location through your IP address.');
	ipPosition();
}
function ipPosition(){
	$.get("http://ipinfo.io", function (response) {
		var loc = response.loc.split(',');
		pos = {
			lat: parseFloat(loc[0]),
			lng: parseFloat(loc[1])
		};
	}, "jsonp");
}
getLocation();