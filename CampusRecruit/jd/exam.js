var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var readline = __readline.prompt;
/*
 *20170908京东
 *括号匹配
*/
while (line = readline()) {
    const lines = line.split("");

    function main() {
        let ans = 1,
            cnt = 0;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == '(') {
                cnt++;
            } else {
                ans *= cnt;            
                cnt--;
            }
        }
        return ans;
    }
    print(main());
}