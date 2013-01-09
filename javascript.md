javascript.notes

Basics

1.  Functions


2.  Classes


3.  Objects


4.  Arrays


5.  Dates
	- Converting a string to a Date object:
		var dateStr = 'Fri Nov 11 2011 11:11:11 GMT-0500 (EST)';
		var date = Date.parse(dateStr);

6.  Errors
	####  Creating custom errors
	   Option 1
	    
		function MyCustomError(msg) {
			Error.call(this);
			Error.captureStackTrace(this, arguments.callee);
			Error.message = msg || 'Error';
			Error.name = 'My Custom Error';
		}
		
		MyCustomError.prototype.__proto__ = Error.prototype;

	   Option 2
	    
	   	function UserError(message) {
  			this.constructor.prototype.__proto__ = Error.prototype  // Make this an instanceof Error.
  			Error.call(this)                                        // Does not seem necessary. Perhaps remove this line?
  			Error.captureStackTrace(this, this.constructor)         // Creates the this.stack getter
  			this.name = this.constructor.name;                      // "UserError: message" instead of the default "Error: message"
  			this.message = message;                                 // Used to set the message
		}

		**NOTE:**  
		> I keep this.constructor.prototype.__proto__ = Error.prototype inside the function to keep all the code together. But you can also replace this.constructor with UserError and that allows you to move the code to outside the function, so it only gets called once.

		> If you go that route, make sure you call that line before the first time you throw UserError.

		> That caveat does not apply the function, because functions are created first, no matter the order. Thus, you can move the function to the end of the file, without a problem.

	   Option 3


	####  Using custom Errors:
		TODO:  show some examples



Advanced

1.  Regexp


2.  Building functions (by returning a function)


Libraries

1.  underscore.js


2.  jQuery


3.  jQueryUI


4.  