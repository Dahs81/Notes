/*
 *  From Substack's stream-handbook
 *  https://github.com/substack/stream-handbook
 */


var Stream = require('stream').Stream,
	fs = require('fs'),
	module = require('./module');

// var s = new Stream;
// s.writable = true;
// // s.readable = true;

// var bytes = 0;

// s.write = function(buf) {
// 	bytes += buf.length;
// 	console.log('bytes: ' + bytes);
// };

// s.end = function(buf) {
// 	if (arguments.length) s.write(buf);

// 	s.writable = false;
	
// };

// s.destroy = function(buf) {
// 	s.writable = false;
// };

// process.stdin.pipe(process.stdout, { end: false });

// var ws = fs.createWriteStream('./out.txt');
// // Sort of equivalent to cat
var ws = fs.createWriteStream('out.png');
fs.createReadStream('./logo.png')
	.pipe(module())
	.pipe(ws);
	

//process.stdin.pipe(rs);

