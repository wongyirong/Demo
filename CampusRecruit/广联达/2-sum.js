/**
 * [twoSum 从有序数组中选出两个数字的和等于给定的值，数组已排序，要求时间复杂度O(n)]
 * @param  {[type]} arr   [给定的数组]
 * @param  {[type]} n [给定的值]
 */
function twoSum(arr, n) {
    let i = 0;
    let j = arr.length - 1;
    while (arr[i] + arr[j] != n) {
        if (arr[i] + arr[j] > n) {
            j--;
        } else {
            i++;
        }
    }
    let index = new Array(arr[i], arr[j]);
    return index;
}
console.log(twoSum([1,2,3,4,5,6], 4));