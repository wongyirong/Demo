let obj = Object.create({
    name: 'King'
});
function foo(obj) {
    Object.setPrototypeOf(obj, null);
    return obj;
}
console.log(obj === foo(obj));
//true

let obj = [1, 2, 3];
function foo(val) {
    val = [1, 2, 3];
    return val;
}
console.log(obj === foo(obj)); //false

let obj = 1;
function foo(val) {
    val += 1;
    return val;
}
console.log(obj === foo(obj)); //false

let obj = {
    bar: 1
};
function foo(val) {
    val.bar += 1;
    return val;
}
console.log(obj === foo(obj)); //true

let obj = Object.create({
    name: 'King'
});
function foo(obj) {
    Object.setPrototypeOf(obj, null);
    return obj;
}
console.log(obj === foo(obj)); //true


let obj = [1, 2, 3];
function foo(val) {
    val = [1, 2, 3];
    return val;
}
console.log(obj === foo(obj)); //false

let obj = [1, 2, 3];
function foo(val) {
    const newVal = val.map(num => num * 2);
    return newVal;
}
console.log(obj === foo(obj));

let obj = [1, 2, 3];
function foo(val) {
    return val.sort();
}
console.log(obj === foo(obj));