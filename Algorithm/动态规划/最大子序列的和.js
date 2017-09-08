var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

//求连续子数组的最大和
var n = parseInt(readline());
var line=readline();
var lines = line.split(" ");

print(maxSum(lines));


function maxSum(lines) {
	var sum = max = parseInt(lines[0]);
	for(var i = 1; i < lines.length; i++) {
		if(max <= 0) {
			max = parseInt(lines[i]);
		} else {
			max += parseInt(lines[i]);
		}
		if(max > sum) {
			sum = max;
		}
	}
	return sum;
}