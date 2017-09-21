var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

//赛码 编程测试
var line;
while(line=read_line()){
    var lines = line.split(' ').map(Number);
    var a = lines[0];
    var b = lines[1];
    var s = lines[2];
    var m = Math.abs(a) + Math.abs(b);
    if(m <= s && ((s-m)%2 == 0)) {
    	print("Yes");
    }else {
    	print("No");
    }
}

//赛码 判断是否是回文串

/*API如下：
读取size个字符：gets(size)
　将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，提前结束。回车符可能会包含在返回值中。
输出信息：printsth(sth, ...)
　往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
输出一行：print(sth, ...)
　往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
读取一个（长）整数：readInt()
　从控制台读取一个（长）整数。
读取一个浮点型：readDouble()
　从控制台读取一个浮点型。
读取一行输入：read_line()
　将读取至多1024个字符，当还未达到1024个时如果遇到回车或结束符，提前结束。回车符可能会包含在返回值中。*/