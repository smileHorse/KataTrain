/**
Complete the method/function so that it converts dash(短)/underscore(下划线) delimited(分割) words into camel casing. 
The first word within the output should be capitalized(大写的) only if the original word was capitalized.

Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
**/

// my solution
function toCamelCase(str){
	var array = str.match(/[-_]\w/g);
	if (array === null) {
		return str;
	}

	array.forEach(function(value) {
	    str = str.replace(value, value.charAt(1).toUpperCase());
	});
	return str;
}

// other solution
function toCamelCase(str){
	var regExp=/[-_]\w/ig;
	return str.replace(regExp,function(match){
		return match.charAt(1).toUpperCase();
	});
}