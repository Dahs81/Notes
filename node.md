# NODE NOTES

## Node's 'out-of-the-box' Modules
	a.  http
		- Setting up a server
			var http = require('http');
			var server = http.createServer();
			server.on('request', function (req, res) {
				res.send(...);
			});
			server.listen(3000);
			console.log('Server listening on port 3000');
			OR
			var http = require('http');
			var server = http.createServer(function (req, res) {
				res.send(...);
			}).listen(3000);
			console.log('Server listening on port 3000');

	b.  qs
		- qs == querystring
		- 

	c.  url

	d.  fs

	e.  cluster (multithreading)

	f.  crypto

	g.  net

	h.  modules

	i.  path

	j.  

## Modules (third party)
	a.  node-debug

	b.  express
		- 
		- Production Mode
			NODE_DEV=production node app.js

	c.  async
		- map:
			arg1 - an array of data 
			arg2 - this is an iterator function that takes an item and callback,
			arg3 - callback(err, results) function that calls the callback 
			Example:
				var myTestFunction = function (item, callback) { 
					var x = item + ' added something.';
					console.log(x);
				};
				async.map(['file1','file2','file3'], myTestFunction, function(err, results){ callback(results) });

	d.  request

	e.  

## npm
1.  npm install --save  NOTE: you can make an alias that does this for you.
##### Making a private node module
> 1.  Create the module you want
> 2.  In package.json:

	```
	{
		"name": "project_name",
		"author": {
			"name": "Shad Beard",
			"email": "myEmail"
		},
		"version": "0.1.0",
		"scripts": {
			"start": "node app"
		},
		"dependencies": {
			LIST OR DEPENDENCIES...
		}
	}
	```

> 3.  Create an index.js that requires the lib/*.js file
	- module.exports = require('./lib/\<MyModule\>.js');
> 4.  Go to the project you want to install the module in and add this line to package.json (in dependencies object):
	-  "project_name": "git+ssh://git@198.61.232.162:project_name"
> 5.  Make sure private is true in package.json
> 6.  $ npm install
> 7.  require the module in your project
	- i.e. var md = require('myModule');



