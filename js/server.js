// Variables
var extensionId = "oflocnpllkmhafmbbhcfkibjmadimlof";

function startStreaming() {
	// Initiate the streaming flow
	chrome.runtime.sendMessage(extensionId, {startStreaming: true}, function(response) {
		if (!response) {
	      	$('#requesting-permission').addClass('d-none');
	    	$('#requesting-permission-error').removeClass('d-none');
		} else {

		}
	});
}

function checkInstallStatus() {
	// First, we check if the extension is installed.
	chrome.runtime.sendMessage(extensionId, {isInstalled: true}, function(response) {
	    if (response) {
	      $('#requesting-permission').removeClass('d-none');
	      startStreaming();
	    } else {
	      $('#not-installed').removeClass('d-none');
	    }
	});
}

$(document).ready(function() {
	console.log('test');
	checkInstallStatus();
});