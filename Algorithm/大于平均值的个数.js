function overAve(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let ave = sum/arr.length;
	let res = 0;
	for(let j = 0; j < arr.length; j++) {
		if(arr[j] > ave) {
			res++;
		}
	}
	return res;
}
console.log(overAve([1,2,3,4,5]));