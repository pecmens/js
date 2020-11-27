function two() {

	"use strict";

	let n = 1;

	function foo3() {

		let m = arguments[0] !== (void 0) ? arguments[0] : function() {
			
			console.log(n);
		
		};

		let n = arguments[1] !== (void 0) ? arguments[1] : 2;

		m();

		n = 3;

		m();

	}

	foo3();

	console.log(n);

	return {};
}