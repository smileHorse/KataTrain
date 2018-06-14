/**
Write a function called that takes a string of parentheses(圆括号), and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= input.length <= 100

You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.
**/

// my solution
function validParentheses(parens){
	var array = new Array();
	parens.split('').forEach(function(v) {
		if (v === '(') {
			array.push(v);
		} else if (v === ')') {
			if (array.pop() === undefined) {
				array.push(v);
			}
		}
	});
	return array.length === 0;
}

// other solution
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}