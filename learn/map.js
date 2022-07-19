var arrs = Array.from(new Array(100).keys());

var rands = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var target = rands(1, 99);

var tn = function(arrs, target) {
	const maps = new Map();
	for(let j = 0; j < arrs.length; j++) {
		if(maps.has(target - arrs[j])) {
			return [maps.get(target - arrs[j]), j];
		}

		maps.set(arrs[j], j);
	} 

	return [];
}

console.log(tn(arrs,target))