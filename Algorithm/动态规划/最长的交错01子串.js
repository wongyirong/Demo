/**
 * 最长的交错01子串
 * 只要保存以0结尾和以1结尾的最长序列，如果当前元素为1，就取保存的0长度加1和1的长度的最大值，o(N)的时间复杂度
 */
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

console.log(longest(3, [0,1,0]));//3
console.log(longest(8, [1,1,0,0,1,1,0,0]));//4