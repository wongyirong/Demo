/*JavaScript*/
/*function Point(x, y) {
	this.x = x;
	this.y = y;
}
Point.prototype.toString = function() {
	return '(' + this.x + ',' + this.y + ')';
};
var p1 = new Point(1,2);
console.log(p1.toString());
//类的所有方法都定义在类的prototype属性上面。在类的实例上面调用方法，其实就是调用原型上的方法。
console.log(p1.constructor === Point.prototype.constructor);
console.log(Point === Point.prototype.constructor);*/

/*ES6*/
class Point {
	/*constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
	一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。*/
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x},${this.y})`;
	}
}
const p = new Point(1, 2);

Object.assign(Point.prototype, {
  toValue(){
  		return this.x + this.y;
  }
});

console.log(`${p}`);
console.log(typeof Point); //es6的类是函数
console.log(Point === Point.prototype.constructor);  //es6的类是构造函数的另一种写法

//类的内部所有定义的方法，都是不可枚举的（non-enumerable）
console.log(Object.keys(Point.prototype)); //[ 'toValue' ]ES6中内部定义的方法不可枚举
console.log(Object.getOwnPropertyNames(Point.prototype)); //[ 'constructor', 'toString', 'toValue' ]

let methodName = 'getArea';
class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
console.log(new Square() instanceof Square);//默认就是返回实例对象this

//constructor方法默认返回实例对象（即this），但也可以指定返回另外一个对象。
class Foo {
	constructor() {
		return Object.create(null);
	}
}
console.log(new Foo() instanceof Foo);
//Foo();//类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

console.log(p.toString());
console.log(p.hasOwnProperty('x'));
console.log(p.hasOwnProperty('toString'));//false
//实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
//x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。
const p1 = new Point(2, 3);
const p2 = new Point(4, 1);
console.log(p1.prototype === p2._proto_);

//class表达式
const MyClass = class { /* ... */ };

let person = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}('张三');

person.sayName();

//不存在变量提升
{
	let Foo = class {};
	class Bar extends Foo {
	}
}


/*class Widget {
	//公有方法
	foo(baz) {
		this._bar(baz);
	}
	//私有方法
	_bar(baz) {
		return this.snaf = baz;
	}
}*/
class Widget {
	foo(baz) {
		bar.call(this, baz);
	}
}
function bar(baz) {
	return this.snaf = baz;
}

/*const bar = Symbol('bar');
const snaf = Symbol('snaf');
export default class myClass {
	//公有方法
	foo(baz) {
		this[bar](baz);
	}
	//私有方法
	[bar](baz) {
		return this[snaf] = baz;
	}
};*/

//this指向
/*class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
logger.printName();*/

/*class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
	printName(name = 'wyr') {
    	this.print(`打印我的名字 ${name}`);
  }

  	print(text) {
    	console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName();*/

class Logger {
  constructor() {
    this.printName = (name = 'there') => {
      this.print(`箭头函数 ${name}`);
    };
  }
	print(text) {
    	console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName();

//name属性
console.log(Point.name);

class Prop {
	constructor() {

	}
	get prop() {
		console.log('getter');
	}
	set prop(value) {
		console.log('setter: '+ value);
	}
}
let inst = new Prop();
inst.prop = 123;
inst.prop

//存值函数和取值函数是设置在属性的 Descriptor 对象上的。
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

console.log("get" in descriptor)  // true
console.log("set" in descriptor)  // true

//如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
class GenFoo {
	constructor(...args) {
		this.args =args;
	}
	*[Symbol.iterator]() {
		for (let arg of this.args) {
			yield arg;
		}
	} 
}

for (let x of new GenFoo('hello', 'world')) {
	console.log(x);
}

//Class的静态方法
//所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，
//就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class StaFoo {
	static classMethod() {
		return 'hello';
	}
}

console.log(StaFoo.classMethod())
var staFoo = new StaFoo()
//staFoo.classMethod()

//如果静态方法包含this关键字，这个this指的是类，而不是实例。
class StFoo {
	static bar() {
		this.baz();
	}
	static baz() {
		console.log('Foo类');
	}
	baz() {
		console.log('非静态方法');
	}
}
StFoo.bar();

//父类的静态刚发，可以被子类继承
class ExFoo {
	static classMethod() {
		return 'hello';
	}
}
class Bar extends ExFoo {

}
Bar.classMethod();

//静态方法也是可以从super对象上调用的。
class SuFoo {
	static classMethod() {
		return 'hello';
	}
}
class SuBar extends SuFoo {
	static classMethod() {
		return super.classMethod() + ',too';
	}
}

SuBar.classMethod()

//类的实例属性（暂不支持
/*class MyClass2 {
	myProp2 = 42;
	constructor() {
		console.log(this.myProp2);
	}
}*/
//类的静态属性(暂不支持)
/*class MyClass3 {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass3.myStaticProp); // 42
  }
}*/




/*var you = function from_future_input(){}
var spring = {
	'breezing': true,
	'length': 10
};
var i =[];
i.sort([spring,you]) == [you,spring];*/