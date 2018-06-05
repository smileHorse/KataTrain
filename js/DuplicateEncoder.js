/**
The goal of this exercise is to convert a string to a new string
 where each character in the new string is '(' if that character appears only once in the original string, 
 or ')' if that character appears more than once in the original string. 
 Ignore capitalization(大写) when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("


Notes:

Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! 
(these languages are locked so that's not possible to correct it).
**/

// my solution  这种方案在处理包含'('或')'字符时有bug，比较烂的方法了
function duplicateEncode(word){
	var lowerWord = word.toLowerCase();
    var array = lowerWord.split('');
    var duplicateArray = new Array();
    var nonDuplicateArray = new Array();
    for (var i = 0; i < array.length - 1; i++) {
    	var index = array.indexOf(array[i], i + 1);
    	if (index != -1) {
    		duplicateArray = duplicateArray.concat(array[i]);
    		continue;
    	} 

    	if (duplicateArray.indexOf(array[i]) == -1) {
    		nonDuplicateArray = nonDuplicateArray.concat(array[i]);
    	} else {
    		duplicateArray = duplicateArray.concat(array[i]);
    	}
    }
    if (duplicateArray.indexOf(array[i]) == -1) {
		nonDuplicateArray = nonDuplicateArray.concat(array[i]);
	} else {
		duplicateArray = duplicateArray.concat(array[i]);
	}

	console.log(nonDuplicateArray);
	console.log(duplicateArray);


	nonDuplicateArray.forEach(function(value) {
		lowerWord = lowerWord.replace(value, '(');
	})

	duplicateArray.forEach(function(value) {
		lowerWord = lowerWord.replace(value, ')');
	})
	return lowerWord;
}

// other solution
function duplicateEncode(word){
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}