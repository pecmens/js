let gcd = function(na, nb) {
	
	var r = 1;

	while(true) {
		if (na % 2 != 0 && nb % 2 != 0) {
			na /= 2;
			nb /= 2;
			r *= 2;
		} else {
			break;
		}
	}

	while(true) {
		
		var bigs = function(na, nb) {
			if(na > nb) {
				return na;
			} else {
				return nb;
			}
		};
		var smalls = function(na, nb) {
			if(na < nb) {
				return na;
			} else {
				return nb;
			}
		};

		var big = bigs(na, nb);
		var small = smalls(na, nb);

		if(small * 2 == big) {
			return small * r;
		} else {
			na = small;
			nb = big - small;
		}

	}

}

let lcm = function(nc, nd) {
	return nc * nd / gcd(nc, nd);
}

let screen = function(ne, nf) {
	la = ne / gcd(ne, nf);
	lb = nf / gcd(ne, nf);

	return `${la} : ${lb}`
}

console.log(gcd(1920, 1080));
console.log(lcm(1920, 1080));
console.log(screen(1920, 1080));

