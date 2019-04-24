var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
	console.log("I am screaming");
}

eventEmitter.on("scream", myEventHandler);

eventEmitter.emit("scream");

