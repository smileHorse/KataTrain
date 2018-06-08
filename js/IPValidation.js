/**
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

Input to the function is guaranteed to be a single string.

Examples

// valid inputs:
1.2.3.4
123.45.67.89

// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
**/

// my solution
function isValidIP(str) {
	var array = str.split('.');
	if (array.length != 4) {
		return false;
	}  
	var result = true;
	array.forEach(function(p) {
		var value = Number(p).toString();
		if (value != p || Number(p) >= 256) {
			result = false;
		}
	})
	return result;
}

// other solution
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}