var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

//赛码 编程测试
var line;
while(line=read_line()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    var s = parseInt(lines[2]);
    var m = Math.abs(a) + Math.abs(b);
    if(m <= s && ((s-m)%2 == 0)) {
    	print("Yes");
    }else {
    	print("No");
    }
}

//赛码 判断是否是回文串
while(line=read_line()){
   if (line == line.split('').reverse().join('')){
   		print("YES");
   }else {
   		print("NO");
   	}
}