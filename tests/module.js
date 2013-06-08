var Stream = require('stream').Stream;

module.exports = function() {  // could name this function - See through.js

	var stream = new Stream();

	stream.readable = true;
	stream.writable = true;

	stream.write = function(data) {
		// data = data.toString().toUpperCase();
		stream.emit('data', data);  // IDEA:  Create a function and run it against the data
	};

	stream.end = function() {
		stream.emit('end');
	};

	stream.destroy = function() {
		stream.emit('close');
	};

	return stream;
};