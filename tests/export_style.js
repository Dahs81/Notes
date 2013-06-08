
module.exports = function() {

	// Any variables here

	function add(x, y) {
		// Will be executed when add is called
		another();
		return x + y;
	}

	function subtract(x, y) {
		var answer = x - y;
		return answer;
	}

	// This will no be exported because it is not in return below.
	function another() {
		console.log('this is just a helper function');
	}

	return {
		'add': add,
		'subtract': subtract
	};
};


// AN ALTERNATIVE STYLE FOR EXPORTS...
// SEE https://github.com/Ralt/express-boilerplate

// module.exports = {
//     getDatas: getDatas
// };

// function getDatas( callback ) {
//     callback( undefined, {
//         title: 'Some title',
//         text: 'Some text'
//     });
// }
