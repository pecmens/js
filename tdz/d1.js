function foo6(v = function() { console.log(w); }) {

	let w = 3;

	v();

}

foo6();