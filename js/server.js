// Variables
var extensionId = "oflocnpllkmhafmbbhcfkibjmadimlof";

$(document).ready(function() {
	// First, we check if the extension is installed.
	chrome.runtime.sendMessage(extensionId, {isInstalled: true}, function(response) {
	    if (response) {
	      $('#installed').removeClass('invisible');
	    } else {
	      $('#not-installed').removeClass('invisible');
	    }
	});
});