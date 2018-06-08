/**
You are given an array strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive(连续的) strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
**/

// my solution  这个方案在随机单元测试下未通过，暂不清楚原因
function longestConsec(strarr, k) {
	if (strarr.length == 0 || k > strarr.length || k <= 0) {
		return "";
	}

	var newArr = strarr.map(function(p, i, s) {
		if (i + k <= s.length) {
			var str = '';
			for (var index = i; index < i + k; index++) {
				str += s[index];
			}
			return str;
		}
		return '';
	});
	newArr.sort(function(o1, o2) {
		return o1.length < o2.length;
	})
	return newArr[0];
}


// other solution
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0; k>0 && i<=strarr.length-k; i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
