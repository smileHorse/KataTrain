/**
Bob is preparing to pass IQ test. 
The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness(奇偶). 
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, 
and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
**/

// my solution
function iqTest(numbers){
	var array = numbers.split(' ');
	var even = array.filter(function(v) {
		return v % 2 === 0;
	});
	var odd = array.filter(function(v) {
		return v % 2 === 1;
	});
	return array.indexOf((even.length == 1) ? even[0] : odd[0]) + 1;
}

// other solution
function iqTest(numbers){
	numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
	var odd = numbers.filter(function(el){ return el % 2 === 1});
	var even = numbers.filter(function(el){ return el % 2 === 0});

	return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}