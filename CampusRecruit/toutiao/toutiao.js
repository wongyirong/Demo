var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;


var n = parseInt(read_line());
var arr = [];
for(var i = 0;i < n; i++){
    lines = read_line().split(" ");
    for(var j = 0;j < lines.length; j++){
        lines[j] * lines[j];
    }
}


/*var n = parseInt(read_line());
var x = [];
var y = [];
for(var i = 0;i < n; i++){
    lines = read_line().split(" ");
    x[i] = lines[0];
    y[i] = lines[1];
    var xMax, yMax;
    if(x[i] > xMax) {
    	xMax = x[i];
    }
    if(y[i] > yMax) {
    	yMax = y[i];
    }
}
for(var j =0; j < x.length; j++) {
	for(var k = 0; k < y.length; k++) {
			
		}
	}
}
*/

/*var max = x[0];  
for(var j = 1;j < x.length;j++){
	if(x[j] > max){
		max = x[j];
		if(y[j] >)
	}
} */

/*for(var j = 0; j < x.length - 1; j++) {
        for(var k = j+1;k<l;k++) {
          if(x[j]>x[k]) {
                var temp = x[j];
                x[j] = x[k];
                x[k] = temp;
            }
        }
    }*/

    /*function sortNumber(a,b){
	return a - b;
}
x.sort(sortNumber);
print(x);
*/
