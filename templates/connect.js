/**
 * Created by mansivirani on 05/06/17.
 */
var socket = io();
$(document).ready(function(){
	check_pos = setInterval(function(){ //create a loop and wait for the response
		if(typeof pos != 'undefined'){ //while the position is not defined the loop is checking every half seconds
			socket.emit('new_user', {pos: pos});
			clearInterval(check_pos);
		}
	}, 500);

    socket.on('location', function(msg) {
           pos = {
		lat: msg.lat,
		lng: msg.lng
	};

           $('#test').append('<li>'+pos+'</li>');
           addMarker(pos);


// {#        console.log(msg.lng);#}
// {#        console.log(msg.lat)#}

    });
	   socket.on('connect', function() {
                socket.emit('connected');
            });


	socket.on('disconnected', function(data){
		//we can now delete this position:
		var markerId = getMarkerUniqueId(data.del.lat, data.del.lng); // get marker id by using clicked point's coordinate
		var marker = markers[markerId]; // find marker
		removeMarker(marker, markerId); // remove it
		$("#users_count").html("<strong>" + data.users_count +"</strong>" + " connected users");
	});
});