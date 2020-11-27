let b = 1;

function foo(a = b, b) {

	console.log(a);

}

foo();

//-----------------

function one() {

	"use strict";

	let d = 1;

	function foo1() {

		let c = arguments[0] !== (void 0) ? arguments[0] : d;
	
		let d = arguments[1];
	
	}

	foo1();
	
	return {};
}

//-----------------

let f = 1;

function foo2(e = function() { console.log(f); }, f = 2) {

	e();

	f = 3;

	e();

}

foo2();

console.log(f);

//-----------------

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

//------------------

let j = 1;

function foo4(i = function() { console.log(j); }) {

	let j = 3;

	i();
}

foo4();

//-------------------

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

//----------------------------

function foo6(v = function() { console.log(w); }) {

	let w = 3;

	v();

}

foo6();

//----------------------------

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
