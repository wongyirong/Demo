class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x},${this.y})`;
	}
}

/*子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。*/
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y); // 调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + '' + super.toString(); // 调用父类的toString()
	}
}
//实例对象cp同时是ColorPoint和Point两个类的实例
let cp = new ColorPoint(25, 8, 'green');

console.log(cp instanceof ColorPoint) // true
console.log(cp instanceof Point) // true

//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(ColorPoint) === Point)

/*super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。*/
/*class A {
	constructor() {
		console.log(new.target.name);
	}
}
class B extends A {
	constructor() {
		super();
	}
}
new A() //A
new B() //B*/
/*作为函数时super()只能在子类的构造函数之中*/

/*第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。*/
/*class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2相当于A.prototype.p()
  }
}

let b = new B();*/

/*由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。*/
/*class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined   p是父类A实例的属性，super.p就引用不到它。*/

/*属性x是定义在A.prototype上面的，所以super.x可以取到它的值。*/
/*class A {}
A.prototype.x = 2;

class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}

let b = new B(); //属性x是定义在A.prototype上面的，所以super.x可以取到它的值。
*/

/*class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2*/

/*Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。*/
/*class A {
}

class B extends A {
}

console.log(B.__proto__ === A) // true
console.log(B.prototype.__proto__ === A.prototype) // true*/

/*class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 的实例继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();
console.log('1' + (B.__proto__ === A))// true
console.log('2' + (B.prototype.__proto__ === A.prototype))*/

/*Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;*/

