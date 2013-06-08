## Streams

### Readable Streams
##### Example 1


##### Example 2

### Writable Streams
##### Example 1

```

```

##### Example 2

```
var fs = require('fs'),
	writeStream = fs.createWriteStream('output.txt');

writeStream.write('This will get written to a file called output.txt');
writeStream.end();
```

##### Example 3

```
var fs = require('fs'),
	writeStream = fs.createWriteStream('output.txt');

// NOTE: process.stdin is a readable stream
process.stdin.pipe(writeStream);
```

#### Creating a writable stream from stratch

```
var fs = require('fs'),
	Stream = require('stream');

var ws = new Stream;
ws.writable = true;

ws.write = function(buf) {
	console.log('buf = ' + buf);
};

ws.end = function(buf) {
	if ( arguments.length ) ws.write(buf);
	console.log('DONE');	
};

process.stdin.pipe(ws);
```
