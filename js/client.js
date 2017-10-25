var peer = new Peer({key: 'y180ev3ts2zw7b9'});
var video = document.querySelector('video');

var canvas = document.querySelector('canvas');
var stream = canvas.captureStream(1);

// Call a peer, providing our mediaStream
var call = peer.call('qubucljenfmyrpb9', stream);

call.on('stream', function(stream) {
	video.srcObject = stream;
});