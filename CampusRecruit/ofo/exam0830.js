var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

var lines = [];
for (var i = 0; i < 3; i++) {
    lines.push(read_line());
}
var n = read_line();
/*动态规划*/
function dyf(n) {
    var arr = [];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    for(var i = 3; i <= n; i++) {
        arr[i] = parseInt(arr[i-1]) + parseInt(arr[i-2]) + parseInt(arr[i-3]);
    }
    return arr[n-1];
}

print(dyf(n));

/*function recuf(n) {
    if (n >= 4) {
        return parseInt(recuf(n - 1)) + parseInt(recuf(n - 2)) + parseInt(recuf(n - 3));
    } else if (n == 1) {
        return lines[0];
    } else if (n == 2) {
        return lines[1];
    } else if (n == 3) {
        return lines[2];
    }
}
var start = new Date().getTime();
print(recuf(n));
var stop = new Date().getTime();
print("递归计算耗时" + (stop-start));
print();
start = new Date().getTime();
print(dyf(n));
stop = new Date().getTime();
print("动态规划耗时" + (stop-start));*/