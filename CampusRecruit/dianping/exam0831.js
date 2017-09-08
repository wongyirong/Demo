var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

/**
 * 未点击的为蓝色，点击过的为紫色。
 * 求最后仍为蓝色的超链接
 * 输入第一行n所有未点击的链接，接下来n行，每行一个字符串；然后在一个数字m表示点击了几个超链接，之后m行表示点击过的，可能重复
 */
//读入n和n行字符串，存在blue数组中
const n = parseInt(read_line());
const blue = [];
for (let i = 0; i < n; i++) {
    blue.push(read_line());
}

//读入m和m行字符串，存在purple数组中
const m = parseInt(read_line());
const purple = [];
for (let i = 0; i < m; i++) {
    purple.push(read_line());
}

/*给点击过的字符串数组去重。使用set*/
let purpleSet = new Set(purple);
/*利用数组的filter方法去除blue中与purple中相同的数组项*/
let result = blue.filter(x => !purpleSet.has(x));
/*结果按字典序排序*/
result.sort();
/*如果不全为紫色即result数组不为空，则输出仍为蓝色的数组项*/
if (result.length != 0) {
    for (let res of result) {
        print(res);
    }
}
	
