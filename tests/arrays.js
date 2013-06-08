var _ = require('underscore');


var u = _;

var array_one = ['test', 'more'];

var test = array_one['test'] = 'aaabbbccc';
console.log(test);
console.log(array_one);
console.log(array_one[1]);

// Arrays should be accessed with numbers, in my opinion.
