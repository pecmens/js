function three() {

	"use strict";

	let q = 1;

	function foo5() {

		let p = arguments[0] !== (void 0) ? arguments[0] : function() {

			console.log(q);

		};

		function inners() {

			let q = 3;

			p();

		}

		inners();

	}

	foo5();

	return {};

}
