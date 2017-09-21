/*数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。*/
function MoreThanHalfNum_Solution(numbers) {
    let i;
    let len = numbers.length;
    let result = 0,
        time = 0;
    for (i = 0; i < len; i++) {
        if (time == 0) {
            result = parseInt(numbers[i]);
            time = 1;
        } else if (numbers[i] == result) {
            time++;
        } else
            time--;
    }
    if (confirmNum(numbers, result, len)) {
        return result;
    } else {
        return 0;
    }
}

function confirmNum(numbers, number, len) {
    let time = 0,
        i;
    for (i = 0; i < len; i++) {
        if (numbers[i] == number) {
            time++;
        }
    }
    if (time * 2 > len) {
        return true;
    } else
        return false;
}

const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 3];
console.log(MoreThanHalf(numbers));