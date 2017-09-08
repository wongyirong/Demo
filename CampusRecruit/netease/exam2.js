var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;
/**
 * 最长的连续交错01子串
 * 输入 111101111
 * 输出 3
 */
let line;
while (line = readline()) {
    const lines = line.split('');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = parseInt(lines[i]);
    }
    let len = 1,
        res = 1;
    for (let i = 1; i < lines.length; i++) {
        if (lines[i] != lines[i - 1]) {
            len++;
            res = Math.max(len, res);
        } else {
            len = 1;
        }
    }
    print(res);
}