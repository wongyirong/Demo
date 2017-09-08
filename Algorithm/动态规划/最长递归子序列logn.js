function LIS(A, n) {
    const B = [];
    B[0] = A[0];
    let end = 0;
    for (let i = 1; i < n; ++i) {
        // 如果当前数比B中最后一个数还大，直接添加
        if (A[i] >= B[end]) {
            B[++end] = A[i];
            continue;
        }         // 否则，需要先找到替换位置
        let pos = findInsertPos(B, A[i], 0, end);
        B[pos] = A[i];
    }
    return end + 1;
}
/**
 * 二分查找第一个大于等于n的位置
 */
function findInsertPos(B, n, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (B[mid] < n) {
            start = mid + 1;
        } else if (B[mid] > n) { 
            end = mid;
        } else {
            return mid;
        }
    }
    return start;
}
/*测试*/
console.log(LIS([89, 256, 78, 1, 46, 78, 8], 7));
console.log(LIS([6, 4, 8, 2, 17], 5));