/*map*/
var arr = '1 1 2 3 4'.split(' ').map(Number);
console.log(arr);

var a = {};
var b = {key:'a'};
var c = {key:'b'};
a[b] = 123;
a[c] = 456;
console.log(a);
console.log(a[a]);
console.log(b.toString());//object作为key的时候会将它转换为字符串[object Object] 所以两个key一样的

const m = new Map();
const o = {p:"hello world"}; 
//使用set方法向Map结构添加成员，将对象o当作m的一个键，
//使用get方法读取这个键，接着使用delete方法删除了这个键。
m.set(o, 'content')
console.log(m.get(o));
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));

const map1 = new Map([
	['name', 'zhangsan'],
	['title', 'author']

]);
console.log(map1.size);
console.log(map1.has('name'));
console.log(map1.get('name'));
console.log(map1.has('title'));
console.log(map1.get('title'));

const items = [
	['name', '张三'],
	['title', 'Author']
];

const map2 = new Map();
items.forEach(
	([key, value]) => map2.set(key, value)
);

const set = new Set([
	['foo', 1],
	['bar', 2]
]);

const m1 = new Map(set);
console.log(m1.get('foo'));//1
const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));//3

const map3 = new Map();
map3.set(1, 'aaa').set(1, 'bbb');
console.log(map3.get(1))
