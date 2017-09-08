/**
 * [LIS 时间复杂度o(n2)]
 * @param {[type]} arr [description]
 * @param {[type]} n   [description]
 */
function LIS(arr, n) {
    const len = [];
    let i, j;
    for (let k = 0; k < n; k++) {
        len[k] = 1;
    }
    let res = 1;
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (arr[j] <= arr[i]) {
                len[i] = Math.max(len[i], len[j] + 1);
            }
        }
        res = Math.max(res, len[i]);
    }
    return res;
}
console.log(LIS([89, 256, 78, 1, 46, 78, 8], 7));
console.log(LIS([6, 4, 8, 2, 17], 5));