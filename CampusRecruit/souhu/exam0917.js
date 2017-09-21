var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({ prompt: '' });
var read_line = __readline.prompt;
/*简化路径*/
while(line=read_line()){
function simplifyPath(line) {
    const res = line.split("/");
    const s = [];
    for (let i = 0; i < res.length; ++i) {
        if ("." == res[i] || "" == res[i]) {
            continue;
        }
        if (".." == res[i]) {
            if (!s == []) {
                s.pop();
            }

        } else {
            s.push(res[i]);
        }

    }
    let result = "";
    while (!s == []) {
        result += s.pop();
        result += "/";
    }
    if (result.length == 0)
        result.shift("/");
    print(result);
}
simplifyPath();
}