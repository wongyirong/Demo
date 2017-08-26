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
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return `(${this.x},${this.y})`;
	}
}
const p = new Point(1, 2);
console.log(`${p}`);
console.log(typeof Point); //es6的类是函数
console.log(Point === Point.prototype.constructor);  //es6的类是构造函数的另一种写法