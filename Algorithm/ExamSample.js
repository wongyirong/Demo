var lineAdd = 0; //输入计行数
var inputArr = ['111101111', '111101010101111', '11101001111', '1101001010101']; //输入四行
//模拟输入
/*百度一下js在线编程本地调试*/
function readline() {
    var line = inputArr[lineAdd];
    lineAdd++;
    return line;
}
//模拟输出
function print(x) {
    console.log(x);
}
(function() {
    var line;
    var n = parseInt(readline());
    while (line = readline()) {
        var lines = line.split('');
        var len = 1,
            res = 1;
        for (var i = 1; i < lines.length; i++) {
            if (lines[i] != lines[i - 1]) {
                len++;
                res = Math.max(len, res);
            } else {
                len = 1;
            }
        }
        print(res);
        print(n);
    }
})();