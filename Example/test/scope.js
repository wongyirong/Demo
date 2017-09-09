/*//例题1
console.log(color);
var color = "red";*/

/*//例题2
function checkscope() {
	var color = "blue";
}
console.log(color);*/

/*//例题3
var color = "red";
var color;
console.log(color);*/

//例题4
/*foo();
var foo;
function foo() {
	console.log("red");
}
var foo = function() {
	console.log("blue");
}
*/
/*//例题5
var scope1 = "global";
function checkscope() {
	var scope2 = "local";
	console.log(scope1);
}
checkscope();*/

/*//例题6
function test(){
	var color = "red";
	if(true) {
		var color = "blue";
		for(var i = 0; i < 3; i++) {
			console.log("for循环的内的i: " + i);
		}
		console.log("我是出了for循环的i: " + i);
	}
	console.log("我是什么颜色？: " + color);
}
test();*/

//例题7
/*var scope = "global";
function foo() {
	console.log(scope);
	var scope = "local";
}
foo();
console.log(scope);*/


/*function Foo(){
     var i=0;
     return function(){
         console.log(i++);
     }
}
var f1=Foo();
f2=Foo();
f1();//0
f1();//1
f2();//0*/



/*1.当函数被创建时，内部[scope]属性被存储，在这个属性中保存一个包含全局变量对象的作用域链。
2.当函数被调用时，会创建一个执行环境及相应的作用域链，argument和实参为其进行初始化。
这里f1()函数和f2()函数在调用时会创建两个执行环境，保存各自的变量对象，结果是没有关系的。
而同一个函数在多次调用时返回值会被保存在同一个变量对象中*/


/*function test() {
	var n = 4399;
	function add() {
		n++;
		console.log(n);
	}

	return {
		n : n,
		add : add
	}
}

var result = test();
var result2 = test();
result.add();
result.add();
console.log(result.n);
result2.add();*/

/*var foo = {
	n : 1
};
(function(foo){
	console.log(foo.n);
	foo.n = 3;
	var foo = {
		n :2 
	}
	console.log(foo.n);
}) (foo);
console.log(foo.n);*/

function Foo(){
     var i=0;
     return function(){
         console.log(i++);
     }
}
var f1=Foo(),
f2=Foo();
f1();
f1();//return i=2 输出1
f2();//return i=1 输出0
f1();
f1();
f1();//return i=2 输出1
f2();//return i=1 输出0
f1();
f1();
f1();//return i=2 输出1
f2();//return i=1 输出0
f1();
f1();
f1();//return i=2 输出1
f2();//return i=1 输出0
f1();

