/*var color = "green";
var test = {
	color : "blue",
	getColor : function () {
		var color = "red";
		console.log(this.color);
	}
}

var getColor = test.getColor;
getColor();
test.getColor();*/

/*console.log("one");
setTimeout(function() {
	console.log("two");
},0);
console.log("three");*/

/*for(let i = 0; i<12; i++){}
	console.log(i);
const a = 12;
a = 13;
console.log(a);
const g = {
	b : 3
};
console.log(g.b);
g.b = 12;
console.log(g.b);
let[head,...tail] = [1,2,3,4];
console.log(tail);*/

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

/*var obj = {"key":"1","value":"2"};
var newObj = obj;
newObj.value += obj.key;
console.log(obj.value);*/

/*var arr = [1,2,3];
arr.push(5);
console.log(arr);*/

/*var a = [1, 2, 3, 4, 5];
a.splice(1,3,5,2,1);
console.log(a);*/

/*function foo(){
	console.log("first");
	setTimeout(function() {
		console.log("second");
	},5);
}
for(var i = 0; i < 4; i++) {
	console.log("第"+i+"次");
	foo();
}*/

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

/*var x=10;
function cals(myNum) {
return x+myNum;
}
cals(7);*/

/*var m= 1, j = k = 0; 
    function add(n) { 
        return n = n+1; 
　 } 
    y = add(m); 
    function add(n) { 
        return n = n + 3; 
    } 
z = add(m);*/

/*output(
	typeof (
		function() {
			output("hello world")
		}
	)()
);*/

/*(function() {
      var a = b = 5;
  })();   
console.log(b);
console.log(a);*/


/*function Foo(){
     var i=0;
     return function(){
         console.log(i++);
     }
}
var f1=Foo(),
f2=Foo();
f1();//return i=1 输出0
f1();//return i=2 输出1
f2();//return i=1 输出0*/

/*function obj(name){
    if(name){
        this.name = name;
    }
    return this;
}
obj.prototype.name = "name2";
var a = obj("name1");
var b = new obj;
 
console.log(a.name); // name1
console.log(b.name); // name2*/

/*var name='World!';
(function() {
if(typeof name==='undefined') {
var name='Jack';
console.log('Goodbye'+name);
} else {
console.log('Hello'+name);
}
})();*/

/*var m = 1,j = k = 0;

function add(n) {
    return n = n + 1;
    console.log(n);
}
y = add(m);

function add(n) {
    return n = n + 3;
    console.log(n);
}
z = add(m);*/

/*var data = {a: 1, b: 2, c: 3, d: 4};
Object.keys(data).filter(function(x) { return data[x] >2;})*/

/*var person={fname:"John",lname:"Doe",age:25};
var txt="";
for (x in person)
{
  txt=txt + person[x];
  console.log(typeof x);
}
console.log(txt);*/

/*var A = {
	n:4399
}
var B = function() {
	this.n = 9999
};
var C = function() {
	var n = 8888
};
B.prototype = A;
C.prototype = A;
var b = new B();
var c = new C();
A.n++;
console.log(b.n);
console.log(c.n);*/

/*var  a = 4399 > 0&&6;
console.log(a);*/

/*var obj = {"key":"1","value":"2"};
var newObj = obj;
newObj.value += obj.key;
console.log(obj.value);*/
/*console.log(([])?true:false); 
console.log(([]==false?true:false)); 
console.log(({}==false)?true:false) */

/*function showMoney( ) {
	return this.money;
};

var personA = new Object;
var personB = new Object;

personA.money= "100";
personB.money= "150";

personA.showMoney= showMoney;
personB.showMoney= showMoney;

console.log(personA.showMoney( )); //"100"
console.log(personB.showMoney( )); //"150"*/

/*var val;
console.log('Value is ' + (val != '0') ? 'define' : 'undefine');*/

/*var a = [0];
if(a) {
	console.log(a == true);
}else {
	console.log("wut");
}*/

/*var a,b;
(function(){
    console.log(a);
    console.log(b);
    var a=b=3;
    console.log(a);
    console.log(b);
})();
console.log(a);
console.log(b);*/

/*var a = [1,2.3];
a.splice(1,1,5);
console.log(a);*/

/*var F = function() {};
Object.prototype.a = function(){};
Function.prototype.b = function(){};
var f = new F();*/
/*var a =1;
function foo() {
	a++;
	console.log(a);
	var a = 2;
	console.log(a);
}
foo();*/
