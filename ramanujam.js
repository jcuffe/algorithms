// Generate Ramanujam numbers between 0 and n, where each number can be expressed as the sum of
// two unique pairs of cubes. So, for each distinct set of a, b, c, d, r = a^3 + b^3 = c^3 + d^3

function ramajamma(n) {
    let ramnums = [];
    let cube_pair_sums = {};

    for (let i = 1; i < n; i++) {
	for (let j = i + 1; j <= n; j++) {
	    let cubic_sum = Math.pow(i, 3) + Math.pow(j, 3);
	    if (cube_pair_sums[cubic_sum]) { // Found a match to a previously calculated sum
		ramnums.push(cubic_sum);
	    } else {
		cube_pair_sums[cubic_sum] = 1;
	    }
	}
    }
    return ramnums;
}
			

ramnumbers = ramajamma(3000);
ramnumbers.forEach((ramnum) => {
    console.log(ramnum);
});

console.log(`Found ${ramnumbers.length} Ramanujam numbers`);
