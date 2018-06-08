/**
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
**/

// my solution
function findShort(s){
	var length = Number.MAX_VALUE;
	s.split(' ').forEach( function(value) {
		if (length > value.length) {
			length = value.length;
		}
	})
	return length;
}

// other solution
function findShort(s){
	return Math.min.apply(null, s.split(' ').map(w => w.length));
}