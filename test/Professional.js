/*var sum = function(num1,num2){
	return num1+num2;
};
console.log(sum(1,2));
*/
/*var sum = new Function("num1","num2","return num1+num2");
console.log(sum(1,2));*/
/*var sum = function(){
	return 3;
};
console.log(sum);
var num = sum;
console.log(num);
console.log(num());
sum = null;
console.log(sum);*/
/*console.log(sum(1,2));
function sum (sum1,sum2) {
	return sum1+sum2;
}*/

/*function callSomeFunction(someFunction, someArgument) {
	return someFunction(someArgument);
}
function add10(num) {
	return num + 10;
}
var result1 = callSomeFunction(add10,10);
console.log(result1);
function getGreeting(name) {
	return "Hello, "+ name;
}
var result2 = callSomeFunction(getGreeting,"wyr");
console.log(result2);*/

/*function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if(value1<value2){
			return -1;
		}else if(value1>value2) {
			return 1;
		}else {
			return 0;
		}
	}
}

var data = [{name:"wyr",age:25}, {name:"yyqx",age:16}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);
data.sort(createComparisonFunction("age"));
console.log(data[0].name);*/
/*function howManyArgs() {
	console.log(arguments.length);
}
howManyArgs("string", 45);
*/
/*function factorial(num) {
	if(num<= 1) {
		return 1;
	}else{
		return num*factorial(num-1)
	}
}
console.log(factorial(3));*/
/*function factorial(num) {
	if (num <= 1) {
		return 1;
	}else {
		return num*arguments.callee(num-1)
	}
}
var trueFactorial = factorial;
factorial = function() {
	return 0;
};
console.log(trueFactorial(5));//120
console.log(factorial(5));//0*/
/*window.color = "red";
var o = {color:"blue"};
function sayColor() {
	console.log(this.color);
}
sayColor();
o.sayColor =sayColor;
o.sayColor();*/
/*function outer() {
	inner();
}
function inner() {
	console.log(inner.caller);
	console.log(arguments.callee.caller);
}
outer();*/
/*function sayName(name) {
	console.log(name);
}
function sum(num1, num2) {
	return num1 + num2;
}
function sayHi() {
	console.log("hi");
}
console.log(sayName.length);
console.log(sum.length);
console.log(sayHi.length);*/
/*function sum(num1, num2) {
	return num1+num2;
}

function callSum1 (num1, num2) {
	return sum.apply(this, arguments);
}

function callSum2 (num1, num2) {
	return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));*/
/*function sum(num1, num2) {
	return num1 + num2;
}
function callSum (num1, num2) {
	return sum.call(this, num1, num2);
}
console.log(callSum(10, 10));*/
/*window.color = "red";
var o = {color:"blue"};
function sayColor() {
	console.log(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(window);
sayColor.call(o);
o.sayColor();*/
/*var s1 = "some text";
var s2 = s1.substring(2);
console.log(s2);*/
/*var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;*/
/*var s1 = "some text";
s1.color = "red";
console.log(s1.color);*/
/*var s1 = "some text";
typeof(s1);*/
/*var obj = new Object("some text");
console.log(obj instanceof String);*/
/*var value = "25";
var number = Number(value);
console.log(typeof(number));*/
/*var value = "25";
var obj = new Number(value);
console.log(typeof obj);*/
/*var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result);*/
/*var str = "hello";
var result = str.concat(" world");
console.log(result);*/

/*(function(){
	var x = foo;
	var foo = function foo() {
		return "foobar"
	};
	return x;
})();*/

/*var test = {
	a:'a',
	b:'b'
};
var test2 = test;
test2.a = 'a2';
console.log(test.a === 'a2');*/
/*var str = "lorem ipsum dolor sit amet, consectrtur adipisicing elit";
var pos = new Array();
var p = str.indexOf("e");
while (p > -1) {
	pos.push(p);
	p = str.indexOf("e", p+1);
}
console.log(pos);*/
/*var str ="   hello  world    ";
var trimstr = str.trim();
console.log(trimstr);*/
/*var test = "cat, bat, sat, fat";
var pattern = /.at/g;
var matches = test.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(matches.length);
console.log(pattern.lastIndex);*/
/*var text = "cat, bat, sat,fat";
var result = text.replace("at", "ond");
console.log(result);
result = text.replace(/at/g,"ond");
console.log(result);*/
/*var text = "cat, bat,sat,fat";
result = text.replace(/(.at)/g, "word($1)");
console.log(result);*/
/*function htmlEscape(text) {
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match) {
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "\"":
			return "&quot;";
		}
	});
}
console.log(htmlEscape("<p class=\"greeting\">HEllo world!</p>"));*/
/*var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");
var colors2 = colorText.split(",", 2);
var colors3 = colorText.split(/[^\,]+/);
console.log(colors3);*/
/*var stringValue = "yellow";
console.log(stringValue.localeCompare("brick"));
console.log(stringValue.localeCompare("yellow"));
console.log(stringValue.localeCompare("zoo"));*/
/*var stringValue = "yellow";
function determineOrder(value) {
	var result = stringValue.localeCompare(value);
	if (result <0 ) {
		console.log("this string 'yellow' comes before the string '" +value + "'.");
	}else if (result > 0) {
		console.log("this string 'yellow' comes after the string '" + value +"'.");
	}else {
		console.log("this string 'yellow' is equal to the string '" + value +"'.")
	}
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");*/
/*var uri = "http://www.wrox.com/illegal value.htm#start";
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));*/
/*eval("console.log('hi')");*/
/*var color = "red";
function sayColor() {
	console.log(window.color);
}
window.sayColor();*/
/*var values = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math, values);
console.log(max);*/
/*var num = Math.floor(Math.random() * 10 +1);
console.log(num);*/
/*function seleFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue +1;
	return Math.floor(Math.random() * choices + lowerValue);
}
var num = seleFrom(2, 10);
console.log(num);*/
/*function seleFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue +1;
	return Math.floor(Math.random() * choices + lowerValue);
}
var colors = ["red","green","blue"];
var color = colors[seleFrom(0, colors.length-1)];
console.log(color);*/
/*var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function() {
	console.log(this.name);
};*/
/*var person = {
	name:"nicholas",
	age:29,
	job:"software engineer",
	sayName:function() {
		console.log(this.name);
	}
};*/
/*var person = {};
Object.defineProperty(person, "name",{
	writable:false,
	value:"Nicholas"
});
console.log(person.name);
person.name = "Greg";
console.log(person.name);*/
/*var book = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(book, "year", {
	get:function() {
		return this._year;
	},
	set: function (newValue) {
		if(newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});
book.year = 2005;
console.log(book.edition);*/

/*var book = {};
Object.defineProperties(book,{
	_year:{
		writable:true,
		value:2004
	},

	edition: {
		writable: true,
		value: 1
	},

	year: {
		get:function() {
			return this._year;
		},
		set: function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});*/
/*var book = {};
Object.defineProperties(book,{
	_year:{
		value:2004
	},

	edition: {
		value: 1
	},

	year: {
		get:function() {
			return this._year;
		},
		set: function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(descriptor.get);*/
/*function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}
var person1 = createPerson("Nicholas", 29, "software Engineer");
var person2 = createPerson("wyr", 26, "student");*/
/*function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}*/
/*var person1 = new Person("Nicholas", 29, "software Engineer");
var person2 = new Person("wyr", 26, "student");
console.log(person2);*/
/*var person = new Person("lyz", 25, "student");
person.sayName();
 Person("lxh", 26, "hahha");
 window.sayName();
 var o = new Object();
 Person.call(o, "LZG", 25, "lala");
 o.sayName();*/
/* function Person(name, age, job) {
 	this.name = name;
 	this.age = age;
 	this.job = job;
 	this.sayName = new Function("console.log(this.name)");
 }*/
/* function Person() {

 }

 Person.prototype.name = "wyr";
 Person.prototype.age = 26;
 Person.prototype.job = "software student";
 Person.prototype.sayName = function() {
 	console.log(this.name);
 };
 var person1 = new Person();
 person1.sayName();
 var person2 = new Person();
 person2.sayName();
 console.log(person1.sayName == person2.sayName);
 console.log(Person.prototype.isPrototypeOf(person1));
 console.log(Object.getPrototypeOf(person1) == Person.prototype);*/
/* function Person() {

 }

 Person.prototype.name = "wyr";
 Person.prototype.age = 26;
 Person.prototype.job = "software student";
 Person.prototype.sayName = function() {
 	console.log(this.name);
 };
 var person1 = new Person();
 person1.name ="lyz";
 console.log(person1.name);
 delete person1.name;
 console.log(person1.name);
 var friend = new Person();
 Person.prototype.sayHi = function() {
 	console.log("hi");
 };
 friend.sayHi();
 person1.sayHi();*/
/* function Person(){

 }
 var friend = new Person();
 Person.prototype = {
	constructor:Person,
 	name:"wyr",
 	age:26,
 	job:"student",
 	sayName: function (){
 		console.log(this.name);
 	}
 };
 friend.sayName();*/
 
/* function Person(){

 }
 Person.prototype = {
	constructor:Person,
 	name:"wyr",
 	age:26,
 	job:"student",
 	sayName: function (){
 		console.log(this.name);
 	}
 };
 var friend = new Person();
 friend.sayName();*/
/* console.log(typeof Array.prototype.sort);*/

/*String.prototype.startsWith = function (text) {
	return this.indexOf(text) == 0;
};

var msg = "Hello world!";
console.log(msg.startsWith("Hello"));*/

/*function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friend = ["shelby", "court"];
}

Person.prototype = {
	constructor : Person,
	sayName : function() {
		console.log(this.name);
	}
}

var person1 = new Person("wyr", 26, "stu");
var person2 = new Person("lyz", 26, "stu");

person1.friend.push("Van");
console.log(person1.friend === person2.friend);*/

/*function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	if (typeof this.sayName != "function") {
		Person.prototype.sayName = function() {
			console.log(this.name);
		};
	}
}

var friend = new Person("wyr", 26, "student");
friend.sayName();*/

/*function Person(name, age, job) {
	var o = new Object();
	o.name =name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	};
	return o;
}
var friend = new Person("wyr",26, "student");
friend.sayName();*/

/*function SpecialArray() {
	var values = new Array();
	values.push.apply(values, arguments);
	values.toPipedString = function() {
		return this.join("|");
	};
	return values;
}
var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());*/

/*function Person(name, age, job) {
	var o = new Object();
	o.sayName = function () {
		console.log(name);
	};
	return o;
}
var friend = Person("lxh",24,"student");
friend.sayName();*/

/*function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
};
function SubType() {
	this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
	return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());*/
/*function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
};
function SubType() {
	this.subproperty = false;
}
SubType.prototype = new SuperType();

SuperType.prototype.getSubValue = function () {
	return this.subproperty;
};

SubType.prototype.getSuperValue = function() {
	return false;
};

var instance = new SubType();
console.log(instance.getSuperValue());*/

/*function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {

}
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors);*/

/*function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
	SuperType.call(this);//继承了SuperType
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors);*/

//传递参数
/*function SuperType(name) {
	this.name = name;
}

function SubType() {
	SuperType.call(this, "wyr");
	this.age = 29;
}

var instance = new SubType();
console.log(instance.name);
console.log(instance.age);*/
/*function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
	console.log(this.age);
};

var instance1 = new SubType("wyr", 26);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("lyz", 26);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();*/

/*function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}*/

/*var person = {
	name:"wyr",
	friends:["lyz", "lxh"]
};

var aPersom = object(person);
aPersom.name = "XRL";
aPersom.friends.push("wml");

var yetAPersom = object(person);
yetAPersom.name = "JMY";
yetAPersom.friends.push("hf");

console.log(person.friends);*/

/*var person = {
	name:"wyr",
	friends:["lyz", "lxh"]
};

var aPersom = Object.create(person);
aPersom.name = "XRL";
aPersom.friends.push("wml");

var yetAPersom = Object.create(person);
yetAPersom.name = "JMY";
yetAPersom.friends.push("hf");

console.log(person.friends);*/

/*var person = {
	name:"wyr",
	friends:["lyz", "lxh"]
};
var aPerson = Object.create(person, {
	name: {
		value: "wml"
	}
});

console.log(aPerson.name);
*/
/*function createAPerson(original) {
	var clone = Object(original);
	clone.sayHi = function() {
		console.log("hi");
	};
	return clone;
}

var person = {
	name:"wyr",
	friends:["lxh","lyz"]
};

var aPerson = createAPerson(person);
aPerson.sayHi();*/
/*function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
	console.log(this.age);
};

var ins = new SubType("wyr", 26);
ins.sayAge();*/

/*function inheritPrototype(subType, superType) {
	var prototype = Object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.log(this.age);
};*/
/*function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num-1);
	}
}

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));*/
/*var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num-1);
	}
});
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));*/
/*function createComparisonFunction(propertyName) {
	return function (object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		}else {
			return 0;
		}
	};
} */

/*function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	}else if (value1 > value2) {
		return 1;
	}else {
		return 0;
	}
}

var result = compare(5, 10);
console.log(result);*/

/*function A() {
    this.do=function() {
    	return 'foo';
    };
}
A.prototype=function() {
    this.do=function() {
    	return '‘bar’'
    };
};
var x=new A().do();
console.log(x);*/
/*var a = 2;
var a;
console.log(a);*/

/*在查找 b.n 是首先查找 b 对象自身有没有 n 属性，如果没有会去原型（prototype）上查找
当执行 var b = new B() 时，函数内部 this.n=9999(此时this指向b) 返回b对象，b对象有自身的n属性，所以返回 9999
当执行 var c = new C() 时，c对象没有自身的n属性，向上查找，找到原型 （prototype）上的 n 属性，
因为 A.n++(此时对象A中的n为4400)， 所以返回4400*/
/*var A = {
	n:4399
};
var B = function () {
	this.n = 9999
};
var C = function () {
	var n = 8888;
};
B.prototype = A;
C.prototype = A;

var b = new B();
var c = new C();
A.n++;
console.log(b.n);
console.log(c.n);*/

/*console.log(([])?true:false);
console.log(([]==false?true:false)); 
console.log(({}==false)?true:false);
*/

/*var obj = {
	a : 1,
	b: function () {
		console.log(this.a)
	}
};

var fun = obj.b;
fun();*/

/*function createFunction() {
	var result = new Array();
	for (var i=0; i< 10; i++) {
		result[i] = function () {
			return i;
		};
	}
	return result;
}*/

/*function createFunction() {
	var result = new Array();
	for (var i=0; i < 10; i++) {
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}
	return result;
}
createFunction()*/

/*var name = "The windows";
var object = {
	name : "my object",
	getNameFunc : function() {
		return function() {
			return this.name;
		};
	}
};
console.log(object.getNameFunc()());*/

/*var name = "The windows";
var object = {
	name : "my object",
	getNameFunc : function() {
		var that = this;
		return function() {
			return that.name;
		};
	}
};
console.log(object.getNameFunc()());*/

/*var name = "The Window";
var object = {
	name : "My Object",
	getName : function () {
		return this.name;
	}
};*/

/*function outputNumbers(count) {
	for (var i=0; i < count; i++) {
		console.log(i);
	}
	console.log(i);
}
outputNumbers(5)*/

/*function outputNumbers(count) {
	(function () {
		for (var i=0; i < count; i++) {
		console.log(i);
		}
	})();

	console.log(i);
}
outputNumbers(5);*/

/*function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}
add(1, 2);*/

/*function MyObject () {
	var privateVariable = 10;

	function privateFunction () {
		return false;
	}

	this.publicMethod = function () {
		privateVariable++;
		console.log(privateVariable);
		return privateFunction();
	};
}
var obj = new MyObject();
obj.publicMethod();*/

/*function Person (name) {
	this.getName = function () {
		return name;
	};

	this.setName = function (value) {
		name = value;
	};
}

var person = new Person("wyr");
console.log(person.getName());
person.setName("Greg");
console.log(person.getName());*/

/*(function () {
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	MyObject = function() {
	};
	MyObject.prototype.publicMethod = function () {
		privateVariable++;
		return privateFunction();
	};
}) ();*/

/*(function () {
	var name = "";
	Person = function(value) {
		name = value;
	};
	Person.prototype.getName = function () {
		return name;
	};
	Person.prototype.setName = function (value) {
		name = value;
	};
}) ();

var person1 = new Person("wyr");
console.log(person1.getName());
person1.setName("lyz");
console.log(person1.getName());

var person2 = new Person("lxh");
console.log(person1.getName());
console.log(person2.getName());*/

/*var singleton = function() {
	var privateVariable = 10;

	function privateFunction() {
		return false;
	}

	return {
		publicProperty : true,
		publicMethod : function () {
			privateVariable++;
			return privateFunction();
		}
	};
}();*/

/*var application = function() {
	var components = new Array();
	components.push(new BaseComponent());
	return {
		getComponentCount : function () {
			return components.length;
		},
		registerComponent : function(component) {
			if (typeof component == "object") {
				components.push(component);
			}
		}
	};
}();*/

/*var singleton = function() {
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	var object = new CustomType();
	object.publicProperty = true;
	object.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
	return object;
} ();*/