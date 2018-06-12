/**
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor(prime factor 质因子) (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. 
The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, 
the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
**/

// my solution
function sumOfDivided(lst) {

	function isPrimer(number) {
		for (var i = 2; i <= number / 2; i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	};

	function findPrimers(number) {
		if (number < 0) { number = -1 * number; }
		var array = new Array();
		for (var i = 2; i <= number; i++) {
			if (isPrimer(i)) {
				array = array.concat(i);
			}
		}
		return array;
	};

	var o = new Object();
	lst.forEach(function(v) {
		var primers = findPrimers(v);
		primers.forEach(function(p) {
			if (v % p === 0) {
				if (o[p] === undefined) {
					o[p] = 0;
				} 
				o[p] += v;			
			}
		});
	});
	
	var retArray = new Array();
	var keys = Object.keys(o);
	keys.forEach(function (key) {
		retArray.push(new Array(parseInt(key), o[key]));
	})
	return retArray;
}

// other solution
function sumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) primes.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}