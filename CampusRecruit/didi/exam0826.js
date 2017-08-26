var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

//最大子序列
while(line=readline()){
    var lines = line.split(" ");
    var len = lines.length;
    var sum = max = parseInt(lines[0]);
    for(var i = 1; i < len; i++) {
    	if(max <= 0) {
    		max = parseInt(lines[i]);
    	} else {
    		max += parseInt(lines[i]);
    	}
    	if (max > sum) {
    		sum = max;
    	}
    }
    print(sum);   
}

//求第K大的数
var lines = readline().split(" ");
var n = parseInt(readline());
var num1 = lines.sort(function(a, b) {
	return b - a;
});
print(num1[n - 1]);
