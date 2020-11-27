let f = 1;

function foo2(e = function() { console.log(f); }, f = 2) {

	e();

	f = 3;

	e();

}

foo2();

console.log(f);