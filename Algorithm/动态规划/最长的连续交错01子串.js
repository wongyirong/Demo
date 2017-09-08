/**
 * 最长的连续交错01子串
 * 输入 111101111
 * 输出 3
 */
function longestRepeat(n, lines) {
    let len = 1,
        res = 1;
    for (let i = 1; i < n; i++) {
        if (lines[i] != lines[i - 1]) {
            len++;
            res = Math.max(len, res);
        } else {
            len = 1;
        }
    }
    return res;
}

console.log(longestRepeat(9, [1, 1, 1, 1, 0, 1, 1, 1, 1]));//3