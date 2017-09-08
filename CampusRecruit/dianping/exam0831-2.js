var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

/**
 * 找出最长的01交错的子串，求最大长度
 * 输入整数n，输入序列的长度
 * 第二行n个0或1
 */
let n = parseInt(read_line());
const lines = read_line().split(" ");
print(longest(n, lines));

function longest(n, lines) {
    const len = [];
    for (let k = 0; k < n; k++) {
        len[k] = 1;
    }
    let res = 1;
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (lines[j] != lines[i]) {
                len[i] = Math.max(len[i], len[j] + 1);
            }
        }
        res = Math.max(res, len[i]);
    }
    return res;
}