function Person() {
}
Person.prototype.name = "王艺荣";
Person.prototype.getName = function(){
	console.log(this.name)
};

var person1 = new Person();
console.log(Person.prototype.isPrototypeOf(person1)); //
console.log(Object.getPrototypeOf(person1) == Person.prototype); //只要创建一个函数就已经有一个prototype属性指向函数的原型对象
console.log(Object.getPrototypeOf(person1).name); 
console.log(Object.hasOwnProperty(person1)); //来自原型
console.log('name' in person1); //通过对象能访问到name属性就返回true，无论该属性存在实例中还是原型中
//结合使用in和hasOwnProperty来判断是来自实例还是原型
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}
/*for in循环时返回的是能够通过对象访问的、可枚举的属性*/
