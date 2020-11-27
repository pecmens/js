let j = 1;

function foo4(i = function() { console.log(j); }) {

	let j = 3;

	i();
}

foo4();
