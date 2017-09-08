/**
 * 每次只能上一级或者两级台阶，上到n级有多少种
 */
function steps(n) {
    if (n < 1) {
        return 0;
    } else if (n == 1 || n == 2) {
        return n;
    } else {
        return steps(n - 1) + steps(n - 2);
    }
}
console.log(steps(4));

/**
 * 最小路径和
 */
const tArray = new Array(); //先声明一维
for (let k = 0; k < i; k++) { //一维长度为i,i为变量，可以根据实际情况改变  
    tArray[k] = new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组
}