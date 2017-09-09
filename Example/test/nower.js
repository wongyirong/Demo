/*var obj = {
	a: 1,
	b: function() {
		console.log(this.a)
	}
};
var fun = obj.b;
fun();*/
/*var b = function(){
    console.log(this.a); 
},
obj = {
    a:1,
    b:b // 把函数独立出来 
};
var fun = obj.b;// 存储的是内存中的地址
fun();*/
/*var a="undefined";
var b="false";
var c="";
function assert(aVar){
	if(aVar)
		console.log(true);
	else
		console.log(false);
}
assert(a);
assert(b);
assert(c);*/

/*var data = {a: 1, b: 2, c: 3, d: 4};
Object.keys(data).filter(function(x) {
	return data[x]>2;
});*/


/*var a = [5,4,3,2,1];
val = a.filter(function(index) {
	return index < 3;
});
other = a.filter(function(x,i) {
	return i%2 == 0
});*/

/*var data = {a: 1, b: 2, c: 3, d: 4};
var arr = Object.keys(data);
console.log(arr);//[ 'a', 'b', 'c', 'd' ]
arr.filter(function(index) {
	return data[index] > 2;
});*/
/*var a = [];
var result = a.splice(0,1);
console.log(result);
var result2 = a.shift();
console.log(result2);*/
/*var str = "hello world";
console.log(str[1]);*/

