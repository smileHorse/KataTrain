/**
An isogram(等值线) is a word that has no repeating letters, 
consecutive(连续) or non-consecutive(不连续). 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
**/

// my solution
function isIsogram(str){
	var lowStr = str.toLowerCase();
	var array = lowStr.split('');
	for (var i = 0; i < array.length - 1; i++) {
		if (lowStr.indexOf(array[i], i + 1) != -1) {
			return false;
		}
	}
	return true;
}

// other solution
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}