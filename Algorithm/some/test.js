var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
var countLine = 1;
var tokens = [];
rl.on('line', function(line){
   tokens.push(line);
    if(countLine == 2){
        var arr = tokens[0].split('');
        var count = 0;
        for(var i=0,len=arr.length; i<=len; i++){
            var temp = arr.slice(0);
            temp.splice(i, 0, tokens[1]); //改变原来的数组
            temp = temp.join('');
            if(temp == temp.split('').reverse().join('')){
                count ++;
            }
        }
        console.log(count);      
   }else{
       countLine++;
   }
});
