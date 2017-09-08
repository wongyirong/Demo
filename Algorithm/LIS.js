var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var readline = __readline.prompt;

let T = parseInt(readline());
while (T--) {
    let n = parseInt(readline());
    const arr = readline().split(" ");
    for(let i = 0; i < n; i++) {
    	arr[i] = parseInt(arr[i]);
    }
    print(LIS(arr, n));
}

function LIS(arr, n) {
	const tempArr = [];
	tempArr[0] = arr[0];
	let end = 0;
	for (let i = 1; i < n; ++i) {
		if (arr[i] >= tempArr[end]) {
			tempArr[++end] = arr[i];
			continue;
		}
		let pos = findInsertPos(tempArr, arr[i], 0, end);
		tempArr[pos] = arr[i];
	}
	return end + 1;
}

function findInsertPos(tempArr, n, start, end) {
	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (tempArr[mid] < n) {
			start = mid + 1;
		} else if (tempArr[mid] > n) {
			 end = mid ;
		} else {
			return mid;
		}
	}
	return start;
}

/**
 * 小象学院讲解
 * @param {[type]} arr [description]
 * @param {[type]} n   [description]
 */
/*function LIS(arr, n) {
	let len = 0;
	let temparrrr = [];
	for (let i = 0; i < n; i++) {
		len = insert(temparrrr, len, parseInt(arr[i]));
	}
	return len;
}

function insert(array, length, x) {
	if(length <= 0) {
		array[0] = x;
		length = 0;
	}
	let low = 0;
	let high = length - 1;
	let mid;
	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		if(x < array[mid]) {
			high = mid - 1;
		} else if(x >= array[mid]){
			low = mid + 1;
		}
	}

	if(low >= length) {
		array[length] = x;
		length++;
	} else {
		if(array[low] < x) {
			array[low+1] = x;
		} else {
			array[low] =x;
		}
	}
	return length;
}
*/
/*function LIS(arr, n) {
    const len = [];
    let i, j;
    for (let k = 0; k < n; k++) {
        len[k] = 1;
    }
    let res = 1;
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (parseInt(arr[j]) <= parseInt(arr[i])) {
                len[i] = Math.max(len[i], len[j] + 1);
            }
        }
        res = Math.max(res, len[i]);
    }
    return res;
}*/
