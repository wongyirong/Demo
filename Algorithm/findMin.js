/*数组排序或取得最大最小值总结*/
/*--------------------方法一：使用sort方法排序后取得数组第一个和最后一个--------------------*/
/*总结：改变了原数组的顺序，数组被改变，得到的索引地址是新数组的索引地址 */
function findMax(arr) {
/*	var copyArr = arr;
	console.log(copyArr);*/
	arr.sort(compare);
	//console.log(arr);
	var max = arr[arr.length-1];
	var min = arr[0];
    console.log("数组中最大的值为：" + max + "数组中最小的值为：" + min);
/*  var index1 = getIndex(copyArr, max);
	var index2 = getIndex(copyArr, min);
	console.log("数组中最大的值的索引为："+index1 + "数组中最小的值的索引为："+index2);
	console.log(copyArr);*///内存地址是一样的，sort之后改变了原数组也就是内存里的顺序，所以浅拷贝的也会变
}

function compare(value1, value2) {//升序1-2 降序2-1
	return value1 - value2;
}

findMax([0, 1, 10, 15, 5]);

/*--------------------------方法二：使用Math.min和Math.max方法-----------------------------*/
/*总结：也是只能纯数字，但是不会改变数组的顺序，可以得到正确的索引地址*/
function findMin(arr) {
	var max = Math.max.apply(Math, arr);
	var min = Math.min.apply(Math, arr);
	console.log("数组中最大的值为："+max+" 数组中最小的值为："+min);
	var maxIndex = getMinIndex(arr, max);
	var minIndex = getMinIndex(arr, min);
	console.log("数组中最大的值的索引为："+maxIndex + " 数组中最小的值的索引为："+minIndex);
}

function getIndex(copyArr, val) {
	for(var i in copyArr) {
		if(copyArr[i] == val){
			return i;
		}
	}
}

findMin([5, 3, 6, 7, 2, 1, 8, 10, 9, 4]);

/*-------------------------------方法三 for循环一一比较----------------------------------------*/

/*将数组中第一个元素赋值给一个变量，把这个变量作为最小值；
开始遍历数组，从第二个元素开始依次和第一个元素进行比较；
如果当前的元素小于当前的最小值的话，就把当前的元素值赋值给最小值；
移动到下一个元素，继续对第三步操作；
当数组元素遍历结束时，这个变量存储的就是最小值；*/
function findM(arr) {
	var max = arrayMax(arr);
	var min = arrayMin(arr);
	console.log("数组中最大的值为："+max+" 数组中最小的值为："+min);
	var maxIndex = getMinIndex(arr, max);
	var minIndex = getMinIndex(arr, min);
	console.log("数组中最大的值的索引为："+maxIndex + " 数组中最小的值的索引为："+minIndex);
}

// 查找数组中最大值
function arrayMax(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// 查找数组中最小值
function arrayMin(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function getIndex(copyArr, val) {
	for(var i in copyArr) {
		if(copyArr[i] == val){
			return i;
		}
	}
}
// 代码测试
findM([10,9,4,15,2,6,7,5]);

/*上面是对数组中的数值进行比较的，如果数组中的数字是字符串的话，
先要把字符串转换成数字再进行比较即可，因为字符串比较的不是值，而是ASCII编码，
比如2的ASCLL编码会大于15的ASCII编码，因为15的编码第一个数字是1,2的ASCII编码肯定大于1的；*/
/*--------------------------方法四 ES2015 展开运算符-------------------*/
var numbers = [1, 2, 3, 4]; 
Math.max(...numbers);
Math.min(...numbers);
