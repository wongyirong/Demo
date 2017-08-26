var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

//单行输入
while(line=readline()){
	if(line.length > 20) {
		print("ERROR!");
	}else if(line.test()){
		var lines = line.split(" ");
    	print(parseInt(lines[0] + parseInt(lines[1]));
	}
    
}
