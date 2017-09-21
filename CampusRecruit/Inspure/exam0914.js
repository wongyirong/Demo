var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

/**
 * 四个木棍能否中组成三角形
 */
while (line = read_line()) { //读入一行line字符串
    const lines = line.split(" "); //将字符串存放到lines数组
    for (let i = 0; i < 4; i++) {
        lines[i] = parseInt(lines[i]); //对数组每一项取整
    }
    //先对存放木棍长度的数组进行升序排序
    lines.sort(function compare(a, b) {
        return a - b;
    });
    //判断两个短的相加是否大于长的
    if (lines[0] + lines[1] > lines[2] || lines[0] + lines[2] > lines[3] || lines[1] + lines[2] > lines[3]) {
        print("triangle");
    } else if (lines[0] + lines[1] == lines[2] || lines[0] + lines[2] == lines[3] || lines[1] + lines[2] == lines[3]) {
        print("segment"); //相等的情况下是退化三角形
    } else {
        print("impossible"); //不满足以上条件的木棍是不能组成三角形的
    }

}