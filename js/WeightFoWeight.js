/**
 * Created by masf on 2018/6/9.
 */
/**
 *My friend John and I are members of the "Fat to Fit Club (FFC)".
 * John is worried because each month a list with the weights(权重) of members is published and
 * each month he is the last on the list which means he is the heaviest.

 I am the one who establishes(建立) the list so I told him:
 "Don't worry any more, I will modify the order of the list".
 It was decided to attribute a "weight" to numbers.
 The weight of a number will be from now on the sum of its digits.

 For example 99 will have "weight" 18, 100 will have "weight" 1
 so in the list 100 will come before 99.
 Given a string with the weights of FFC members in normal order
 can you give this string ordered by "weights" of these numbers?

 Example:

 "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

 When two numbers have the same "weight", let us class them as if they were strings and not numbers:
 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and
 180 is before 90 since, having the same "weight" (9) it comes before as a string.

 All numbers in the list are positive numbers and the list can be empty.

 Notes

 it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
 Don't modify the input
 For C: The result is freed(释放).
 */

// my solution
function orderWeight(string) {
    function sumOfString(string) {
        return string.split('').reduce(function (p1, p2, p3, p4) { return Number(p1) + Number(p2) });
    }

    return string.split(/\s/).filter(function (p1, p2, p3) {
        return p1.length != 0;
    }).sort(function (o1, o2) {
        var v1 = sumOfString(o1);
        var v2 = sumOfString(o2);
        if (v1 == v2) {
            return (o1 < o2) ? -1 : ((o1 > o2) ? 1 : 0);
        } else {
            return v1 - v2;
        }
    }).join(' ');
}

// other solution
function orderWeight(strng) {
    return strng
        .split(" ")
        .map(function(v) {
            return {
                val: v,
                key: v.split("").reduce(function(prev, curr) {
                    return parseInt(prev) + parseInt(curr);
                }, 0)
            };
        })
        .sort(function(a, b) {
            return a.key == b.key
                ? a.val.localeCompare(b.val)
                : (a.key - b.key);
        })
        .map(function(v) {
            return v.val;
        })
        .join(" ");
}