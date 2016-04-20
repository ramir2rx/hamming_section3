var compute;

/*
* Compute the hamming distance 
* Between two strands of DNA
*/
compute = function (s1, s2) {
	var distance = 0;
	if(s1.length != s2.length)
		throw new Error("DNA strands must be of equal length.");

	for(var i = 0; i < s1.length; i++) {		
		if(s1[i] != s2.charAt(i)) {
			distance++;
		}
	}
	return distance;
}

module.exports = {
	compute: compute
}
