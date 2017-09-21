var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

/**
 * 三根木棍，可以任一削短，求组成三角形最大周长
 * 输入1 2 3
 * 输出5
 */
/*var line = readline();
var lines = line.split(" ");
lines.sort(function compare(a, b) {
    return a - b;
});
for (let i = 0; i < 3; i++) {
    lines[i] = parseInt(lines[i]);
}
while (lines[2] >= lines[0] + lines[1]) {
    lines[2] = lines[2] - 1;
}
let sum = 0;
sum = lines[0] + lines[1] + lines[2];
print(sum);*/

/**
 * [红和绿]
 * R在最左边，G在最右边，RGRGR变成RRRGG，求最少的次数
 * 输入RGRGR
 * 输出2
 */
/*let line = readline();

function changeColor(line) {
    let totalR = 0;
    let totalG = 0;
    for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) == 'R') {
            totalR++;
        } else {
            totalG++;
        }
    }
    let r = 0;
    let g = 0;
    let res = Math.min(totalG, totalR);
    for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) == 'R') {
            r++;
        } else {
            g++;
        }
        let rightR = totalR - r;
        res = Math.min(res, g + rightR);
    }
    return res;
}

print(changeColor(line));*/


/*
let line = readline();
let lines = line.split(" ");
let x1 = lines[0];
let k1 = lines[1];
let x2 = lines[2];
let k2 = lines[3];
function repeat(x,k) {
	let res = "";
	while( k > 0) {
		res += x;
		k--;
	}
	return res;
}
let v1 = repeat(x1,k1);
let v2 = repeat(x2,k2);
if(v1 == v2) {
	print("Equal");
} else if(parseInt(v1) > parseInt(v2)){
	print("Greater");
} else {
	print("Less");
}*/

