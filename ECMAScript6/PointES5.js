var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

console.log(Object.keys(Point.prototype));//ES6和es5不同内部定义的方法可以枚举
// ["toString"]
console.log(Object.getOwnPropertyNames(Point.prototype));
// ["constructor","toString"]