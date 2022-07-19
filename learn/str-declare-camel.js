let sdc = (str) => {
	return str.split('_').map((item, index) => {
		if (index == 0) {
			return item;
		} 
		return item[0].toLocaleUpperCase() + item.slice(1)
	}).join('');
}

console.log(sdc('Hello_World'));

//--------------------------------------------------------------------------------------------
//
let str = 'Hello_World';

console.log(str.split('_').map((item, index) => {
	if (index == 0) {
		return item;
	}
	return item[0].toLocaleUpperCase() + item.slice(1)
}).join(''));