// Variables
var extensionId = "oflocnpllkmhafmbbhcfkibjmadimlof";

function startStreaming() {
	// Initiate the streaming flow
	chrome.runtime.sendMessage(extensionId, {startStreaming: true}, function(response) {
		if (response.false) {
			console.log('failed to start streaming')
		} else {

		}
	});
}

function checkInstallStatus() {
	// First, we check if the extension is installed.
	chrome.runtime.sendMessage(extensionId, {isInstalled: true}, function(response) {
	    if (response) {
	      $('#installed').removeClass('d-none');
	      startStreaming();
	    } else {
	      $('#not-installed').removeClass('d-none');
	    }
	});
}

$(document).ready(function() {
	checkInstallStatus();
});