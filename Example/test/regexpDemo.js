//单词边界
/*var reg1 = /\bbaidu\b/g;
console.log(reg1.test("www baidu com"));*/

//贪婪模式
/*var reg = /\d{1,5}?/;
var testStr = "123456789";
var result = testStr.match(reg);
console.log(result);*/

//或
//var reg = /(we|I|you)/g;
/*var reg = /[weIyou]/g;
console.log("I am singing while you are dancing and we are happy".match(reg));*/

//反向引用
/*var reg2 = /(\d{4})-(\d{2})-(\d{2})/g;
console.log("2017-07-27".replace(reg2, "$2/$3/$1"));*/

//零宽正向断言
/*var strTest = "I'm singing while you're dancing.";
var reg = /\b\w+(?=ing\b)/g;
console.log(strTest.match(reg));*/

//零宽负向断言
/*var strTest = "123abc a1b2c3 ab12c3";
var reg = /\b((?!abc)\w)+\b/g;
console.log(strTest.match(reg));*/

//lastIndex属性
/*var str = "The rain in Spain stays mainly in the plain";
var reg = new RegExp("ain", "g");
reg.test(str);
console.log(reg.lastIndex);
reg.test(str);
console.log(reg.lastIndex);
reg.test(str);
console.log(reg.lastIndex);
reg.test(str);
console.log(reg.lastIndex);
reg.test(str);
console.log(reg.lastIndex);*/

//source属性
/*var str = "The rain in Spain stays mainly in the plain";
var reg = new RegExp("ain", "g");
console.log(reg.source);*/

//test()方法
/*var testStrFinal = "https://regexper.com/?#%5Cd%7B4%7D%5B%5C%2F.-%5D%5Cd%7B1%2C2%7D%5Cd%7B1%2C2%7D";
var reg3 = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Aa-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
console.log(reg3.test(testStrFinal));*/

//exec()方法 非全局
/*var reg4 = /\d(\w)(\w)\d/;
var testStr = "1ab2cd3ef4gh5ij6kl";
var result = reg4.exec(testStr);
console.log(result);
console.log(reg4.lastIndex);*/

//exec()方法 全局
/*var reg5 = /\d(\w)(\w)\d/g;
var testStr = "1ab2cd3ef4gh5ij6kl";
var result = reg5.exec(testStr);

while (result = reg5.exec(testStr)) {
	console.log(result);
	console.log(reg5.lastIndex);
}*/

//search()方法
/*var testStr = "1ab2cd3ef4gh5ij6kl";
console.log(testStr.search(/a/));
console.log(testStr.search(/\d/));*/

//match()方法 非全局
/*var reg4 = /\d(\w)(\w)\d/;
var testStr = "1ab2cd3ef4gh5ij6kl";
var result2 = testStr.match(reg4);
console.log(result2);
console.log(reg4.lastIndex);*/

//match()方法 全局
/*var reg5 = /\d(\w)(\w)\d/g;
var testStr = "1ab2cd3ef4gh5ij6kl";
var result3 = testStr.match(reg5);
console.log(result3);
console.log(reg5.lastIndex);*/

//split()方法
/*var testStr = "1ab2cd3ef4gh5ij6kl";
var result4 = testStr.split(/\d/g);
console.log(result4);*/

//2017-07-30 18:14:20
/*console.log("2017-07-30 18:14:20".split(/[-:\s]/g));*/

//replace()方法 字符串
/*var testStr = "1ab2cd3ef4gh5ij6kl";
var result5 = testStr.replace(/\d/g, "X");
console.log(result5);*/

//replace()方法 函数
/*var testStr = "1ab2cd3ef4gh5ij6kl";
var result6 = testStr.replace(/\d/g, function (match, index, origin) {
	console.log(index);
	return parseInt(match) + 1;
});
console.log(result6);*/

/*var testStr = "1ab2cd3ef4gh5ij6kl";
var result7 = testStr.replace(/(\d)(\w)(\w)(\d)/g, function (match, group1, group2, group3, group4, index, origin) {
	console.log(match);
	return parseInt(group1) + parseInt(group4);
});
console.log(result7);*/
