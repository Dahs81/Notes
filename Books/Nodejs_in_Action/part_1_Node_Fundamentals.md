# Part I : Node Fundamentals

## Chapter 1
> - Node runs on Google's V8
> - Checkout: jslinux
> - Based on javascript : Good with MongoDB/CouchDB, JSON
> - More than 15,000 modules through npm

#### Async/Non-blocking I/O
- Example (async/non-blocking):

```
$.post('/resource.json', function (data) {
	console.log(data);;
});
```

*This allows the script to continue without having to wait for a response from the server.*
- Example (blocking I/O);

```
var data = $.post(/resource.json);
console.log(data);
```

*In this example,* **EVERYTHING** *must wait until the response is returned before it can continue on.*
*This is obviously bad if there in an animation going on or the user is interacting with your page.*

#### Event Loop
- ???

#### Server
> - Blocking I/O and multithreading
> - a

#### DIRTy Applications
> - DIRT: Data-intensive real-time applications
> - Example: browserling.com

## Chapter 2
#### Setting up a chat application using Socket.io
> 1.  Install node/npm
			-  
> 2.  Directory structure for an application: (see page 29 for diagram)

```
	> MyProject
		> lib (contains socket.io server file)
		> public (html files, etc)
			index.html
			other.html
			> javascripts (js files)
			> stylesheets (css/scss files)
		server.js
		package.json
```

#### Socket.io

ON PAGE 44

## Chapter 3: Node Programming fundamentals - page 51
#### Modules
> - a

> - MORE FROM GITHUB
> - Here is a basic setup for the files needed to create a npm module:

```
	> lib
	> test
	  .gitignore
	  .npmignore
	  History.md
	  Makefile
	  Readme.md
	  index.js
	  package.json
```

#### Async programming
#### Example 1

```
	function asyncFunction (callback) {
		setTimeout(function () {
			callback();
		}, 200);
	}
	var color = 'blue';
	asyncFunction(function () {
		console.log('The color is: ' + color);
	});
	color = 'green';
```

> **OUTPUT:** 'The color is: green'
> *Because the callback function is async, the program continues on after the call to asyncFunction.  The color variable is immediately set to green.  After 200 ms, the async function is returned and the console message outputs 'green'.*
	
#### Example 2

```
	function asyncFunction (callback) {
		setTimeout(function () {
			callback();
		}, 200);
	}
	var color = 'blue';
	(function (color){
		asyncFunction(function () {
			console.log('The color is: ' + color);
		})
	})(color);
	color = 'green';
```

> *By making color an argument for an anonymous function, it becomes local to the scope of that function and when the value of color is changed outside of the anonymous function, the local version is unaffected.*
> *This trick wraps asyncFunction in a closure.*

ON PAGE 59 (IN COMPUTER BOOK)





