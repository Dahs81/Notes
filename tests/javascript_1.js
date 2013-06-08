var u = require('underscore');  // I installed this globally
var math = require('./export_style')();  // Make sure to call this!!!
var os = require('os');


var obj = {
	service_1: {
		name: 'service_1_prop',
		props: ['p1', 'p2', 'p3']
	},
	service_2: {
		name: 'service_2_prop',
		props: ['x1', 'x2']
	}
};

// Gives you back the names of services
for (var key in obj) {
	console.log(key);  // Gives you the key
	console.log('TEST_1: ' + obj[key].name);  // Gives you the values
}

// Gives you back the array of props
for (var key in obj) {
	console.log(key);  // Gives you the key
	console.log('TEST_2: ' + obj[key].props);  // Gives you the values
}

// Loop over the object using underscore
u.each(obj, function(result, index) {
	var name = result.name;
	console.log('NAME: ' + name);
	var props = result.props;
	console.log('PROPS: ' + props);
});

// Use of arrays
var a = obj.service_1.props;
for (var i = 0; i < a.length; i++) {
	console.log(i + ': ' + a[i]);
}

// for (var key in validation_messages) {
//    var obj = validation_messages[key];
//    for (var prop in obj) {
//       alert(prop + " = " + obj[prop]);
//    }
// }

// Better example using a realistic-like model
var model = {
	contact: {
		name: 'Contact',
		path: '/contact',
		description: 'Get all contact and social media information about <%COMPANY%> here'
	},
	about: {
		name: 'About Us',
		path: '/about',
		description: 'This is what we are all about!'
	},
	home: {
		name: 'Home',
		path: '/',
		description: 'Welcome!!!'
	}
};

var baseUrl = 'http://10.121.232.43';

console.log();
var better = 'Better example using a realistic-like model'.toUpperCase(); // This can be done, but shouldn't be.
//better = better.toUpperCase();
console.log(better);

for (var model_name in model) {
	var path = model[model_name].path;
	var name = model[model_name].name;
	var desc = model[model_name].description;

	var url = baseUrl + path;
	var header = '<h2>' + name + '</h2>';
	var subtitle = '<h4>' + desc + '</h4>';

	console.log();
	console.log(url);
	console.log(header);
	console.log(subtitle);
}

// More practice with underscore
console.log();
console.log('Example of underscore each function'.toUpperCase());
u.each(model, function(r) {
	console.log(r);  // r is the value of each property of the model, cannot get key with this method
});

var keys = u.keys(model);  // Returned as an array of keys
console.log();
console.log('Example of underscore keys'.toUpperCase());
console.log(keys);
var k = keys.splice(', ').join(' - ');
console.log(k);

console.log();
console.log('Example of...'.toUpperCase());
var pages = u.each(model, function(r) {
	var names = u.pick(r, 'name');
	console.log(names.name);
});

console.log();

// Sweet pattern for module.exports -- see export_style.js
console.log('testing out exports pattern'.toUpperCase());
var mathTest = math.add(3, 4);
console.log('MATH TEST(add): ' + mathTest);
var mathTest_2 = math.subtract(11, 9);
console.log('MATH TEST (subtract): ' + mathTest_2);

console.log('OS: ' + JSON.stringify(os.cpus()));

// ???????????????????????????????????????????????????????????????????????
// Y.prototype = new X() vs. Y.prototype = Object.create(X.prototype); ???






