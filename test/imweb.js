/*2017/7/12
1.找出元素item在给定数组arr中的位置，存在返回位置，否则返回-1
*/
/*function indexof(arr, item) {
    return arr.indexOf(item);
}
indexof([1, 2, 3, 4], 3)；*/

/*2.计算给定数组arr中所有元素的总和*/
/*function sum (arr) {
    var total = 0;
    for( var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
sum([1, 2, 3, 4]);*/

/*3.移除数组arr中的所有值与item相等的元素。不要直接修改数组arr，结果返回新的数组*/

/*function remove(arr, item) {
    var newArr = arr.filter(function(x) {
        return x!=2;
    });
    return newArr;
}
*/

/*在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组*/
/*function append(arr, item) {
    return arr.concat(item);
}
append([1,2],3);*/

/*删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组*/
/*function curtail(arr) {
    return arr.slice(1);
}*/
/*删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组*/
/*function truncate(arr) {
    return arr.slice(0,-1);
}*/

/*在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组*/
/*function insert(arr, item, index) {
    var newArr = [item];
    var left= arr.slice(0,index);//slice返回一个新数组不包含end
    var right=arr.slice(index,arr.length);
    return left.concat(item,right);
}
insert([1, 2, 3, 4], 'z', 2)*/
/*function duplicates(arr) {
    var newArr = [];
    var count = [];
    for(var i = 0; i < arr.length; i++) {

    }

}*/

/*function formatDate(oDate, sFormation) {
    var sfArr = sFormation.split("-");
    var newDate = [];
    var year = oDate.getFullYear();
    var month = oDate.getMonth();
    var date = oDate.getDate();
    var hours = oDate.getHours();
    var minutes = oDate.getMinutes();
    var seconds = oDate.getSeconds();
    var weekday=["日","一","二","三","四","五","六"];
    var day = oDate.getDay();
    if (sfArr[0] === "yy") {
        newDate.push(year);
    } else {
        newDate.push(year.toString().substring(2));
    }
    if (sfArr[1] === "MM") {
        var strMonth = month.toString();
        if(strMonth.length < 2) {
            newDate.push(0 + strMonth);
        } else {
            newDate.push(strMonth);
        }
    } else {
        newDate.push(strMonth);
    }

    var strDate = date.toString();
    if (sfArr[2] === "dd") {
        if(strDate.length < 2) {
            console.log(strDate.length);
            newDate.push(0 + strDate);
        } else {
            newDate.push(strDate);
        }
    } else {
        newDate.push(strDate);
    }
   console.log(newDate);
}

formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')*/

/*function hi() {
    var a = null;
    console.log(a);
}

function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}

Foo.getName = function() {
    console.log(2);
}

Foo.prototype.getName = function() {
    console.log(3);
}

var getName = function() {
    console.log(4);
}

function getName() {
    console.log(5);
}
hi();//null
Foo.getName();//2
getName();//4
Foo().getName();//报错
getName();//4
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3*/


/*function square(arr) {
    var newArr = [];
    for(var i = 0; i <arr.length; i++) {
        newArr[i] = arr[i] * arr[i];
    }
    return newArr;
}
square([1, 2, 3 ,4])*/
/*
function cssStyle2DomStyle(sName) {
    var name = sName.split("-");
    var newArr = [];
    String.prototype.firstUpperCase=function(){
        return this.replace(/^\S/,function(s){return s.toUpperCase();});
    }
    if(name[0]){
        newArr.push(name[0]);
        for(var i=1; i < name.length; i++){
            newArr.push(name[i].firstUpperCase());
        }
    }else{
        newArr.push(name[1]);
        for(var i=2; i < name.length; i++){
            newArr.push(name[i].firstUpperCase());
        }
    }

    return newArr.join("");
}
cssStyle2DomStyle("-webkit-border-image")*/

/*function rgb2hex(sRGB) {
    var rgb = sRGB.match(/\S/);
    var type = rgb.toString();
    console.log(type);
}
rgb2hex("255, 255,   255");*/

/*String.prototype.firstUpperCase=function(){
    return this.replace(/^\S/,function(s){return s.toUpperCase();});
}

console.log("ee".firstUpperCase());*/
/*实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
2、如果 num 能被 3 整除，返回字符串 fizz
3、如果 num 能被 5 整除，返回字符串 buzz
4、如果参数为空或者不是 Number 类型，返回 false
5、其余情况，返回参数 num*/
/*function fizzBuzz(num) {
    if(isNaN(num) || num == null) {
        return false;
    }else if(num % 3 == 0 && num % 5 == 0) {
            return "fizzbuzz";
        } else if(num % 3 == 0){
            return "fizz";
        } else if(num % 5 == 0) {
            return "buzz";
        }else {
            return num;
        }
}
fizzBuzz(15)*/

/*实现函数 functionFunction，调用之后满足如下条件：
1、返回值为一个函数 f
2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
3、所有函数的参数数量为 1，且均为 String 类型
示例1*/

/*function functionFunction(str) {
    var temp = "";
    var f = function(temp) {
        return str + ", " + temp;
    }
    return f;
}*/
/*实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出*/
/*function count(start, end) {
    var i = start;
    var flag = setInterval(function (){
        while(i>=start && i<=end) {
            console.log(i);
            i++;
        }
    }, 100);
    return {
        cancel: function(){
            clearInterval(flag);
        }
    }
}
var f = count(1,10);
f.cancel()*/

/*function partial(fn, str1, str2) {
    return function result(str3) {
        return fn(str1, str2, str3);
    };
}*/

/*function useArguments() {
    var argsResult = 0;
    for (var i = 0; i < arguments.length; i++) {
        argsResult += arguments[i];
    }
    return argsResult;
}*/

/*实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数*/

/*function partialUsingArguments(fn) {
    return function result() {

    }
}
*/

/*将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值*/
/*function alterContext(fn, obj) {
    return fn.call(obj);
}
alterContext(function() {
    return this.greeting + ', ' + this.name + '!'; },{name: 'Rebecca', greeting: 'Yo' })*/

/*给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false*/
/*function containsNumber(str) {
    var patt = /\d+/g;
    return patt.test(str);
}*/

/*找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
1、返回数组，格式为 key: value
2、结果数组不要求顺序*/

/*function iterate(obj) {
    var result = [];
    var property = Object.getOwnPropertyNames(obj);
    for(var i = 0; i < property.length; i++){
        result[i] = property[i].concat(": " + obj[property[i]]);
    }
    return result;
}

var C = function() {
    this.foo = 'bar'; this.baz = 'bim';
}; 
C.prototype.bop = 'bip'; 
iterate(new C());*/

/*构造一个长度为100的数组，数组元素填充为随机的整数字符串；并设计一个算法将数组元素去重*/
/*var arr = new Array(100);
for (var i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}

function unnique(arr) {
    return Array.from(new Set(arr));
}
unnique(arr)*/
/*给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false*/
/*function containsRepeatingLetter(str) {
    console.log(/([a-zA-Z])\1/.test(str));
}
containsRepeatingLetter("rler")*/
/*给定字符串 str，检查其是否包含 连续3个数字 
1、如果包含，返回最新出现的 3 个数字的字符串
2、如果不包含，返回 false*/
/*function captureThreeNumbers(str) {
    var reg = [];
    if (reg = str.match(/\d{3}/)) {
        return reg[0];
    } else {
        return false;
    }

}*/

/*给定字符串 str，检查其是否符合如下格式
1、XXX-XXX-XXXX
2、其中 X 为 Number 类型*/
/*function matchesPattern(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
}
matchesPattern('800-555-1212')
*/

/*深度克隆*/
/*Object.prototype.deepClone = function() {
    function cloneObj() {}
    cloneObj.prototype = this;
    var obj = new cloneObj();
    for (var o in obj) {
        if (typeof(obj[o]) == "object") {
            obj[o] = obj[o].deepClone();
        }
    }
    return obj;
}*/

/*function converUrlToObj() {
    var url = window.location.search;
    var result = {};
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i++) {
            var splitArr = strs[i].split("=");
            result[splitArr[0]] = splitArr[1];
        }
    }
    return result;
}*/