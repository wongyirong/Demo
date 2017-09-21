/*输入一个已经按升序排序过的数组和一个数字，在数组中查找两个数，使得它们的和是输入的那个数字，
要求时间复杂度为O(n)，如果有多对数字的和等于输入的数字，输出任意一对即可。*/
function Main(arr,n) {
	let i = 0;
    let j = arr.length - 1;
    while (arr[i] + arr[j] != n) {
        if (arr[i] + arr[j] > n) {
            j--;
        } else {
            i++;
        }
    }
    return arr[i]+" "+arr[j];
}
console.log(Main([1,2,3,4,5],4));