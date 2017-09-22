/*迅雷选择题*/
/*1.setInterval(check,10) check函数延迟10毫秒执行一次*/

Str= "This apples costs "+50.5; //This apples costs 50.5

var x = [0];
if([0]) {
	console.log(x==true); //false
} else{
	console.log("false");
}

var a = Array(3);
a[0] = 8;
a.map(function (elem) {
	return "2";
}); //["2", undefined × 2]

//[[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)] //错误

//6.js跨域
//域名、端口、协议任意一个不同就是跨域
//使用jsonp进行跨域 通过修改document.domain来跨子域 使用window.name来进行跨域

function show() {}
delete show.length;
console.log(typeof show.length); //number

/*(function (){
	var x = foo();
	var foo = function foo() {
		return "foobar"; 
	};
	return x;
})();//类型错误*/

/*9.Ajax中,你已经创建了一个XMLHttpRequest对象xhr，正确调用了对象的open方法和send方法。当你检查 xhr.status 时发现等于0，responseText是空。
原因是：请求被撤销了，因为连接错误或用户的操作*/

/*10.制作级联菜单功能时调用的是下拉列表框的onChange事件*/

/*11.返回false*/
if(undefined) { //false
	console.log('true');
} else {
	console.log('false');
}

if(null) { //true
	console.log('true');
} else {
	console.log('false');
}

if(0) { //true
	console.log('true');
} else {
	console.log('false');
}

if("0") { //false
	console.log('true');
} else {
	console.log('false');
}

/*12.浏览器对象
Location 对象包含有关当前 URL 的信息。
History 对象包含用户（在浏览器窗口中）访问过的 URL。
window对象是所有页面内容的根对象
document对象包含form对象
*/

var obj1 = { x:5 };
var obj2 = obj1;
obj1.a = obj1 = {x:6};
console.log("obj1.a "+obj1.a);
console.log("obj2.a "+obj2.a);

(function() {
	var b= a =1; 
})();

/*立即执行函数例题2*/
var key=[];
for(var i = 0;i<5;i++){
    (function(){
        var x = i;
        key[i] = function(){
            console.log(x)
        }
    })();
}
for(i = 0; i < key.length; i++) {
    key[i](); //0、1、2、3、4
}

/*var key=[];
for(var i = 0;i<5;i++){
    var x = i;
    key[i] = function(){
        console.log(x)
    }
}
for(i = 0; i < key.length; i++) {
    key[i](); //5个4
}*/

/*key[i]里面仅仅只是存着函数而没有运行，所以它并没有和代码片段中的循环同时运行。
var声明的变量属于函数作用域，所以对于B段代码而言，无论你循环多少次，x和i都只有1个，这也就意味着key[i]函数里面存着的，对x的引用都是同一个。
所以当key[i]的函数运行的时候，它们引用的都是同一个x = 4，那么当然打印出来的就是5个4了。
对于A段代码而言，每次循环迭代都创建了个新的函数作用域，而其作用域内部的x当然也就随之创建了5个。
这也就意味着，A段代码中key[i]函数中对于x的引用并不是同一个，而是每次迭代之中关于i的副本。所以，A段代码可以连续输出i的值。
它们之中的区别就在于，B段代码之中引用的x是同一个，而A段代码中并不是。*/



/*var x = 2017;
var y = 2018;
(function  () {
	var x = 2018;
	y = 2017;
})();*/


