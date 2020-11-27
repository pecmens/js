function four() {

	"use strict";

	function foo7() {

		let x = arguments[0] !== (void 0) ? arguments[0] : function() {

			console.log(y);

		};

		function inners2() {

			let y = 3;

			x();

		}

		inners2();

	}

	foo7();

	return {};

}