var peer = new Peer({key: 'y180ev3ts2zw7b9', debug: true});

var video = document.querySelector('video');

// Call a peer, providing our mediaStream
var call = peer.call('qwr04du17l8ilik9', document.createElement('canvas').captureStream(0));

call.on('stream', function(stream) {
	video.srcObject = stream;
});