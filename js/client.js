var peer = new Peer({key: 'y180ev3ts2zw7b9'});
var video = document.querySelector('video');

// Call a peer, providing our mediaStream
var call = peer.call(serverId, stream);

call.on('stream', function(stream) {
	video.srcObject = stream;
});