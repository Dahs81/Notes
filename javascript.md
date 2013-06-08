javascript.notes

## Basics

1.  Functions


2.  Classes - Prototype
	- new prefix operator
	
	```
	function new(func, arguments) {
		var that = Object.create(func.prototype);
			result = func.apply(that, arguments);
		return (typeof === 'object' && result) || that);
	}
	```

3.  Objects
	- Looping over objects

```
var obj = {
	service_1: {
		name: 'service_1',
		props: ['p1', 'p2', 'p3']
	},
	service_2: {
		name: 'service_1',
		props: ['x1', 'x2']
	}
};

// Gives you back the names of services
for (var key in obj) {
	console.log(obj[key].name);
}

// Gives you back the array of props
for (var key in obj) {
	console.log(obj[key].props);
}

// Loop over the object using underscore
u.each(obj, function(result, index) {
	var name = result.name;
	console.log(name);
	var props = result.props;
	console.log(props);
});

```

##### Notes
	**Results:**
	1.  obj[key] is the keys to the main obj i.e. service\_1, service\_2
	2.  obj[key].name gets the name property for each service in obj i.e. service\_1\_prop, service\_2\_prop
	3.  obj[key].props gets the props property for each service in obj i.e. 'p1,p2,p3', 'x1,x2'.  *This is really an array.*

	Other Notes:
	1.  To retrieve keys: obj[key]
	2.  To retrieve values for keys: obj[key].prop

4.  Arrays


5.  Dates
	- Converting a string to a Date object:
		var dateStr = 'Fri Nov 11 2011 11:11:11 GMT-0500 (EST)';
		var date = Date.parse(dateStr);

6.  Errors
	####  Creating custom errors
	**Option 1**
		 
	```
		function MyCustomError(msg) {
			Error.call(this);
			Error.captureStackTrace(this, arguments.callee);
			Error.message = msg || 'Error';
			Error.name = 'My Custom Error';
		}
			
		MyCustomError.prototype.__proto__ = Error.prototype;
	```

	**Option 2**

	```
	   	function UserError(message) {
  			this.constructor.prototype.__proto__ = Error.prototype  // Make this an instanceof Error.
  			Error.call(this)                                        // Does not seem necessary. Perhaps remove this line?
  			Error.captureStackTrace(this, this.constructor)         // Creates the this.stack getter
  			this.name = this.constructor.name;                      // "UserError: message" instead of the default "Error: message"
  			this.message = message;                                 // Used to set the message
		}
	```

	**NOTE:**
	> I keep this.constructor.prototype.__proto__ = Error.prototype inside the function to keep all the code together. But you can also replace this.constructor with UserError and that allows you to move the code to outside the function, so it only gets called once.

	> If you go that route, make sure you call that line before the first time you throw UserError.

	> That caveat does not apply the function, because functions are created first, no matter the order. Thus, you can move the function to the end of the file, without a problem.

	   **Option 3**


	####  Using custom Errors:
		TODO:  show some examples

7.  Number
	- Converting numbers to string:

	```
	str = num.toString();
	str = String(num);  //Works with null and undefined
	```

	- Convert string to number:

	```
	num = Number(str);
	num = +str;
	```


## Advanced

1.  Regexp


2.  Building functions (by returning a function)

3.  Callbacks ???
	
	```
	// callback is a function invoked somewhere else - callback takes one arg
	var myFunct = function(a, b, callback) {
		var total = a + b;
		callback(total);  // The number of args here is how many args should be in your callback function.
	}

	myFunct(3, 4, function(answer) {
		console.log(answer);
	});
	```

## Libraries

1.  underscore.js


2.  jQuery


3.  jQueryUI


4.  