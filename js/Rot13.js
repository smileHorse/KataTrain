/**
ROT13 is a simple letter substitution(代替) cipher(密码) that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher(凯撒加密法).

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.
**/


// my solution
function rot13(message){
	var lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
	var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	message.split('').map(function(v) {
		var index = lowAlphabet.indexOf(v);
		if(index !== -1) {
			index = ((index + 13) >= lowAlphabet.length) ? (index + 13 - lowAlphabet.length) : (index + 13);
			return lowAlphabet.charAt(index);
		} else if (index = upperAlphabet.indexOf(v), index !== -1) {
			index = ((index + 13) >= upperAlphabet.length) ? (index + 13 - upperAlphabet.length) : (index + 13);
			return upperAlphabet.charAt(index);
		} else {
			return v;
		}
	}).join('');
}

// other solution
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}