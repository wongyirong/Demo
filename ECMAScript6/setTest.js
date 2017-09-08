/*forEach可以用于Array、Set、Map，缺点是不能break*/
/*用于对每个成员执行某种操作，没有返回值。*/
const set = new Set([1,2,3]);
console.log(...set);
set.forEach((value, key) => console.log(value * 2) );

/*Array、Set、Map使用for...of*/
/*Array使用for...of*/
const arr = ['red', 'green', 'blue'];
console.log(arr);
for(let v of arr) {
  console.log(v); // red green blue
}

/*Set使用for...of*/
const engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
console.log(engines);
for (let e of engines) {
  console.log(e);
}

/*Map使用for...of*/
var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
console.log(es6);
for (let [name, value] of es6) {
  console.log(name + ": " + value);
}

/*遍历对象用for..in*/

/*数组去重*/
let uniArr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(uniArr)];
console.log(unique)