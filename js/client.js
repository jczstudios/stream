var peer = new Peer({key: 'y180ev3ts2zw7b9', debug: true});

var video = document.querySelector('video');

$(document).ready(function () {
	$('#join').click(function() {
		var call = peer.call($('#stream-id').val(), document.createElement('canvas').captureStream(0));

		call.on('stream', function(stream) {
			video.srcObject = stream;
		});
	});
});

