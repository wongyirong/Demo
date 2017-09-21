var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

/**
 * 10公斤或10公斤以下，收费3.5，超过10公斤的行李，按每超过1公斤增加0.75进行收费
 * 输入只有一行，包括1个正整数，表示行李的重量（以kg做单位，行李重量不超过100kg）
 * 输出只有一行，包括1个小数，表示托运费（保留两位小数）
 */

let weight = parseInt(read_line());  //用weight存储读入的行李重量
if (weight <= 10) {  //如果重量10公斤或10公斤以下
    money = 3.5;  //收费3.5
} else {  //超过10公斤的行李
    money = 3.5 + (weight - 10) * 0.75;  //按每超过1公斤增加0.75进行收费
}
print(money.toFixed(2));  //保留两位小数