/*let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]); */
let a = ['qq', 'baidu', 'sina', 'jd', 'tencent'];
let b = ['qq', 'qq', 'jd'];

// 并集
//let unionSet = new Set([...a, ...b]);
//[1,2,3,5]

// 交集
//let intersectionSet = new Set([...a].filter(x => b.has(x)));
// [2,3]

// ab差集

let bSet = new Set(b);
let differenceAB = new Set(a.filter(x => !bSet.has(x)));

let arr = [...differenceAB];
console.log(arr)