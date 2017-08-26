var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

//单行输入
while(line=readline()){
    var lines = line.split(" ");
    print(parseInt(lines[0] + parseInt(lines[1]));
}

//多行输入
var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
    print(ans);
}