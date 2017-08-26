/*用户在输入身份证的过程中经常会输入错误，为了方便用户正确输入过程中对用户按照6+8+4的格式进行分组，实现一个方法接收输入过程中的身份证号，返回分组后的字符
输入：输入数据有多行，每一行是一个输入过程中的身份证号
输出：分组后的字符串
样例输入：
5021
502104 198803
5021041988033084
502104198803308324
样例输出：
5021
502104 198803
502104 19880330 84
502104 19880330 8324
*/
var line;
while(line = read_line()){
    while(line.indexOf(" ") != -1){
        line = line.replace(" ","");
    }
    if(line.length <= 6){
        print(line);
    }
    else if(line.length > 6 && line.length <= 14){
        var line1 = line.substring(0,6);
        var line2 = line.substring(6);
        print(line1 + " " + line2);
    }
    else if(line.length > 14 && line.length <= 18){
        var line1 = line.substring(0,6);
        var line2 = line.substring(6,14);
        var line3 = line.substring(14);
        print(line1 + " " + line2 + " " + line3);
    }
}
