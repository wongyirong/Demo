/*360笔试题中的ES6部分*/

function* range(m, n) {
    for (let i = m; i < n; i++) {
        yield i;
    }
}
console.log(...range(1, 10));

console.log("abc" === "abc");
console.log(Symbol(2) === Symbol(2));
console.log({x:1} === {x:1});

console.log(typeof [] === 'array');
console.log(String('a') === 'a');

[1,,3,,5].map(n=>n);

/*不要在函数体内使用arguments变量，使用rest运算符（...）代替。
因为rest运算符显式表明你想要获取参数，而且arguments是一个类似数组的对象，
而rest运算符可以提供一个真正的数组。*/
function concatenateAll(...args) {
  console.log(args.join('')); //把参数数组拼合成字符串与string的split相反
}
concatenateAll(1,2); 

/*es6的map*/


/*有四个操作会忽略enumerable为false的属性。
for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。es6新增*/

const person = {
	name:'yyqx',
	age:17
};

Object.prototype.sex = 'male';

Object.defineProperty(person, 'city', {
  value: 'changsha',
  writable: true,
  enumerable: false,
  configurable: true
});
for(var o in person) {
	console.log(o);
}

console.log(Object.getOwnPropertyDescriptor(person, 'sex'));//不在原型链上查找
console.log(Object.getOwnPropertyDescriptor(person, 'city'));


