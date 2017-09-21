var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var readline = __readline.prompt;

/*let n = parseInt(readline());
print(uglyNum(n));*/
/**
 * [uglyNum 丑数]
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
/*function uglyNum(n) {
    if (n <= 0) {
        return 0;
    }
    let res = [];
    let count = 0;
    let i = 0,
    j = 0,
    k = 0;

    res[0] = 1;
    let tmp;
    while (count < n - 1) {
        tmp = min(res[i] * 2, min(res[j] * 3, res[k] * 5));
        if (tmp == res[i] * 2) {
        	i++; 
        }
        if (tmp == res[j] * 3) {
        	j++;
        }
        if (tmp == res[k] * 5) {
        	k++;
        }
        res[++count] = tmp;
    }
    return res[n - 1];
}

function min(a, b) {
    return (a > b) ? b : a;
}*/

/*xor异或*/
let n = parseInt(readline());
let line = readline();
lines = line.split(" ");
for (let i = 0; i < n; i++) {
    lines[i] = parseInt(lines[i]);
}
print(xor(n, lines));

function xor(n, lines) {
    let res = [];
    let count = 0;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        temp ^= lines[i];
        if (temp == 0 || (res[temp] != 0 && res[temp] != undefined)) {
            temp = 0;
            count++;
            res.fill(0);
        } else {
            res[temp] = res[temp] + 1;
        }
    }
    return count;
}