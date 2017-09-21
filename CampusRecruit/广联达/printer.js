/*矩阵打印*/
function arrayPrint(arr, n) {
    let row = 0,
        col = n - 1;
    const res = [];
    while (row < n) {
        let i = row,
            j = col;
        while (i < n && j < n) {
            res.push(arr[i][j]);
            i++;
            j++;
        }
        if (j == n && i < n) {
            col--;
        }
        if (i == n) {
            row++;
        }
    }
    return res;
}
console.log(arrayPrint([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4));