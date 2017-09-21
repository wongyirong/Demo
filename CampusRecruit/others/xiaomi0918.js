var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;

let line;
while (line = read_line()) {
    let lines = line.split(' ');
    let str = lines[0];
    const strArr = str.split('');
    let subStr = lines[1];
    const subStrArr = subStr.split('');

    function seq(str, subStr) {
        let i = 0,
            j = 0;
        let lenS = str.length;
        let lenT = subStr.length;
        while (i < lenS && j < lenT) {
            if (str[i] == subStr[j]) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        if (j == lenT){
        return true;
    }
        else{
            return false;
        }
    }
print(seq(strArr,subStrArr));
}