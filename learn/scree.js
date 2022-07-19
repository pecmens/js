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
		
		var bigs;
		var smalls;

		if (na > nb) {
			bigs = na;
			smalls = nb;
		} else {
			bigs= nb;
			smalls = na;
		}

		if(smalls * 2 == bigs) {
			return smalls * r;
		} else {
			na = smalls;
			nb = bigs - smalls;
		}

	}

}


console.log(gcd(240, 350));